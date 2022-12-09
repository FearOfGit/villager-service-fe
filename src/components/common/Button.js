import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/palette';

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  background: none;
  color: ${palette.gray[7]};
  outline: none;
  cursor: pointer;
  &:hover {
    color: ${palette.gray[9]};
  }
  ${(props) =>
    props.small &&
    css`
      font-size: 5px;
      background: ${palette.gray[3]};
      border-radius: 4px;
    `}
  ${(props) =>
    props.register &&
    css`
      background-color: #4ab7b6;
      color: #fff;
      padding: 0.5rem;
      border-radius: 15px;
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  ${buttonStyle};
`;

function Button(props) {
  const { to } = props;
  return to ? <StyleLink {...props} /> : <StyledButton {...props} />;
}

export default Button;
