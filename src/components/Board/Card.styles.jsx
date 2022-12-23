import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1rem 1.2rem;
  background-color: #fff;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.color.grey_400};
`;

const Desc = styled. div`
  width: 100%;
  padding-right: 1rem;
`;

const Title = styled.p`
  margin-bottom: 0.2rem;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.2rem;
  color: ${(props) => props.theme.color.black_100};
`;

const NickName = styled.p`
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.2rem;
  color: grey;
`;


export { Wrapper, Desc, Title, NickName};