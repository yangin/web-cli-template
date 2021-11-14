import React from 'react'
import { StyledHome } from './styles'

const Home = () => {
  const onSignIn = () => {
    location.href = '/admin'
  }

  return (
    <StyledHome>
      <div>
        <img className="logo" src="/images/logo.png"></img>
      </div>
      <p>Welcome To My Web</p>
      <div>
        <button onClick={onSignIn}>登录/注册</button>
      </div>
    </StyledHome>
  )
}

export default Home
