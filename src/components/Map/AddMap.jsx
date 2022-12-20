import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { changeLat, changeLong } from '../../store/Location';
import { Wrapper, SubmitWrapper, ContentSection, Button, ButtonSection } from "./AddMap.styles";
import { insertTownAPI, searchTownAPI } from "../../api/Town";

function AddMap () {
  const dispatch = useDispatch();
  const location = useSelector(state => state.location);

  async function addTown () {
    const body = {
      latitude: location.value.latitude,
      longitude: location.value.longitude
    };
    await insertTownAPI(body)
      .then((response) => {
        console.log(response.data);
        toast.success(<h3>내 동네를 성공적으로 추가했습니다! 😊</h3>)
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.response.data.errorMessage);
      });
  }

  const [ town, setTown ] = useState();
  const [village, setVillage] = useState('아무개동');

  useEffect(() => {
    const body = {
      latitude: location.value.latitude,
      longitude: location.value.longitude
    };
    searchTownAPI(body).then((res) => {
      // console.log(body, res.data);
      setTown(res.data.towns);
      setVillage(town[0].name.split(' ')[2]);
    });
  }, [town]);
  
  return (
    <>
    <ToastContainer/>
    {town && (
      <Wrapper>
        <SubmitWrapper>
          <ContentSection>
            현 위치에 기반한 회원님의 동네는
            <br/>
            {village}
            &nbsp;
            입니다.
          </ContentSection>
          <ButtonSection>
            <Button type="button" onClick={()=>addTown()}>
              동네 설정하기
            </Button>
            <Button type="button">
              동네 목록 조회하기
            </Button>
          </ButtonSection>
        </SubmitWrapper>
      </Wrapper>
    )}
    </>
  );
}

export default AddMap;