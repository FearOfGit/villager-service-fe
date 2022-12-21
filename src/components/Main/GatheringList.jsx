import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { AllgatheringLookUpAPI } from '../../api/gathering';
import GatheringItem from './GatheringItem';
import { ListBlock } from './GatheringList.style';

function GatheringList() {
  const { latitude, longitude } = useSelector((state) => state.location.value);

  const { data, refetch } = useQuery(
    ['getAllGathering'],
    () => AllgatheringLookUpAPI(latitude, longitude),
    {
      suspense: true,
      refetchOnWindowFocus: false,
      retry: false,
    },
  );

  useEffect(() => {
    refetch();
  }, [latitude, longitude]);

  return (
    <ListBlock>
      {data.data.map((party) => (
        <GatheringItem key={party.partyId} info={party} />
      ))}
    </ListBlock>
  );
}

export default GatheringList;
