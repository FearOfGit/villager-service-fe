import React, { useState } from 'react';
import TownSelector from './TownSelector';
import { ContentWrapper } from './TownSetupContent.style';

function TownSetupContent({
  myTownList,
  changeNickname,
  removeTown,
  currentTownId,
  selectTown,
}) {
  const [editId, setEditId] = useState(null); // 수정 및 삭제 창을 보여줄 것인지

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
      </div>
    </ContentWrapper>
  );
}

export default TownSetupContent;
