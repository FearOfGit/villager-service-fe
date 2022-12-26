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
  ReplySection,
  ImageSection,
  Title,
  NickName,
  Reply,
  Date,
  Image,
  Content,
  CancelBtn,
  LikeBtn,
} from "./CardModal.styles";
import ReplyCard from "../../Board/ReplyCard";

function CardModal ({modal, postId}) {
  const cancel = () => {
    modal(false);
  };
  const [postDetail, setPostDetail] = useState([]);
  const [imagePath, setImagePath] = useState('');
  const [comment, setComment] = useState([]);
  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    if (isLike === false) {
      postLikeAPI(postId).then((res)=>{console.log(res.data); console.log('좋아요')});
      setIsLike(true);
    } else {
      postDislikeAPI(postId).then((res)=>{console.log(res.data); console.log('좋아요 해제')});
      setIsLike(false);
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
          <ReplySection>
            <Reply>
              댓글
            </Reply>
          </ReplySection>
          <ContentSection>
            {comment.map((reply)=>(
              <ReplyCard
                key={reply.commentId}
                replyId={reply.commentId}
                memberId={reply.memberId}
                nickName={reply.nickName}
                comment={reply.comment}
                date={reply.createdAt}
              />
            ))}
          </ContentSection>
        </Modal>
      </Wrapper>
    </>
  );
}

export default CardModal;