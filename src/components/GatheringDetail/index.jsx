import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import GatheringInfo from './GatheringInfo';
import { GatheringDetailTemplate } from './index.style';
// 모임명, 모임 점수, 모임 시작 시간, 모임 종료 시간, 모임 금액, 모임장, 모임장 매너 점수, 댓글
function GatheringDetail() {
  return (
    <GatheringDetailTemplate>
      <div className="inner">
        <GatheringInfo />
        <CommentList />
        <CommentInput />
      </div>
    </GatheringDetailTemplate>
  );
}

export default GatheringDetail;
