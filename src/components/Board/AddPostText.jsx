import React from "react";
import { Wrapper, TitleInput, ContentInput } from "./AddPostText.styles";

function TextArea ({setTitle, setContent, title, content}) {
  return(
    <>
    <Wrapper>
      <TitleInput
        value={title}
        placeholder="제목을 입력해주세요!"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <ContentInput
        value={content}
        placeholder="본문 내용을 입력해주세요!"
        onChange={(e) => {
        setContent(e.target.value);
        }}
      />
    </Wrapper>
    </>
  );
}

export default TextArea;