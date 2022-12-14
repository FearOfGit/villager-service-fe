import React, { useState } from 'react';
import { ContentWrapper, TownSetupWrapper } from './index.style';
import TownSetupContent from './TownSetupContent';
import TownSetupHeader from './TownSetupHeader';

const mytown = [
  {
    id: 1,
    name: '연남동',
    nickname: 'Home',
  },
  {
    id: 2,
    name: '산본동',
    nickname: 'Other',
  },
];

function TownSetup({ show, onClose }) {
  const [myTownList, setMyTownList] = useState(mytown);
  const [currentTownId, setCurrentTownId] = useState(1);

  const changeNickname = (townId, nickname) => {
    const updatedMyTownList = myTownList.map((town) =>
      town.id === townId ? { ...town, nickname } : town,
    );
    setMyTownList(updatedMyTownList);
  };

  const removeTown = (townId) => {
    const updatedMyTownList = myTownList.filter((town) => town.id !== townId);
    setMyTownList(updatedMyTownList);
  };

  const selectTown = (townId) => {
    setCurrentTownId(townId);
  };

  return (
    <TownSetupWrapper show={show}>
      <TownSetupHeader onClose={onClose} />
      <TownSetupContent
        myTownList={myTownList}
        currentTownId={currentTownId}
        changeNickname={changeNickname}
        removeTown={removeTown}
        selectTown={selectTown}
      />
    </TownSetupWrapper>
  );
}

export default TownSetup;
