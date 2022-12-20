import React from 'react';
import { CommentInputWrapper, CommentTextArea } from './CommentInput.style';

function CommentInput() {
  return (
    <CommentInputWrapper>
      <CommentTextArea rows={10} />
      <button type="button">추가</button>
    </CommentInputWrapper>
  );
}

export default CommentInput;
