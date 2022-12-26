import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, SubTitle, Content, DescWrapper } from './InfoBox.style';

function InfoBox({ data }) {
  return (
    <>
      <Wrapper>
        <SubTitle>모임장 : </SubTitle>
        <Content>
          <Link className="user" to={`/profile/${data.data.memberId}`}>
            {data.data.nickname}
          </Link>
        </Content>
      </Wrapper>
      <Wrapper>
        <SubTitle>모임 기간 : </SubTitle>
        <Content>
          <span>{data.data.startDt} ~ </span>
          <span>{data.data.endDt}</span>
        </Content>
      </Wrapper>
      <Wrapper>
        <SubTitle>매너 점수 : </SubTitle>
        <Content>{data.data.score} 이상</Content>
      </Wrapper>
      <Wrapper>
        <SubTitle>참가비 : </SubTitle>
        <Content>{data.data.amount}원</Content>
      </Wrapper>
      <Wrapper>
        <SubTitle>인원수 : </SubTitle>
        <Content>
          <div>{data.data.numberPeople}명 예정</div>
        </Content>
      </Wrapper>
      <DescWrapper>
        <SubTitle>상세 설명</SubTitle>
        <div className="desc">{data.data.content}</div>
      </DescWrapper>
    </>
  );
}

export default InfoBox;
