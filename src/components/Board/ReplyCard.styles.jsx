import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1rem 1.2rem;
  background-color: #fff;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.color.grey_400};
  border-bottom: 1px solid ${(props) => props.theme.color.grey_400};
`;

export { Wrapper, };