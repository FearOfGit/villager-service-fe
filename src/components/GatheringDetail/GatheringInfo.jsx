import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import {
  ButtonWrapper,
  Content,
  DestroyButton,
  EditButton,
  GatheringName,
  GatheringTagWrapper,
  JoinButton,
  LikeButton,
  MemberInfoWrapper,
  SubTitle,
  Wrapper,
} from './GatheringInfo.style';
import Map from './Map';
import {
  gatheringLookUpAPI,
  gatheringLikeAPI,
  gatheringDeleteAPI,
  gatheringApplyAPI,
} from '../../api/gathering';
import ApplicationList from './ApplicationList';

function GatheringInfo({ searchId }) {
  const navigate = useNavigate();
  const myId = useSelector((state) => state.user.value.userId);
  const [like, setLike] = useState(false);
  const [location, setLocation] = useState({});
  const { data } = useQuery(
    ['getGathering', searchId],
    () => gatheringLookUpAPI(searchId),
    {
      suspense: true,
      refetchOnWindowFocus: false,
      retry: false,
    },
  );
  const isMe = String(myId) === String(data.data.memberId);

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
    console.log(response);
  };

  return (
    <>
      <GatheringName>{data.data.partyName}</GatheringName>
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
        {!isMe && <JoinButton onClick={handleApply}>신청하기</JoinButton>}
        {isMe && <EditButton>수정하기</EditButton>}
        {isMe && <DestroyButton onClick={handleDelete}>삭제하기</DestroyButton>}
      </ButtonWrapper>

      <Map lat={location.lat} lng={location.lng} />
      <div className="info">
        <Wrapper>
          <SubTitle>모임 기간</SubTitle>
          <Content>
            <span>{data.data.startDt}</span>
            <span className="end">{data.data.endDt}</span>
          </Content>
        </Wrapper>
        <Wrapper>
          <SubTitle>매너 점수</SubTitle>
          <Content>{data.data.score} 이상</Content>
        </Wrapper>
        <Wrapper>
          <SubTitle>참가비</SubTitle>
          <Content>{data.data.amount}원</Content>
        </Wrapper>
        <Wrapper>
          <SubTitle>상세 설명</SubTitle>
          <Content>{data.data.content}</Content>
        </Wrapper>
        <Wrapper>
          <SubTitle>인원수</SubTitle>
          <Content>
            <div>1 / {data.data.numberPeople}</div>
          </Content>
        </Wrapper>
        <MemberInfoWrapper>
          <div className="leader">
            리더 <span className="manner">100</span>
          </div>
          <div className="member">
            멤버 <span className="manner">90</span>
          </div>
          <div className="member">
            멤버 <span className="manner">90</span>
          </div>
          <div className="member">
            멤버 <span className="manner">80</span>
          </div>
          <div className="member">
            멤버 <span className="manner">80</span>
          </div>
          <div className="member">
            멤버 <span className="manner">80</span>
          </div>
          <div className="member">
            멤버 <span className="manner">80</span>
          </div>
          <div className="member">
            멤버 <span className="manner">80</span>
          </div>
          <div className="member">
            멤버 <span className="manner">80</span>
          </div>
        </MemberInfoWrapper>
        <ApplicationList searchId={searchId} />
      </div>
    </>
  );
}

export default GatheringInfo;

// data.data.content, targetMemberId, accept
