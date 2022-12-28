import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  overflow: hidden;
`;


const Modal = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.color.green};
`;

const Title = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
`;

const ModalInput = styled.input`
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  border: 0;
  border-radius: 1rem;
  line-height: 2rem;
  background-color: ${(props) => props.theme.color.light_200};
`;

const ContentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const Content = styled.div`
  width: 100%;
  font-size: 1rem;
  line-height: 1.4rem;
  padding: 1rem;
  font-weight: 400;
  text-align: center;
`;

const ButtonSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const SubmitBtn = styled.button`
  width: 100%;
  margin: 0 0.25rem;
  line-height: 1.4rem;
  border-radius: 2rem;
`;

const CancelBtn = styled.button`
  width: 100%;
  margin: 0 0.25rem;
  border-radius: 2rem;
  border: 1px solid ${(props) => props.theme.color.orange};
  background-color: ${(props) => props.theme.color.orange};
  color: #fff;
`;

export { Wrapper, Modal, Title, ModalInput, ContentSection, Content, ButtonSection, SubmitBtn, CancelBtn, };