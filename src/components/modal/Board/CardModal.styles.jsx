import styled from "styled-components";

const Spacer = styled.div`
  height: 12rem;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  max-width: 1920px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translateX(-50%);
  overflow-y: auto;
`;

const Modal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 85%;
  height: 75%;
  padding: 1rem;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  overflow-y: auto;
`;
  
const TitleSection = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
`;

const ContentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.75rem 0.2rem;
`;

const AddReplySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0.2rem;
`;

const ButtonSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ReplySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0.2rem;
`;

const ImageSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.color.grey_400};
  border-bottom: 1px solid ${(props) => props.theme.color.grey_400};
`;

const Title = styled.div`
  width: 100%;
  text-align: left;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) => props.theme.color.grey_900};
`;
  
const NickName = styled.div`
  font-size: 0.85rem;
  font-weight: 400;
  color: ${(props) => props.theme.color.grey_800};
`;

const Reply = styled.div`
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: ${(props) => props.theme.color.grey_800};
`;

const Date = styled.div`
  font-size: 0.85rem;
  font-weight: 400;
  color: ${(props) => props.theme.color.grey_700};
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 1rem;
`;

const Content = styled.div`
  width: 100%;
  font-size: 0.9rem;
  line-height: 1rem;
  font-weight: 400;
  text-align: left;
  color: ${(props) => props.theme.color.grey_900};
`;

const CancelBtn = styled.button`
  border: transparent;
  background: #fff;
  `;

const LikeBtn = styled.button`
  border: transparent;
  background: #fff;
`;

const AddReplyBtn = styled.button`
  border: transparent;
  border-radius: 1rem;
  background: ${(props) => props.theme.color.orange};
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #fff;
`;

const ReplyInput = styled.input`
  width: 100%;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid ${(props) => props.theme.color.orange};
  border-radius: 1rem;
  font-size: 0.85rem;
  line-height: 1rem;
  background-color: #fff; 
`;

export {
  Spacer,
  Wrapper, 
  Modal, 
  TitleSection, 
  ContentSection, 
  ButtonSection,
  ReplySection,
  ImageSection, 
  AddReplySection,
  Title, 
  NickName,
  Reply,
  Date,
  Content, 
  Image,
  CancelBtn,
  ReplyInput, 
  LikeBtn, 
  AddReplyBtn,
};