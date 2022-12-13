/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { InputWrapper, TagBoxWrapper, TagListWrapper } from './TagBox.style';

function TagBox({
  disabled,
  name,
  type,
  fieldProps,
  tagList,
  onAdd,
  onRemove,
}) {
  return (
    <TagBoxWrapper>
      <InputWrapper>
        <input
          disabled={tagList.length >= 3}
          id={name}
          type={type}
          autoComplete="off"
          {...fieldProps}
        />
        <button onClick={onAdd} disabled={disabled} type="button">
          추가
        </button>
      </InputWrapper>
      <TagListWrapper>
        {tagList.map((tag) => (
          <span key={tag} onClick={() => onRemove(tag)}>
            #{tag}
          </span>
        ))}
      </TagListWrapper>
    </TagBoxWrapper>
  );
}

export default TagBox;
