import styled from 'styled-components';
import palette from '../../lib/palette';

export const GatheringDetailTemplate = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  .end::before {
    content: ' ~ ';
  }
  .info {
    margin-top: 0.5rem;
    border-radius: 10px;
    padding: 1rem;
    background: ${palette.gray[3]};
  }
  .inner {
    width: 100%;
    max-width: 600px;
  }
`;
