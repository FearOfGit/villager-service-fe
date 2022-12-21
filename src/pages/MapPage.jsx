import React, { useState } from 'react';
import Map from '../components/Map/Map';
import AddMap from '../components/Map/AddMap';
import TownListModal from '../components/modal/TownList/TownListModal';

function MapPage() {
  const [isList, setIsList ] = useState(false);
  const [townList, setTownList ] = useState(false);

  const isClicked = (value) => {
    if (value) {
      setIsList(value);
      console.log(value);
      console.log(isList);
    };
  };

  const showList = (value) => {
    if (value) {
      setTownList(value);
      console.log(value);
    };
  };

  return (
    <>
      <Map/>
      <AddMap
        click = {isClicked}
        list = {showList}
      />
      {isList && <TownListModal modal={setIsList} townInfo={townList}/>}
    </>
  );
}

export default MapPage;
