import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FirstButton = styled.button`
  width: 100%;
  margin: 0 0.25rem;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 3rem;
  border-radius: 1.2rem;
  background-color: ${(props) => (props.value ? props.theme.color.green : props.theme.color.grey_500)};
  color: ${(props) => (props.value ? '#fff' : props.theme.color.grey_800)};
  border: 3px solid ${(props) => (props.value ? props.theme.color.green : props.theme.color.grey_500)};
`;

const SecondButton = styled.button`
  width: 100%;
  margin: 0 0.25rem;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 3rem;
  border-radius: 1.2rem;
  background-color: ${(props) => (props.value ? props.theme.color.grey_500 : props.theme.color.green)};
  color: ${(props) => (props.value ? props.theme.color.grey_800 : '#fff')};
  border: 3px solid ${(props) => (props.value ? props.theme.color.grey_500 : props.theme.color.green)};
`;

export { Wrapper, FirstButton, SecondButton, };