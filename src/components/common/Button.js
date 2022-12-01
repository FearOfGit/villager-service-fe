import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/palette';

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.25rem 1rem;
  color: ${palette.gray[7]};
  outline: none;
  cursor: pointer;
  background: #fff;
  &:hover {
    color: ${palette.gray[9]};
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyleLink = styled(Link)`
  ${buttonStyle}
`;

function Button(props) {
  const { to } = props;
  return to ? <StyleLink {...props} /> : <StyledButton {...props} />;
}

export default Button;
