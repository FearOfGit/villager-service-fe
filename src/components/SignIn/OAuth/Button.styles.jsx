import styled from "styled-components";

const Link = styled.a`
  text-decoration-line: none;
`;

const ButtonKakao = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 3rem;
  margin-top: 0.75rem;
  font-size: 1rem;
  color: #191919;
  background-color: ${(props) => props.theme.color.yellow_kakao};
  border: 1px solid ${(props) => props.theme.color.yellow_kakao};
  border-radius: 12px;
  align-items: center;
`;

const ButtonNaver = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 3rem;
  margin-top: 0.75rem;
  font-size: 1rem;
  color: white;
  background-color: #03C75A;
  border: 1px solid #03C75A;
  border-radius: 12px;
  align-items: center;
`;

const ButtonGoogle = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 3rem;
  margin-top: 0.75rem;
  font-size: 1rem;
  color: #FFFFFF;
  background-color: #4285F4;
  border: 1px solid #4285F4;
  border-radius: 12px;
  align-items: center;
`;

const GoogleLogoBox = styled.div`
  background-color: #FFFFFF;
`;

const TextBox = styled.div`
  padding: 1rem;
`;

export { Link, ButtonKakao, ButtonNaver, ButtonGoogle, GoogleLogoBox, TextBox, };

