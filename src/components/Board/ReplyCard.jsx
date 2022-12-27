import React from "react";
import { Wrapper, ContentSection, Content, NickName, Date, Comment, } from "./ReplyCard.styles";

function ReplyCard({commentId, memberId, nickName, createdAt, comment}) {
    

  return(
    <>
      <Wrapper>
        <ContentSection>
          <Content>
            <NickName>
              작성자: {nickName}
            </NickName>
            <Date>
              작성일: {createdAt}
            </Date>
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