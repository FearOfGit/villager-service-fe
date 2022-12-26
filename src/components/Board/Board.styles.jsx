import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.25rem;
  padding-right: 0.5rem;
`;

const Title = styled.div`
  margin: 1.5rem 0;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
`;

const PostButton = styled.button`
  border: transparent;
  background: transparent;
`;

export { Wrapper, TitleSection, Title, PostButton, };