import styled from "styled-components";

const Wrapper = styled.div`
width: 100%;
padding: 1rem 1rem 1rem 1rem;
`;

const TitleInput = styled.input`
width: 100%;
height: 3rem;
padding: 0 1rem;
outline: 0;
border: 1px solid grey;
border-radius: 12px;
margin-bottom: 0.5rem;
`;

const ContentInput = styled.textarea`
width: 100%;
height: 9rem;
padding: 1rem;
outline: 0;
border: 1px solid grey;
border-radius: 12px;
vertical-align: top;
resize: none;
`;

export { Wrapper, TitleInput, ContentInput };