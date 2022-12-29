import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useQuery } from 'react-query';
import { IoPencil } from "react-icons/io5";
import { Wrapper, TitleSection, Title, PostButton, } from './Board.styles';
import { postsListAPI} from '../../api/Board';
import Card from './Card';

function Board () {
  const navigate = useNavigate();
  const [ ref, inView ] = useInView();
  const [ isScrollEnd, setIsScrollEnd ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ boardList, setBoardList ] = useState([]);
  const [ boardCategoryId, setBoardCategoryId ] = useState(1);
  const [ boardPage, setBoardPage ] = useState(0);
  const [ boardSize, setBoardSize ] = useState(10);

  console.log(inView);

  const getBoard = useCallback(async () => {
    const params = {params: {categoryId: boardCategoryId, page: boardPage, size: boardSize}};
    setLoading(true);
    await postsListAPI(params).then((res)=>{
      setBoardList((prevState) => [...prevState, ...res.data.content]);
      // setBoardList(res.data.content);
      console.log(boardList);
      if (res.data.content.length < boardSize) {
        setIsScrollEnd(true);
      }
      setLoading(false);
    });
  }, [boardPage]);

  useEffect(()=> {
    getBoard()
  }, [getBoard])

  useEffect(()=> {
    if(inView && !loading && !isScrollEnd) {
      setBoardPage(boardPage + 1)
      console.log("무한 스크롤 페이지 번호: ", boardPage)
    }
  }, [inView, loading])

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
        {boardList.map((post, index)=>(
          (boardSize-1 === index) ?
          <div ref={ref}>
            <Card
              oooo="됨"
              index={index}
              key={post.postId}
              postId={post.postId}
              title={post.title}
              nickName={post.nickName}
              nearCreateAt={post.nearCreateAt}
              categoryId={post.categoryId}
              viewCount={post.viewCount}
              />
          </div> : 
          <div>
            <Card
                key={post.postId}
                oooo="안됨"
                index={index}
                postId={post.postId}
                title={post.title}
                nickName={post.nickName}
                nearCreateAt={post.nearCreateAt}
                categoryId={post.categoryId}
                viewCount={post.viewCount}
              />
          </div>
        ))}
      </Wrapper>
    </>
  );
}

export default Board;