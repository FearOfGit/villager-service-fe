/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { ErrorText } from './index.style';
import { TagButton, TagInput, TagListWrapper } from './TagBox.style';

function TagBox({ tagList, fieldProps, isActive, errMsg, onAdd, onRemove }) {
  return (
    <>
      <ErrorText tag="true">{errMsg ? `🤔 ${errMsg}` : '🙂'}</ErrorText>
      <div className="flex">
        <TagInput
          disabled={tagList.length >= 3}
          type="text"
          autoComplete="off"
          {...fieldProps}
        />
        <TagButton type="button" onClick={onAdd} disabled={isActive}>
          추가
        </TagButton>
      </div>
      <TagListWrapper>
        {tagList.map((tag) => (
          <span key={tag} onClick={() => onRemove(tag)}>
            #{tag}
          </span>
        ))}
      </TagListWrapper>
    </>
  );
}

export default TagBox;
