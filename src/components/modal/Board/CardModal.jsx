import React from "react";
import { useQuery } from "react-query";
import { Wrapper, Modal, CancelBtn  } from "./CardModal.styles";
import { postDetailAPI } from "../../../api/Board";

function CardModal ({modal, postId}) {
  const cancel = () => {
    modal(false);
  };

  function getPostDetail() {
    return postDetailAPI(postId).then((res)=> res.data);
  }

  const { data } = useQuery('getPostDetail', getPostDetail);

  console.log('상세정보', data);

  return(
    <>
      <Wrapper>
        <CancelBtn type="button" onClick={cancel}>
          닫기
        </CancelBtn>
        <Modal>
          안녕
        </Modal>
      </Wrapper>
    </>
  );
}

export default CardModal;