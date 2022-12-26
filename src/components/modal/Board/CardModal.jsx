import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { IoArrowBackOutline, IoHeartOutline, IoHeart, IoEllipsisVertical } from "react-icons/io5";
import { postDetailAPI, postLikeAPI, postDislikeAPI } from "../../../api/Board";
import { 
  Wrapper,
  Modal,
  TitleSection,
  ContentSection,
  ButtonSection,
  ImageSection,
  Title,
  NickName,
  Date,
  Image,
  Content,
  CancelBtn,
  LikeBtn,
} from "./CardModal.styles";

function CardModal ({modal, postId}) {
  const cancel = () => {
    modal(false);
  };
  const [postDetail, setPostDetail] = useState([]);
  const [imagePath, setImagePath] = useState('');
  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    if (isLike === false) {
      postLikeAPI(postId).then((res)=>{console.log(res.data); console.log('좋아요 해제')});
      setIsLike(!isLike);
    } else {
      postDislikeAPI(postId).then((res)=>{console.log(res.data); console.log('좋아요 해제')});
      setIsLike(!isLike);
    }
  };

  useEffect(()=> {
    postDetailAPI(postId).then((res)=> {
      setPostDetail(res.data);
      setImagePath(res.data.images[0].path);
      console.log("상세정보", res.data);
    });
  }, []);
  
  return(
    <>
      <Wrapper>
        <Modal>
          <ButtonSection>
            <CancelBtn type="button" onClick={cancel}>
              <IoArrowBackOutline size="1.4rem"/>
            </CancelBtn>
            <LikeBtn type="button" onClick={handleLike}>
              {isLike ? (
                <IoHeart size="1.4rem"/>
              ) : (
                <IoHeartOutline size="1.4rem"/>
              )}
            </LikeBtn>
          </ButtonSection>
          <TitleSection>
            <Title>{postDetail.title}</Title>
          </TitleSection>
          <ContentSection>
            <NickName>
              {postDetail.nickName}
            </NickName>
            <Date>
              {postDetail.nearCreateAt}
            </Date>
          </ContentSection>
          <ImageSection>
            <Image src={imagePath}/>
          </ImageSection>
          <ContentSection>
            <Content>
              {postDetail.contents}
            </Content>
          </ContentSection>
        </Modal>
      </Wrapper>
    </>
  );
}

export default CardModal;