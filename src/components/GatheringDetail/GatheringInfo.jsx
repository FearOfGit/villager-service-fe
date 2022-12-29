import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import Drawer from 'react-modern-drawer';
import {
  ButtonWrapper,
  DestroyButton,
  GatheringName,
  GatheringTagWrapper,
  JoinButton,
  LikeButton,
  PartyState,
  StateButton,
  StateButtonWrapper,
} from './GatheringInfo.style';
import Map from './Map';
import {
  gatheringLookUpAPI,
  gatheringLikeAPI,
  gatheringDeleteAPI,
  gatheringApplyAPI,
  startGatheringAPI,
  endGatheringAPI,
} from '../../api/gathering';
import ApplicationList from './ApplicationList';
import InfoBox from './InfoBox';
import MemberList from './MemberList';
import 'react-modern-drawer/dist/index.css';
import TermExtension from './TermExtension';

const partyState = {
  READY: '준비중',
  START: '진행중',
  END: '종료',
};

function GatheringInfo({ searchId }) {
  const navigate = useNavigate();
  const myId = useSelector((state) => state.user.value.userId);
  const [like, setLike] = useState(false);
  const [location, setLocation] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { data, refetch } = useQuery(
    ['getGathering', searchId],
    () => gatheringLookUpAPI(searchId),
    {
      suspense: true,
      refetchOnWindowFocus: false,
      retry: false,
    },
  );
  const isMe = String(myId) === String(data.data.memberId);
  const today = new Date();
  const startDate = new Date(data.data.startDt);
  const endDate = new Date(data.data.endDt);
  // const tomorrow = new Date(endDate.setDate(endDate.getDate() + 1));
  const isStart = today >= startDate;
  const isEnd = today >= endDate;

  useEffect(() => {
    const { kakao } = window;
    const geocoder = new kakao.maps.services.Geocoder();
    const callback = (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setLocation({
          lat: result[0].address.y,
          lng: result[0].address.x,
        });
      }
    };
    geocoder.addressSearch(data.data.location, callback);
    setLike(data.data.partyLike);
    console.log(data);
  }, [data]);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLike = async () => {
    const response = await gatheringLikeAPI(searchId);
    console.log(response);
    setLike(!like);
  };

  const handleDelete = async () => {
    const response = await gatheringDeleteAPI(searchId);
    console.log(response);
    navigate('/');
  };

  const handleApply = async () => {
    const response = await gatheringApplyAPI(searchId);
    toast.success(<h3>모임 신청을 보냈습니다! 😊</h3>);
    console.log(response);
  };

  const handleStart = async () => {
    const response = await startGatheringAPI(searchId);
    console.log(response);
    refetch();
  };

  const handleEnd = async () => {
    const response = await endGatheringAPI(searchId);
    console.log(response);
    refetch();
  };

  return (
    <>
      <ToastContainer />
      <div className="flex">
        <GatheringName>{data.data.partyName}</GatheringName>
        <PartyState state={data.data.state}>
          {partyState[data.data.state]}
        </PartyState>
      </div>
      <GatheringTagWrapper>
        {data.data.tagNameList.map((el) => (
          <span key={el} className="tag">
            #{el}
          </span>
        ))}
      </GatheringTagWrapper>
      <ButtonWrapper>
        <LikeButton onClick={handleLike}>
          {like ? <AiFillHeart /> : <AiOutlineHeart />}
        </LikeButton>
        {!isMe && data.data.state === 'READY' && (
          <JoinButton onClick={handleApply}>신청</JoinButton>
        )}
        {isMe && data.data.state !== 'START' && (
          <DestroyButton onClick={handleDelete}>삭제</DestroyButton>
        )}
      </ButtonWrapper>

      <Map lat={location.lat} lng={location.lng} />
      <div className="info">
        <InfoBox data={data} />
      </div>
      <MemberList members={data.data.memberClubs} />
      {isMe && data.data.state === 'READY' && (
        <ApplicationList searchId={searchId} />
      )}
      {isMe && isStart && !isEnd && data.data.state === 'READY' && (
        <StateButtonWrapper>
          <StateButton onClick={handleStart}>모임 시작</StateButton>
        </StateButtonWrapper>
      )}
      {isMe && isEnd && data.data.state === 'START' && (
        <StateButtonWrapper>
          <StateButton grey="true" onClick={toggleDrawer}>
            모임 연장
          </StateButton>
          <StateButton red="true" onClick={handleEnd}>
            모임 종료
          </StateButton>
        </StateButtonWrapper>
      )}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="bottom"
        size="40vw"
        className="drawer"
      >
        <TermExtension
          searchId={searchId}
          refetch={refetch}
          setIsOpen={setIsOpen}
        />
      </Drawer>
    </>
  );
}

export default GatheringInfo;

// data.data.content, targetMemberId, accept
