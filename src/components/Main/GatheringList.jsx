import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { AllgatheringLookUpAPI } from '../../api/gathering';
import GatheringItem from './GatheringItem';
import { ListBlock, Title } from './GatheringList.style';

function GatheringList() {
  const { lat, lng } = useSelector((state) => state.location.value);

  const { data, refetch } = useQuery(
    ['getAllGathering'],
    () =>
      AllgatheringLookUpAPI(
        lat || '37.52197524055062',
        lng || '127.16017523675508',
      ),
    {
      suspense: true,
      refetchOnWindowFocus: false,
      retry: false,
    },
  );

  console.log(data);

  useEffect(() => {
    refetch();
  }, [lat, lng]);

  return (
    <>
      <Title>동네 모임</Title>
      <ListBlock>
        {data.data.map((party) => (
          <GatheringItem key={party.partyId} info={party} />
        ))}
      </ListBlock>
    </>
  );
}

export default GatheringList;
