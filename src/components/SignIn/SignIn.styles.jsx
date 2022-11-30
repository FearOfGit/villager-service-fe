import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 1.5rem 2rem 1.5rem;
`;

const Desc = styled.div`
  width: 100%;
  margin: 1.5rem 1rem;
  margin-top: 3rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: black;
  line-height: 2.5rem;
`;

const SignInForm = styled.form`
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

const Button = styled.button`
  width: 100%;
  height: 3rem;
  margin-top: 1rem;
  font-size: 1rem;
  color: white;
  background-color: ${(props) => props.theme.color.orange};
  border: 1px solid ${(props) => props.theme.color.orange};
  border-radius: 12px;
`;

const ButtonKakao = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 3rem;
  margin-top: 1rem;
  font-size: 1rem;
  color: #191919;
  background-color: ${(props) => props.theme.color.yellow_kakao};
  border: 1px solid ${(props) => props.theme.color.yellow_kakao};
  border-radius: 12px;
  align-items: center;
`;

const TextBox = styled.div`
  padding: 1rem;
`;

export { Wrapper, Desc, SignInForm, ErrorMsg, Input, Button, ButtonKakao, TextBox, };