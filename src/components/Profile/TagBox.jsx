/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MdCreate } from 'react-icons/md';
import {
  AddButton,
  ShowButton,
  Tag,
  TagBoxWrapper,
  TagContainer,
  TagInput,
  Title,
} from './TagBox.style';
import { updateTagAPI } from '../../api/Users';

function TagBox({ data, refetch }) {
  const [isShow, setIsShow] = useState(false);
  const [inputValue, setInputValue] = useState('');
  // const [tagList, setTagList] = useState(data.tags);
  const myId = useSelector((state) => state.user.value.userId);
  const isMe = String(data.memberId) === String(myId);
  // const isFull = tagList.length === 5;
  const isFull = data.tags.length === 5;

  // useEffect(() => {
  //   async function updateTag() {
  //     const response = await updateTagAPI({
  //       tags: [...tagList],
  //     });
  //     console.log(response);
  //   }

  //   updateTag();
  // }, [tagList]);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onAdd = async () => {
    const target = `#${inputValue}`;
    await updateTagAPI({
      tags: [...data.tags, target],
    });
    setInputValue('');
    refetch();
  };

  const onRemove = async (tag) => {
    if (!isMe) return;

    const newTagList = data.tags.filter((el) => el !== tag);
    const response = await updateTagAPI({
      tags: [...newTagList],
    });
    console.log(response);
    refetch();
  };

  return (
    <TagBoxWrapper>
      <div className="flex">
        <Title>태그 정보</Title>
        {isMe && !isFull && (
          <ShowButton onClick={() => setIsShow(!isShow)}>
            <MdCreate />
          </ShowButton>
        )}
      </div>
      {isShow && (
        <div className="space">
          <TagInput
            value={inputValue}
            onChange={onChange}
            placeholder="태그 입력"
          />
          {inputValue && <AddButton onClick={onAdd}>추가</AddButton>}
        </div>
      )}
      <TagContainer>
        {data.tags.map((tag, idx) => (
          <Tag key={idx} onClick={() => onRemove(tag)}>
            {tag}
          </Tag>
        ))}
      </TagContainer>
    </TagBoxWrapper>
  );
}

export default TagBox;
