import styled from 'styled-components';
import Responsive from '../../common/Responsive';

export const ContentWrapper = styled(Responsive)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;
  max-width: 400px;

  h3 {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .flex {
    display: flex;
    justify-content: space-around;
  }

  .add {
    border: 1px solid black;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 44px;
  }
`;
