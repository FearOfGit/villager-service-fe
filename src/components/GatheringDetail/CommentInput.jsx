/* eslint-disable no-shadow */
import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { CommentButton, CommentInputWrapper } from './CommentInput.style';

function CommentInput() {
  const [inputValue, setInputValue] = useState('');
  const [textareaHeight, setTextareaHeight] = useState({
    row: 1,
    lineBreak: {},
  });

  const resizeTextarea = (e) => {
    const { scrollHeight, clientHeight, value } = e.target;

    if (scrollHeight > clientHeight) {
      setTextareaHeight((prev) => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [value.length - 1]: true },
      }));
    }

    if (textareaHeight.lineBreak[value.length]) {
      setTextareaHeight((prev) => ({
        row: prev.row - 1,
        lineBreak: { ...prev.lineBreak, [value.length]: false },
      }));
    }
  };

  const onKeyEnter = (e) => {
    if (e.code === 'Enter') {
      setTextareaHeight((prev) => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [e.target.value.length]: true },
      }));
    }
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
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
        {inputValue && <CommentButton type="button">등록</CommentButton>}
      </div>
    </CommentInputWrapper>
  );
}

export default CommentInput;
