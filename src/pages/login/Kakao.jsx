import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Kakao() {
  const navigate = useNavigate()
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams
    const code = params.get('code')
    const grant_type = 'authorization_code'
    const REDIRECT_URI = 'http://localhost:8000/api/users/kakao/callback'

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${process.env.REACT_APP_KAKAO_LOGIN_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        },
      )
      .then(res => {
        axios.get('https://kauth.kakao.com/v2/user/me', {
          headers: {
            Authorization: `Bearer ${res.data.access_token}`,
          },
        })
      })
      .then(res => {
        axios.post(`http://localhost:8000/api/users/kakao`, res.data.kakao_account.profile.nickname)
      })
      .then(navigate('/'))
  }, [])
  return <div>Kakao</div>
}

export default Kakao
