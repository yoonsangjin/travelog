import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
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
const NavUl = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 3rem;
`;
const NavLi = styled.li`
  margin: 0 2rem;
  color: #5f6caf;
`;
const MenuUl = styled(NavUl)`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 15vw;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  left: -0.5rem;
  top: 11rem;
  background-color: #edf7fa;
`;
const MenuLi = styled(NavLi)`
  color: #5f6caf;
  margin: 0;
  height: 3rem;
  width: 15vw;
  line-height: 3rem;
  color: black;
  cursor: pointer;
  font-size: 22px;
  &:hover {
    background-color: #5f6caf;
    color: #ffffff;
  }
`;
//회원 정보 변경창에 들어가기전 패스워드 확인
function ChangePassword() {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  //입력된 정보가 올바른 형식인지 검사
  const passwordValidation = password.length < 8;
  const passwordConfirmValidation = password !== passwordConfirm;
  const token = window.localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    //data: { currentPassword: '12341234' },
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (passwordValidation || passwordConfirmValidation) {
      alert('비밀번호를 확인해 주세요.');
    }

    //회원가입 요청
    if (!passwordConfirmValidation && !passwordValidation) {
      try {
        const data = { password };
        await axios({
          method: 'get',
          url: 'http://localhost:8000/api/users',
          data: data,
        });
        window.location.href = '/login';
      } catch (err) {
        console.error(err.stack);
        alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
      }
    }
  };
  const deleteUser = async () => {
    if (window.confirm('회원 탈퇴하시겠습니까?')) {
      try {
        await axios.delete(`http://localhost:8000/api/users/9`, config);
        console.log('삭제되었습니다');
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  };
  return (
    <>
      <MenuUl>
        <MenuLi>
          <NavLink to="/editprofile">회원정보 수정</NavLink>
        </MenuLi>
        <MenuLi>
          <NavLink to="#">비밀번호 변경</NavLink>
        </MenuLi>

        <MenuLi onClick={deleteUser}>회원탈퇴</MenuLi>
      </MenuUl>
      <SignupSection>
        <SignupContainer>
          <SignupHeader>비밀 번호 변경</SignupHeader>
          <form>
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
            <SignupButton onClick={handleSubmit}>변경</SignupButton>
          </form>
        </SignupContainer>
      </SignupSection>
    </>
  );
}

export default ChangePassword;