import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import {
  ButtonWrapper,
  Content,
  GatheringName,
  GatheringTagWrapper,
  JoinButton,
  LikeButton,
  MemberInfoWrapper,
  SubTitle,
  Wrapper,
} from './GatheringInfo.style';
import Map from './Map';
import { gatheringLookUpAPI } from '../../api/gathering';

// AiFillHeart
// AiOutlineHeart
// 모임 이름, 인원수, 모임 점수, 상세 설명, 장소, 시작일, 종료일, 참가비, 태그
function GatheringInfo({ searchId }) {
  const [location, setLocation] = useState({});
  const { data } = useQuery(
    ['getInfo', searchId],
    () => gatheringLookUpAPI(searchId),
    {
      suspense: true,
      refetchOnWindowFocus: false,
      retry: false,
    },
  );
  console.log(data);

  useEffect(() => {
    const { kakao } = window;
    const geocoder = new kakao.maps.services.Geocoder();
    const callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setLocation({
          lat: result[0].address.y,
          lng: result[0].address.x,
        });
      }
    };
    geocoder.addressSearch(data.data.location, callback);
  }, [data]);
  return (
    <>
      <div className="flex">
        <GatheringName>{data.data.partyName}</GatheringName>
        <ButtonWrapper>
          <LikeButton>
            {data.data.partyLike ? <AiFillHeart /> : <AiOutlineHeart />}
          </LikeButton>
          <JoinButton>신청하기</JoinButton>
        </ButtonWrapper>
      </div>
      <GatheringTagWrapper>
        {data.data.tagNameList.map((el) => (
          <span key={el} className="tag">
            #{el}
          </span>
        ))}
      </GatheringTagWrapper>
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
      </div>
    </>
  );
}

export default GatheringInfo;
