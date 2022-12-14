import React from 'react';
import { GatheringDetailTemplate } from './index.style';
// 모임명, 모임 점수, 모임 시작 시간, 모임 종료 시간, 모임 금액, 모임장, 모임장 매너 점수, 댓글
const chat = [
  {
    id: 1,
    text: 'Hi',
    owner: 'me',
  },
  {
    id: 2,
    text: 'Hi',
    owner: 'other',
  },
];
function GatheringDetail() {
  return (
    <GatheringDetailTemplate>
      <div className="info">
        <div className="name">
          <h2>모임명</h2>
        </div>
        <div className="flex">
          <div className="leader">
            <h3>leader</h3>
            <div>
              <span>닉네임: </span>
              <span>닉네임</span>
            </div>
            <div>
              <span>매너 점수: </span>
              <span>100</span>
            </div>
          </div>
          <div className="description">
            <h3>description</h3>
            <div>
              <span>매너 점수 조건: </span>
              <span>100</span>
            </div>
            <div>
              <span>시작일: </span>
              <span>시작일</span>
            </div>
            <div>
              <span>종료일: </span>
              <span>종료일</span>
            </div>
            <div>
              <span>참가비: </span>
              <span>참가비</span>
            </div>
          </div>
        </div>
      </div>
      <div className="comment">댓글</div>
    </GatheringDetailTemplate>
  );
}

export default GatheringDetail;
