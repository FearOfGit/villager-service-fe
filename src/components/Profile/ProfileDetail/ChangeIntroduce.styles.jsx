import styled from "styled-components";

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
  border-radius: 12px;
  padding: 1rem;
  resize: none;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 0.5rem;
  line-height: 2rem;
  margin-bottom: 10rem;
`;

export { IntroduceForm, IntroduceSection, Button, };