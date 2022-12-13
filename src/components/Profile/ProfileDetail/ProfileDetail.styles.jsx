import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 1rem 2rem 1rem;
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid lightgrey;

  
  label {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
  }

  img {
    width: 55%;
    height: 55%;
    border-radius: 12px;
    margin: 0.5rem;
    cursor: pointer;
  }

  div {
    color: ${(props) => props.theme.color.orange};
  }
  
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  border-bottom: 1px solid lightgrey;

  li {
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

`;

const EditButton = styled.button`
  border-radius: 12px;
`;

export {Wrapper, ImageSection, InfoList, EditButton, };