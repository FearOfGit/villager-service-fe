import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTownAPI, editTownNameAPI, getTownAPI } from '../../../api/Town';
import { changeLocation } from '../../../store/Location';
import { TownSetupWrapper } from './index.style';
import TownSetupContent from './TownSetupContent';
import TownSetupHeader from './TownSetupHeader';

function TownSetup({ show, onClose }) {
  const dispatch = useDispatch();
  const myId = useSelector((state) => state.user.value.userId);
  const [currentTownId, setCurrentTownId] = useState(0);
  const { data, refetch } = useQuery(
    ['getTown', myId],
    () => getTownAPI(myId),
    {
      suspense: true,
      refetchOnWindowFocus: false,
      retry: false,
    },
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    const { towns } = data.data;
    if (!towns.length) {
      dispatch(
        changeLocation({
          lat: null,
          lng: null,
          nickname: '동네',
          address: null,
        }),
      );
      return;
    }
    const { latitude, longitude, townName, cityName } = towns[currentTownId];

    dispatch(
      changeLocation({
        lat: latitude,
        lng: longitude,
        nickname: townName,
        address: cityName,
      }),
    );
  }, [currentTownId, data]);

  const changeNickname = async (townId, nickname) => {
    const response = await editTownNameAPI(townId, {
      townName: nickname,
      main: false,
    });
    console.log(response);
    refetch();
  };

  const removeTown = async (id) => {
    await deleteTownAPI(id);
    setCurrentTownId(0);
    refetch();
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
