import React, { useState, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { rankAPI } from "../../api/Users";

import { Wrapper, RankList } from "./Rank.styles";

function Rank () {

  const page = 1;
  const size = 5;

  function getRankList() {
    return rankAPI(page, size).then((res)=> res.data);
  }

  const { list } = useQuery('getRankList', getRankList);

  console.log(list);

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