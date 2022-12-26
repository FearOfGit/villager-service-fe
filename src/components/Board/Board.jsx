import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { IoPencil } from "react-icons/io5";
import { Wrapper, TitleSection, Title, PostButton, } from './Board.styles';
import { postsListAPI} from '../../api/Board';
import Card from './Card';

function Board () {

  const navigate = useNavigate();

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
        <TitleSection>
          <Title>
            게시판
          </Title>
          <PostButton type="button" onClick={()=>{navigate('/addPost')}}>
            <IoPencil size="1.25rem"/>
          </PostButton>
        </TitleSection>
        {boardList.map((post)=>(
          <Card
            key={post.postId}
            postId={post.postId}
            title={post.title}
            nickName={post.nickName}
            nearCreateAt={post.nearCreateAt}
            categoryId={post.categoryId}
            viewCount={post.viewCount}
          />
        ))}
      </Wrapper>
    </>
  );
}

export default Board;