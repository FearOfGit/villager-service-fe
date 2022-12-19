import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import GatheringInfo from './GatheringInfo';
import { GatheringDetailTemplate } from './index.style';
// 모임명, 모임 점수, 모임 시작 시간, 모임 종료 시간, 모임 금액, 모임장, 모임장 매너 점수, 댓글
function GatheringDetail() {
  const { id: searchId } = useParams();
  return (
    <GatheringDetailTemplate>
      <div className="inner">
        <Suspense fallback={<div>로딩중...</div>}>
          <GatheringInfo searchId={searchId} />
        </Suspense>
        <CommentList />
        <CommentInput />
      </div>
    </GatheringDetailTemplate>
  );
}

export default GatheringDetail;
