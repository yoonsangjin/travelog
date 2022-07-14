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
const EmailLoginButton = styled(NavLink)`
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
  background-color: #5f6caf;
  color: #fff;
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
  const API_KEY = process.env.REACT_APP_KAKAO_LOGIN_API_KEY;
  const REDIRECT_URI = 'https://localhost:3000/auth/kakao/callback';
  const KAKAO_OAUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}`;

  return (
    <LoginSection>
      <LoginContainer>
        <LoginHeader>로그인</LoginHeader>
        <a href={KAKAO_OAUTH_URL}>
          <SocialButton name="kakao">카카오로 로그인</SocialButton>
        </a>
        <EmailLoginButton to="/loginForEmail">이메일로 로그인</EmailLoginButton>
        <SignupButton to="/signup">회원가입</SignupButton>
      </LoginContainer>
    </LoginSection>
  );
}

export default Login;
