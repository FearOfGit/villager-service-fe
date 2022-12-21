import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import CommentInput from './CommentInput';
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
        <CommentList />
        <CommentInput />
      </div>
    </GatheringDetailTemplate>
  );
}

export default GatheringDetail;
