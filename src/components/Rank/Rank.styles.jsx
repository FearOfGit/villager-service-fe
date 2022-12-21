import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const RankList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.color.green};
  li {
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export { Wrapper, RankList };