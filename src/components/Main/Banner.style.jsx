import styled from 'styled-components';
import palette from '../../lib/palette';

export const BannerContainer = styled.div`
  margin-bottom: 2rem;
  background-color: ${palette.gray[7]};
  border-radius: 10px;
  .item {
    padding: 1rem;
    text-decoration: none;
    color: #fff;
  }
  .img {
    max-height: 150px;
    margin: 0.5rem;
  }
  .img-event {
    /* background-size: contain; */
  }
`;

export const Title = styled.h2`
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 1rem 0.5rem;
  padding-bottom: 0;
`;

export const Button = styled.button``;
