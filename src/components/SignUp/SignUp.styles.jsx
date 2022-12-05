import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 1rem 2rem 1rem;
`;

const SignUpForm = styled.form`
  width: 100%;
  align-items: center;
`;

const ErrorMsg = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.2rem 1rem;
  font-size: 0.8rem;
  font-weight: 400;
  color: ${(props) => props.theme.color.green};
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  outline: 0;
  border: 1px solid grey;
  border-radius: 12px;
`;

const IntroductionInput = styled.textarea`
  width: 100%;
  height: 9rem;
  padding: 1rem;
  outline: 0;
  border: 1px solid grey;
  border-radius: 12px;
  vertical-align: top;
  resize: none;
`;

const Button = styled.button`
  width: 100%;
  height: 3rem;
  margin-top: 0.75rem;
  font-size: 1rem;
  color: white;
  background-color: ${(props) => props.theme.color.orange};
  border: 1px solid ${(props) => props.theme.color.orange};
  border-radius: 12px;
`;

export { Wrapper, SignUpForm, ErrorMsg, Input, Button, IntroductionInput, };