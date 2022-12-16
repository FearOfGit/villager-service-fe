import styled from 'styled-components';

export const GatheringRegisterTemplate = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  .flex {
    display: flex;
    padding: 0 2rem;
  }
  .container {
    overflow: hidden;
  }
  .inner {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 600px;
  }
  .btn-group {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ErrorText = styled.span`
  display: block;
  padding-left: ${(props) => (props.tag ? '2.3rem' : '1rem')};
  font-size: 0.7rem;
  letter-spacing: 2px;
  margin-bottom: 0.3rem;
  color: #4ab7b6;
`;

export const CommonInput = styled.input`
  padding: 1rem;
  border-radius: 25px;
  border: 1px solid black;
  outline: none;
  font-size: 0.9rem;
`;

export const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 25px;
  border: 1px solid black;
  outline: none;
  font-size: 0.9rem;
  resize: none;
`;

export const SubTitleText = styled.h3`
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
  font-size: 1rem;
  font-weight: 700;
`;

export const CustomButton = styled.button`
  background: #4ab7b6;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 0.9rem;
  &:disabled {
    background: gray;
  }
  & + button {
    margin-left: 2rem;
  }
`;
