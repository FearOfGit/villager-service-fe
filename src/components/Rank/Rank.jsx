import React from "react";

import { Wrapper, RankList } from "./Rank.styles";

function Rank () {
  
  return (
    <>
      <Wrapper>
        <RankList>
          <li>
            1등
          </li>
          <li>
            블라블라
          </li>
        </RankList>
      </Wrapper>
    </>
  );
}

export default Rank;