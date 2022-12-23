import React, { useState } from 'react';
import { Wrapper, Desc, Title, NickName} from './Card.styles';

function Card ({ postId, nickName, title, nearCreateAt, categoryId }) {

  const [isClicked, setIsClicked ] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
  };

  return (
    <>
    <Wrapper type="button" onClick={handleClick}>
      <Desc>
        <Title>
          {title}
        </Title>
        <NickName>
          {nickName}
        </NickName>
      </Desc>
      <Desc>
        <NickName>
          {nearCreateAt}
        </NickName>
      </Desc>
    </Wrapper>
    {/* { isClicked && <CardModal modal={setIsClicked} postId={postId}/>} */}
    </>
  );
}

export default Card;