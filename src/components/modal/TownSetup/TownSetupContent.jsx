import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TownSelector from './TownSelector';
import { SelectWrapper } from './TownSelector.style';
import { ContentWrapper } from './TownSetupContent.style';

function TownSetupContent({
  myTownList,
  changeNickname,
  removeTown,
  currentTownId,
  selectTown,
  onClose,
}) {
  const [editId, setEditId] = useState(null); // 수정 및 삭제 창을 보여줄 것인지
  const navigate = useNavigate();

  const onAdd = () => {
    onClose();
    navigate('/map');
  };
  return (
    <ContentWrapper>
      <h3>동네 선택</h3>
      <div className="flex">
        {myTownList.map((town, idx) => (
          <TownSelector
            key={town.memberTownId}
            index={idx}
            town={town}
            select={currentTownId === idx}
            edit={editId === idx}
            setEditId={setEditId}
            changeNickname={changeNickname}
            removeTown={removeTown}
            selectTown={selectTown}
          />
        ))}
        {myTownList.length < 2 && (
          <SelectWrapper onClick={onAdd}>+</SelectWrapper>
        )}
      </div>
    </ContentWrapper>
  );
}

export default TownSetupContent;
