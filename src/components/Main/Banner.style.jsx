import styled from 'styled-components';
import palette from '../../lib/palette';

export const BannerContainer = styled.div`
  margin-bottom: 2rem;
  background-color: ${palette.gray[8]};
  border-radius: 10px;
  padding: 1rem;
  .item {
    text-decoration: none;
    color: #fff;
  }
  .img {
    max-width: 100px;
    height: 170px;
  }
  .desc {
    width: 100px;
    padding: 0.5rem;
    margin-left: 1rem;
    margin-top: 1rem;
    font-size: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  span + span {
    display: block;
    margin-top: 0.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  font-size: 0.7rem;
  border-radius: 5px;
  border: none;
  background: #4ab7b6;
  color: #fff;
  font-weight: 700;
`;
