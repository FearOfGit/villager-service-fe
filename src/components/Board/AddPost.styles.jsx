import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1.5rem 0;
  padding: 0 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 100%;
  font-size: 1.4rem;
  line-height: 1.4rem;
  font-weight: 600;
`;

const Button = styled.button`
  border-radius: 1.2rem;
  background-color: #fff;
`;

const ContentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export { Wrapper, Button, ContentSection, Title, };