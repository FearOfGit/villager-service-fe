import styled from 'styled-components';
import palette from '../../lib/palette';

export const SearchBarBlock = styled.div`
  .search-input {
    width: 100%;
    padding: 1rem 0.75rem;
    border-radius: 10px;
    outline: none;
    border: 1px solid ${palette.gray[3]};
    background-color: ${palette.gray[3]};
  }
`;
