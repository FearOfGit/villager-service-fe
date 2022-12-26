import React from "react";
import { useQuery } from "react-query";
import { postDetailAPI } from "../../../api/Board";
import { 
  Wrapper,
  Modal,
  TitleSection,
  ContentSection,
  ButtonSection,
  ImageSection,
  Title,
  Image,
  Content,
  CancelBtn,
} from "./CardModal.styles";

function CardModal ({modal, postId}) {
  const cancel = () => {
    modal(false);
  };

  function getPostDetail() {
    return postDetailAPI(postId).then((res)=> res.data);
  }

  const { data } = useQuery('getPostDetail', getPostDetail);
  
  let postDetail = [];
  if (data) {
    postDetail = data;
  };

  console.log('postDetail', postDetail);

  return(
    <>
      <Wrapper>
        <Modal>
          <ButtonSection>
            <CancelBtn type="button" onClick={cancel}>
              닫기
            </CancelBtn>
          </ButtonSection>
          <TitleSection>
            <Title>{postDetail.title}</Title>
          </TitleSection>
          <ImageSection>
            <Image src={postDetail.images[0].path}/>
          </ImageSection>
          <ContentSection>
            {postDetail.contents}
          </ContentSection>
        </Modal>
      </Wrapper>
    </>
  );
}

export default CardModal;