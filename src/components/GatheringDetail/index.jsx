import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from './CommentList';
import GatheringInfo from './GatheringInfo';
import { GatheringDetailTemplate } from './index.style';

function GatheringDetail() {
  const { id: searchId } = useParams();
  return (
    <GatheringDetailTemplate>
      <div className="inner">
        <Suspense fallback={<div>로딩중...</div>}>
          <GatheringInfo searchId={searchId} />
        </Suspense>
        <Suspense fallback={<div>로딩중...</div>}>
          <CommentList />
        </Suspense>
      </div>
    </GatheringDetailTemplate>
  );
}

export default GatheringDetail;
