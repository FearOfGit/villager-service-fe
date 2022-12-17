import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { changeLat, changeLong } from '../../store/Location';
import { Wrapper, SubmitWrapper, ContentSection, Button, ButtonSection } from "./AddMap.styles";
import { searchTownAPI } from "../../api/Town";

function AddMap () {
  const dispatch = useDispatch();
  const location = useSelector(state => state.location);
  
  function getTownList () {
    const body = {
      latitude: location.value.latitude,
      longitude: location.value.longitude
    };
    return searchTownAPI(body).then((res) => res.data);
  }

  const { data } = useQuery('getTown', getTownList);

  console.log("변화된 위치", location.value.latitude, location.value.longitude);
  console.log("불러온 데이터", data);
  return (
    <>
    <Wrapper>
      <SubmitWrapper>
        <ContentSection>
          현 위치에 기반한 회원님의 동네는
          <br/>
          !연남동!
          &nbsp;
          입니다.
        </ContentSection>
        <ButtonSection>
          <Button>
            동네 설정하기
          </Button>
          <Button type="button" onClick={()=>getTownList()}>
            동네 조회하기
          </Button>
        </ButtonSection>
      </SubmitWrapper>
    </Wrapper>
    </>
  );
}

export default AddMap;