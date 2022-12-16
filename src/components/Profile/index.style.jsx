import styled from 'styled-components';
import palette from '../../lib/palette';

export const ProfileTemplate = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  .inner {
    width: 100%;
    max-width: 600px;
  }
  .manner-score-bar {
    border: 1px solid #ccc;
    border-radius: 20px;
  }
  .manner-score-value {
    border-radius: 20px;
    height: 30px;
    width: 50%;
    background-color: #4ab7b6;
    color: #fff;
    padding-right: 0.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
