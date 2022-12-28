import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { IoChevronForward } from 'react-icons/io5';
import { toast, ToastContainer } from 'react-toastify';
import { Wrapper, ContentSection, Button, Title } from './AddPost.styles';
import { postAPI, showCategoryAPI } from '../../api/Board';
import AddPostText from './AddPostText';
import AddPostImage from './AddPostImage';

function AddPost () {
  const navigate = useNavigate();

  const [categoryId, setcategoryId] = useState("");
  const [title, setTitle ] = useState("");
  const [content, setContent ] = useState("");
  const [image, setImage ] = useState({
    imageFile: "",
    previewURL: "https://i.pinimg.com/736x/93/a6/8b/93a68b57a54e4bdc73d43d1d049b94b3.jpg",
  });

  function getCategory () {
    return showCategoryAPI().then((res)=>res.data);
  }

  const { data } = useQuery('getCategory', getCategory);

  console.log(data);

  const handleSubmit = async () => {
    const post = {
      "categoryId": 1,
      "title": title,
      "contents": content
    };
    const formData = new FormData();
    formData.append("post", new Blob([JSON.stringify(post)], {type:"application/json",}));
    formData.append("files", image.imageFile);
    try {
      postAPI(formData)
      .then((response) => {
        /*eslint-disable*/
        for (let key of formData.keys()) {
          console.log(key);
        }

        for (let value of formData.values()) {
          console.log(value);
        }
        console.log(response.data);
        console.log('되냐');

        toast.success(<h1>게시글 등록이 완료되었습니다. 😊</h1>);
        setTimeout(() => {
          navigate('/board');
        }, 1500);
      });
    } catch(e) {
      toast.error(e.response.data.errorMessage);
    }
  };

  return(
    <>
      <ToastContainer/>
      <Wrapper>
        <ContentSection>
          <Title>
            게시글 작성
          </Title>
          <Button
            type="submit"
            onClick={() => handleSubmit()}
            >
            <IoChevronForward size="10px"/>
          </Button>
        </ContentSection>
        <AddPostText 
          setTitle={setTitle} 
          setContent={setContent} 
          title={title} 
          content={content}
        />
        <AddPostImage
          setImage={setImage} previewURL={image.previewURL}
        />
      </Wrapper>
    </>
  );
}

export default AddPost;