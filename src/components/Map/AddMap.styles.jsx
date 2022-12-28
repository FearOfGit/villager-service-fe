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
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const AddButton = styled.button`
  width: 50%;
  margin: 0 0.25rem;
  background-color: ${(props) => props.theme.color.green};
  border: 1px solid ${(props) => props.theme.color.green};
  border-radius: 12px;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.6rem;
`;

const DeleteButton = styled.button`
  width: 50%;
  margin: 0 0.25rem;
  background-color: ${(props) => props.theme.color.orange};
  border: 1px solid ${(props) => props.theme.color.orange};
  border-radius: 12px;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.6rem;
`;

const ListButton = styled.button`
  width: 50%;
  margin: 0 0.25rem;
  background-color: ${(props) => props.theme.color.grey_800};
  border: 1px solid ${(props) => props.theme.color.grey_800};
  border-radius: 12px;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.6rem;
`;

export {Wrapper, SubmitWrapper, ContentSection, ButtonSection, AddButton, DeleteButton, ListButton, };