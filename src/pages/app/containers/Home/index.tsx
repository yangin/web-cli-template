import React from 'react'
import { StyledHome } from './styles'

const Home = () => {
  const onSignIn = () => {
    console.log('登录/注册')
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
