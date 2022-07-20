import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SignupSection = styled.section`
  width: 100vw;
  height: 100vw;
  background-color: white;
`;
const SignupContainer = styled.article`
  width: 30rem;
  height: 48rem;
  margin: 6rem auto;
  box-shadow: 1px 1px 22px 2px rgba(0, 0, 0, 0.25);
  border-radius: 38px;
`;
const SignupHeader = styled.h2`
  color: #5f6caf;
  font-size: 2rem;
  position: relative;
  top: 3rem;
  left: 8rem;
`;
const SignupInput = styled.input`
  width: 18rem;
  height: 2.5rem;
  padding: 0.8rem;
  box-sizing: border-box;
  position: relative;
  top: 6rem;
  left: 6rem;
  margin-bottom: 1.8rem;
  color: #5f6caf;
  background-color: #edf7fa;
  border-radius: 10px;
  border: none;
`;
const SignupButton = styled.button`
  display: block;
  width: 18rem;
  height: 3.2rem;
  font-size: 1rem;
  text-align: center;
  line-height: 3.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  top: 8rem;
  left: 6rem;
  background-color: #5f6caf;
  color: #fff;
  border: none;
  border-radius: 22px;
`;
const InvalidInput = styled.p`
  font-size: 0.7rem;
  color: #ff8364;
  position: relative;
  top: 4.8rem;
  left: 6.8rem;
`;

function EditProfile() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickname, setNickname] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState('');
  //입력된 정보가 올바른 형식인지 검사
  const passwordValidation = password.length < 8;
  const passwordConfirmValidation = password !== passwordConfirm;
  const phonenumberValidation = phonenumber.length < 10 && phonenumber.length > 12;

  const handleSubmit = async e => {
    e.preventDefault();
    if (name === '') {
      alert('이름을 확인해 주세요.');
    } else if (passwordValidation || passwordConfirmValidation) {
      alert('비밀번호를 확인해 주세요.');
    } else if (phonenumberValidation) {
      alert('휴대폰 번호를 다시 입력해주세요');
    }

    //모든 유효성 검사를 통과한다면 백에 회원가입 요청
    if (!passwordConfirmValidation && !passwordValidation) {
      try {
        const data = { nickname: name, password };
        await axios({
          method: 'post',
          url: 'http://localhost:8000/api/users/register',
          data: data,
        });
        window.location.href = '/login';
      } catch (err) {
        console.error(err.stack);
        alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
      }
    }
  };

  return (
    <SignupSection>
      <SignupContainer>
        <SignupHeader>회원 정보 수정</SignupHeader>
        <form>
          <SignupInput
            name="name"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            placeholder="이름을 입력해 주세요."
          />
          <SignupInput
            name="password"
            value={password}
            type="password"
            onChange={e => {
              setPassword(e.target.value);
            }}
            placeholder="비밀번호를 입력해 주세요."
          />
          {passwordValidation && <InvalidInput> * 8자 이상 입력해 주세요.</InvalidInput>}
          <SignupInput
            name="passwordConfirm"
            value={passwordConfirm}
            type="password"
            onChange={e => {
              setPasswordConfirm(e.target.value);
            }}
            placeholder="비밀번호를 다시 입력해 주세요."
          />
          {passwordConfirmValidation && (
            <InvalidInput> * 비밀번호가 일치하지 않습니다.</InvalidInput>
          )}
          <SignupInput name="nickname" placeholder="닉네임을 입력해 주세요." />
          <SignupInput name="phonenumber" placeholder="휴대폰 번호를 입력해 주세요." />
          <SignupInput type="file" name="image" />
          <InvalidInput> * 프로필 이미지를 넣어주세요.</InvalidInput>
          <SignupButton onClick={handleSubmit}>변경</SignupButton>
        </form>
      </SignupContainer>
    </SignupSection>
  );
}

export default EditProfile;
