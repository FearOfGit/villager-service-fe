import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import {
  Wrapper,
  SubmitWrapper,
  ContentSection,
  Button,
  ButtonSection,
} from './AddMap.styles';
import { deleteTownAPI, insertTownAPI, searchTownAPI } from '../../api/Town';
import SelectTown from './SelectTown';

function AddMap(props) {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  console.log(location);

  const [town, setTown] = useState();
  const [village, setVillage] = useState('아무개동');
  const [isSelected, setIsSelected] = useState('없음');

  const temp = props;

  const handleClick = () => {
    temp.click(true);
    temp.list(town);
  };

  const selectTown = (value) => {
    if (value) {
      setIsSelected(value);
      console.log(isSelected);
    }
  };

  async function addTown() {
    const body = JSON.stringify({
      townId: town[0].townId,
      townName: village,
      latitude: location.value.latitude,
      longitude: location.value.longitude,
    });
    await insertTownAPI(body)
      .then((response) => {
        console.log(response.data);
        toast.success(<h3>내 동네를 성공적으로 추가했습니다! 😊</h3>);
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.response.data.errorMessage);
      });
  }

  async function deleteTown() {
    await deleteTownAPI(isSelected)
      .then((response) => {
        console.log(response.data);
        toast.success(<h3>내 동네를 성공적으로 삭제했습니다! 😊</h3>);
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.response.data.errorMessage);
      });
  }

  useEffect(() => {
    const body = {
      latitude: location.value.latitude,
      longitude: location.value.longitude,
    };
    searchTownAPI(body).then((res) => {
      // console.log(body, res.data);
      setTown(res.data.towns);
      setVillage(town[0].name.split(' ')[2]);
    });
  }, [town]);

  return (
    <>
      <ToastContainer />
      {town && (
        <Wrapper>
          <SubmitWrapper>
            <ContentSection>
              현 위치에 기반한 회원님의 동네는
              <br />
              {village}
              &nbsp; 입니다.
            </ContentSection>
            <SelectTown select={selectTown} />
            <ButtonSection>
              <Button type="button" onClick={() => addTown()}>
                동네 설정하기
              </Button>
              <Button type="button" onClick={() => deleteTown()}>
                동네 삭제하기
              </Button>
            </ButtonSection>
            <Button type="button" onClick={() => handleClick()}>
              동네 목록 조회하기
            </Button>
          </SubmitWrapper>
        </Wrapper>
      )}
    </>
  );
}

export default AddMap;
