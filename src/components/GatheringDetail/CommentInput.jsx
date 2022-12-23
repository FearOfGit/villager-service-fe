/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import { writeCommentAPI } from '../../api/gathering';
import { CommentButton, CommentInputWrapper } from './CommentInput.style';

function CommentInput({ refetch }) {
  const { id: partyId } = useParams();
  const [inputValue, setInputValue] = useState('');

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onClick = async () => {
    const response = await writeCommentAPI(partyId, inputValue);
    console.log(response);
    setInputValue('');
    refetch();
  };

  return (
    <CommentInputWrapper>
      <TextareaAutosize
        className="input"
        value={inputValue}
        onChange={onChange}
        placeholder="댓글 입력"
      />
      <div className="btn-wrapper">
        {inputValue && (
          <CommentButton type="button" onClick={onClick}>
            등록
          </CommentButton>
        )}
      </div>
    </CommentInputWrapper>
  );
}

export default CommentInput;
