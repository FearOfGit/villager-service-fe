import React, { useState, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { rankAPI } from "../../api/Users";

import { Wrapper, RankList } from "./Rank.styles";

function Rank () {

  const listPage = 1;
  const listSize = 10;

  function getRankList() {
    const params = {params: {page: listPage, size: listSize}};
    return rankAPI(params).then((res)=> res.data);
  }

  const { data } = useQuery('getRankList', getRankList);

  console.log(data);

  let rankList = [];

  if (data) {
    rankList = data.follows;
  };

  return (
    <>
      <Wrapper>
        <RankList>
          <li>
            <div>
              순위
            </div>
            <div>
              닉네임
            </div>
            <div>
              팔로워
            </div>
          </li>
          {rankList.map((user, index) => (
            <li
              key={user.index}
            >
              <div>
                {index + 1}
              </div>
              <div>
                {user.nickName}
              </div>
              <div>
                {user.followCount}
              </div>
            </li>
          ))}
        </RankList>
      </Wrapper>
    </>
  );
}

export default Rank;