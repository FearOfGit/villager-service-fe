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

const ContentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  padding-right: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem;
`;

const Title = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.2rem;
  color: ${(props) => props.theme.color.black_100};
`;

const NickName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.2rem;
  color: ${(props) => props.theme.color.grey_900};
`;

const Date = styled.p`
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.2rem;
  color: ${(props) => props.theme.color.grey_700};
`;

const ViewCount = styled.p`
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.2rem;
  color: ${(props) => props.theme.color.grey_700};
`;


export { Wrapper, ContentSection, ButtonSection, Content, Title, NickName, Date, ViewCount};