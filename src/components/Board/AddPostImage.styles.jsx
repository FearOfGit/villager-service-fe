import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Preview = styled.img`
  width: 100%;
  height: 15rem;
`;

const Label = styled.label`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  cursor: pointer;
`;

export { Wrapper, Preview, Label, };