import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubmitWrapper = styled.div`
  width: 100%;
`;
const ContentSection = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4rem;
`;
const ButtonSection = styled.div`
  margin-top: 0.25rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  width: 100%;
  margin: 0 0.25rem;
  border-radius: 12px;
`;

export {Wrapper, SubmitWrapper, ContentSection, ButtonSection, Button, };