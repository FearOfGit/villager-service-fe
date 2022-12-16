import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  max-width: 600px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transform: translateX(-50%);
`;


const Modal = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  max-width: 600px;
  width: 80%;
  padding: 1rem;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
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
`;

export { Wrapper, Modal, Title, ModalInput, ButtonSection, SubmitBtn, CancelBtn, };