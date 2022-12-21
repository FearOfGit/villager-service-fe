import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { getTownAPI } from '../../../api/Town';
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
  const myId = useSelector((state) => state.user.value.userId);
  const [myTownList, setMyTownList] = useState(mytown);
  const [currentTownId, setCurrentTownId] = useState(1);
  const { data } = useQuery(['getTown', myId], () => getTownAPI(myId), {
    suspense: true,
    refetchOnWindowFocus: true,
    retry: false,
  });

  // console.log(data);

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
