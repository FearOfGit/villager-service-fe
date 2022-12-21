import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { getTownAPI } from '../../../api/Town';
import { changeLocation } from '../../../store/Location';
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
  const dispatch = useDispatch();
  const myId = useSelector((state) => state.user.value.userId);
  const [myTownList, setMyTownList] = useState(mytown);
  const [currentTownId, setCurrentTownId] = useState(0);
  const { data, refetch } = useQuery(
    ['getTown', myId],
    () => getTownAPI(myId),
    {
      suspense: true,
      refetchOnWindowFocus: false,
      retry: false,
      cacheTime: Infinity,
      staleTime: Infinity,
    },
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    const { towns } = data.data;
    const { latitude, longitude, townName, cityName } = towns[currentTownId];

    if (!towns.length) return;
    dispatch(
      changeLocation({
        lat: latitude,
        lng: longitude,
        nickname: townName,
        address: cityName,
      }),
    );
  }, [currentTownId]);

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
        myTownList={data.data.towns}
        currentTownId={currentTownId}
        changeNickname={changeNickname}
        removeTown={removeTown}
        selectTown={selectTown}
      />
    </TownSetupWrapper>
  );
}

export default TownSetup;
