import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LoginSection = styled.section`
  width: 100vw;
  height: 100vw;
  background-color: white;
`;
const LoginContainer = styled.article`
  width: 500px;
  height: 400px;
  margin: 100px auto;
  box-shadow: 1px 1px 22px 2px rgba(0, 0, 0, 0.25);
  border-radius: 38px;
`;
const LoginHeader = styled.h2`
  color: #5f6caf;
  font-size: 30px;
  position: relative;
  top: 50px;
  left: 211px;
`;
const SocialButton = styled(NavLink)`
  display: block;
  width: 300px;
  height: 55px;
  font-size: 18px;
  text-align: center;
  line-height: 55px;
  position: relative;
  top: 70px;
  left: 100px;
  margin: 15px 0;
  background-color: ${(props) =>
    props.name === 'kakao' ? '#F7E317' : '#5F6CAF'};
  color: ${(props) => (props.name === 'kakao' ? '#381E1F' : '#fff')};
  border: none;
  border-radius: 22px;
`;
const SignupButton = styled(NavLink)`
  color: #5f6caf;
  font-size: 18px;
  position: relative;
  bottom: -140px;
  left: 220px;
`;

function Login() {
  return (
    <LoginSection>
      <LoginContainer>
        <LoginHeader>로그인</LoginHeader>
        <SocialButton name="kakao" to="/">
          카카오로 로그인
        </SocialButton>
        <SocialButton to="/loginForEmail">이메일로 로그인</SocialButton>
        <SignupButton to="/signup">회원가입</SignupButton>
      </LoginContainer>
    </LoginSection>
  );
}

export default Login;
