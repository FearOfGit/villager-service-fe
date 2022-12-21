import React, { useEffect, useState } from "react";
import { getTownAPI } from "../../api/Town";
import { Wrapper, Button } from "./SelectTown.styles";

function SelectTown () {
  const [ isFirst, setIsFirst ] = useState(true);
  const [ firstTown, setFirstTown ] = useState([]);
  const [ secondTown, setSecondTown ] = useState([]);

  useEffect(()=> {
    getTownAPI().then((res)=>{
      console.log(res.data);
      if (res.data.towns[0]) {
        setFirstTown(res.data.towns[0]);
      };
      if (res.data.towns[1]) {
        setSecondTown(res.data.towns[1]);
      };
    })
  }, []);

  const handleFirst = () => {
    setIsFirst(true);
  };

  const handleSecond = () => {
    setIsFirst(false);
  };

  return (
    <>
      <Wrapper>
        { firstTown && (
          <Button
            value={isFirst}
            onClick={()=>handleFirst()}
          >
            {firstTown.townName? firstTown.townName: '없음'}
          </Button>
        )}
        { secondTown && (
          <Button
            value={isFirst}
            onClick={()=>handleSecond()}
          >
            {secondTown.townName? secondTown.townName: '없음'}
          </Button>
        )}
      </Wrapper>
    </>
  );
}

export default SelectTown;