import styled from 'styled-components';

export const GatheringDetailTemplate = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  /* background-color: blue; */

  .name {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .flex {
    display: flex;
    justify-content: center;
  }

  .leader {
    flex: 1;
    background-color: red;
    h3 {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem 0;
    }
  }

  .description {
    flex: 2;
    background-color: blue;
    margin-left: 0.5rem;
    h3 {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem 0;
    }
  }

  .comment {
    margin-top: 2rem;
    background-color: blue;
    padding: 1rem;
  }
`;
