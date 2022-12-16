import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Wrapper, ImageSection, InfoList, EditButton, } from './ProfileDetail.styles';
import { myPageAPI } from '../../../api/Users';
import PasswordChangeModal from '../../modal/User/PasswordChangeModal';

function ProfileDetail() {

  const [isChange, setIsChange] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsChange(true);
  };

  function getUserInfo () {
    return myPageAPI().then((res) => res.data);
  }

  const { data } = useQuery('getInfo', getUserInfo);

  const [ image, setImage ] = useState("https://i.pinimg.com/736x/93/a6/8b/93a68b57a54e4bdc73d43d1d049b94b3.jpg");
  const handleImage = (e) => {
    const fileReader = new FileReader();

    if(e.target.files[0]){
      fileReader.readAsDataURL(e.target.files[0])
    }

    fileReader.onload = () => {
      setImage(fileReader.result)
    }
    
  };

  return(
    <>
      <Wrapper>
        {data && (
          <div>
            <ImageSection>
              <label htmlFor="ex_file">
                <img src={image} alt="프사" />
                <div>프로필 이미지 수정</div>
              </label>
              <input 
                type="file" 
                id="ex_file"
                accept="image/jpg, image/png, image/jpeg"
                onChange={handleImage}
              />
            </ImageSection>
            <InfoList>
              <li>
                <span>이메일</span>
                <span>{data.email}</span>
              </li>
              <li>
                <span>닉네임</span>
                <span>{data.nickName}</span>
              </li>
              <li>
                <span>비밀번호</span>
                <EditButton type="button" onClick={handleClick}>비밀번호 수정</EditButton>
              </li>
              <li>
                <span>성별</span>
                <span>남자</span>
              </li>
              <li>
                <span>생년월일</span>
                <span>2000년 02월 02일</span>
              </li>
            </InfoList>
          </div>
        )}
      </Wrapper>

      {isChange && <PasswordChangeModal modal={setIsChange} />}
    </>
  ); 
}

export default ProfileDetail;