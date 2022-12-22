import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Wrapper, } from './Board.styles';
import { postsListAPI} from '../../api/Board';

function Board () {

  const [ categoryId1, setCategoryId ] = useState(1);
  const [ page1, setPage ] = useState(0);
  const [ size1, setSize ] = useState(5);
  
  function getBoard () {
    /* eslint-disable-next-line */
    const params = {params: {categoryId: categoryId1, page: page1, size: size1}};
    return postsListAPI(params).then((res)=>res.data);
  }
  const { data } = useQuery('getBoard', getBoard);
  console.log(data);

  return(
    <>
      <Wrapper>
        안녕
      </Wrapper>
    </>
  );
}

export default Board;