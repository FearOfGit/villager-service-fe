import React from 'react';
import {
  Content,
  GatheringName,
  GatheringTagWrapper,
  MemberInfoWrapper,
  SubTitle,
  Wrapper,
} from './GatheringInfo.style';
import Map from './Map';

// 모임 이름, 인원수, 모임 점수, 상세 설명, 장소, 시작일, 종료일, 참가비, 태그
function GatheringInfo() {
  return (
    <>
      <GatheringName>모임명</GatheringName>
      <GatheringTagWrapper>
        <span className="tag">#태그</span>
        <span className="tag">#태그</span>
        <span className="tag">#태그</span>
      </GatheringTagWrapper>
      <Map lat={33.450701} lng={126.570667} />
      <div className="info">
        <Wrapper>
          <SubTitle>모임 기간</SubTitle>
          <Content>
            <span>2022-12-15</span>
            <span className="end">2022-12-20</span>
          </Content>
        </Wrapper>
        <Wrapper>
          <SubTitle>매너 점수</SubTitle>
          <Content>50 이상</Content>
        </Wrapper>
        <Wrapper>
          <SubTitle>참가비</SubTitle>
          <Content>10000원</Content>
        </Wrapper>
        <Wrapper>
          <SubTitle>상세 설명</SubTitle>
          <Content>설명...</Content>
        </Wrapper>
        <Wrapper>
          <SubTitle>인원수</SubTitle>
          <Content>
            <div>10 / 20</div>
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
