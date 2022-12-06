import styled from 'styled-components';

export const RegisterTemplate = styled.div`
  .title {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: 700;
  }
  Button {
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    background: #4ab7b6;
  }
`;

export const InputTitleSection = styled.section`
  .input {
    width: 100%;
    padding: 1rem;
    font-size: 1.1rem;
  }
`;

export const InputLocationSection = styled.section`
  .map {
    background: gray;
    width: 100%;
    height: 200px;
  }
`;

export const InputEndDateSection = styled.section`
  .date-picker {
    display: flex;
    justify-content: center;
  }
`;

export const InputConstraintsSection = styled.section`
  .constraints {
    display: flex;
    justify-content: center;
  }
`;

export const InputContentSection = styled.section`
  .input {
    width: 100%;
  }
`;

export const InputTagSection = styled.section`
  .input {
    width: 100%;
    padding: 0.5rem;
  }
`;
