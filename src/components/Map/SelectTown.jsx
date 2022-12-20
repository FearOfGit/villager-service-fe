import React, { useEffect, useState } from "react";
import { getTownAPI } from "../../api/Town";
import { Wrapper, Button } from "./SelectTown.styles";

function SelectTown () {
  const [ isFirst, setIsFirst ] = useState(true);
  const [ town, setTown ] = useState();

  useEffect(()=> {
    getTownAPI().then((res)=>{
      console.log(res.data);
      setTown(res.data.towns);
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
      {town && (
        <Wrapper>
          <Button
            value={isFirst}
            onClick={()=> handleFirst()}
          >
          {town[0] ? town[0] : "미정"}
          </Button>
          <Button
            value={isFirst}
            onClick={()=> handleSecond()}
          >
          {town[1] ? town[1] : "미정"}
          </Button>
        </Wrapper>
      )}
    </>
  );
}

export default SelectTown;