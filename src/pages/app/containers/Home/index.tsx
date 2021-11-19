import React from 'react'
import './index.less'

const Home = () => {
  const onSignIn = () => {
    location.href = '/admin'
  }

  return (
    <div className="home">
      <div>
        <img className="logo" src="/images/logo.png"></img>
      </div>
      <p>Welcome To My Web</p>
      <div>
        <button onClick={onSignIn}>登录/注册</button>
      </div>
    </div>
  )
}

export default Home
