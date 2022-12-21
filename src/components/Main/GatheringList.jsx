import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { AllgatheringLookUpAPI } from '../../api/gathering';
import GatheringItem from './GatheringItem';
import { ListBlock } from './GatheringList.style';

const { navigator } = window;

// 추후에는 전역 상태로 관리하는 사용자의 위도와 경도를 사용할 예정!
function GatheringList() {
  const [location, setLocation] = useState({
    lat: '33.450701',
    lnt: '126.570667',
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setLocation({
        ...location,
        lat: String(coords.latitude),
        lnt: String(coords.longitude),
      });
    });
  }, []);

  const { data } = useQuery(
    ['getAllGathering'],
    () => AllgatheringLookUpAPI(location.lat, location.lnt),
    {
      suspense: true,
      refetchOnWindowFocus: false,
      retry: false,
    },
  );

  return (
    <ListBlock>
      {data.data.map((party) => (
        <GatheringItem key={party.partyId} info={party} />
      ))}
    </ListBlock>
  );
}

export default GatheringList;
