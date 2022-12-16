/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { MdSettings } from 'react-icons/md';
import { SelectWrapper, TownSelectorWrapper } from './TownSelector.style';

function TownSelector({
  town,
  edit,
  select,
  setEditId,
  changeNickname,
  removeTown,
  selectTown,
}) {
  const [inputValue, setInputValue] = useState(town.nickname);

  const onClickEditBtn = (e) => {
    e.stopPropagation();

    if (edit) {
      setEditId(null);
      return;
    }
    setEditId(town.id);
  };
  return (
    <TownSelectorWrapper>
      <SelectWrapper onClick={() => selectTown(town.id)} select={select}>
        <span className="name">{town.name}</span>
        <span className="nickname">{town.nickname}</span>
        <div onClick={onClickEditBtn} className="btn--setting">
          <MdSettings />
        </div>
      </SelectWrapper>
      {edit && (
        <div className="edit">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="button"
            onClick={() => changeNickname(town.id, inputValue)}
          >
            수정
          </button>
          <button type="button" onClick={() => removeTown(town.id)}>
            삭제
          </button>
        </div>
      )}
    </TownSelectorWrapper>
  );
}

export default TownSelector;
