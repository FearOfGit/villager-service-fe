import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { deleteReplyAPI } from "../../api/Board";
import { Wrapper, ContentSection, Content, NickName, Date, Delete, Comment, } from "./ReplyCard.styles";

function ReplyCard({postId, replyId, memberId, nickname, date, comment}) {
  const deleteReply = () => {
    deleteReplyAPI(postId, replyId)
      .then((res)=>{
        toast.success(<h1>댓글이 성공적으로 삭제되었습니다. 😊</h1>);
      })
  };

  return(
    <>
      <Wrapper>
      <ToastContainer/>
        <ContentSection>
          <Content>
            <NickName>
              {nickname}
            </NickName>
          </Content>
          <Content>
            <Date>
              작성일: {date}
            </Date>
            <Delete
              onClick={()=>deleteReply()}
            >
              댓글 삭제
            </Delete>
          </Content>
          <Content>
            <Comment>
              {comment}
            </Comment>
          </Content>
        </ContentSection>
      </Wrapper>
    </>
  );
}

export default ReplyCard;