import React, { useState } from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { Wrapper, ContentSection, ButtonSection, Content, Title, NickName, Date, ViewCount} from './Card.styles';
import CardModal from '../modal/Board/CardModal';

function Card ({ oooo, index, postId, nickName, title, nearCreateAt, categoryId, viewCount }) {

  console.log(oooo, index);

  const [isClicked, setIsClicked ] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
  };

  return (
    <>
    <Wrapper type="button" onClick={handleClick}>
      <ContentSection>
        <Content>
          <Title>
            {title}
          </Title>
          <NickName>
            작성자: {nickName}
          </NickName>
        </Content>
        <Content>
          <Date>
            작성일: {nearCreateAt}
          </Date>
          <ViewCount>
            조회수: {viewCount}
          </ViewCount>
        </Content>
      </ContentSection>
      <ButtonSection>
        <IoChevronForward size="1.4rem"/>
      </ButtonSection>
    </Wrapper>
    { isClicked && <CardModal modal={setIsClicked} postId={postId}/>}
    </>
  );
}

export default Card;