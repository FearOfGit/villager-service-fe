import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 1rem 2rem 1rem;
`;

const Desc = styled.div`
  width: 100%;
  margin: 1.5rem 0rem;  
  font-size: 1.4rem;
  font-weight: 600;
  color: black;
  text-align: center;
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
  margin-top: 0.75rem;
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
  margin-top: 0.75rem;
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

const FindSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
`;

const SignupSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;

const AdditionalMsg = styled.div`
  width: 100%;
  font-size: 0.8rem;
  font-weight: 400;
  color: grey;
  text-align: center;
`;

const SignupNavigation = styled. div`
  width: 100%;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${(props) => props.theme.color.green};
  text-align: center;
`;

export { Wrapper, Desc, SignInForm, ErrorMsg, Input, Button, ButtonKakao, TextBox, FindSection, SignupSection, AdditionalMsg, SignupNavigation, };