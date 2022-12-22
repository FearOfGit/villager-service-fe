import React from "react";
import { Wrapper, Preview, Label } from "./AddPostImage.styles";

function ImageUploader ({ previewURL, setImage }) {

  const saveImage = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      setImage({
        imageFile: e.target.files[0],
        previewURL: fileReader.result,
      });
    };
  };

  return(
    <>
      <Wrapper>
        <input
          type="file"
          accept="image/*"
          onChange={saveImage}
          id="imageInput"
          style={{ display: "none" }}
        />
        <Label
          className = "imageInputButton"
          htmlFor="imageInput"
        >
        <Preview
          src={previewURL}
        />
          사진 고르기
        </Label>
      </Wrapper>
    </>
  );
}

export default ImageUploader;