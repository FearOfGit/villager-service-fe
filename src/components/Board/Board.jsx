import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Wrapper, Title, } from './Board.styles';
import { postsListAPI} from '../../api/Board';
import Card from './Card';

function Board () {

  const [ boardCategoryId, setBoardCategoryId ] = useState(1);
  const [ boardPage, setBoardPage ] = useState(0);
  const [ boardSize, setBoardSize ] = useState(5);
  
  function getBoard () {
    const params = {params: {categoryId: boardCategoryId, page: boardPage, size: boardSize}};
    return postsListAPI(params).then((res)=>res.data);
  }
  const { data } = useQuery('getBoard', getBoard);
  console.log(data);

  let  boardList = [];

  if (data) {
    boardList = data.content;
    console.log(boardList);
  };


  return(
    <>
      <Wrapper>
        <Title>
          게시판
        </Title>
        {boardList.map((post)=>(
          <Card
            key={post.postId}
            postId={post.postId}
            title={post.title}
            nickName={post.nickName}
            nearCreateAt={post.nearCreateAt}
            categoryId={post.categoryId}
          />
        ))}
      </Wrapper>
    </>
  );
}

export default Board;