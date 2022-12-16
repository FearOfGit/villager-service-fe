import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid lightgrey; 
`;

const IntroduceSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroduceForm = styled.textarea`
  margin-top: 0.5rem;
  width: 100%;
  height: 7rem;
  padding: 1rem;
  resize: none;
  border-radius: 12px;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 0.5rem;
  line-height: 2rem;
  margin-bottom: 0.5rem;
  border-radius: 12px;
`;

export { Wrapper, IntroduceForm, IntroduceSection, Button, };