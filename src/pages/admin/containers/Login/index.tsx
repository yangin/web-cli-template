import React from 'react'
import { withRouter } from 'react-router-dom'
import './index.less'

type LoginProps = {
  history: Object
}

const Login = (props: LoginProps) => {
  const { history } = props

  const onLogin = () => {
    history.push({ pathname: '/admin/dashboard', params: 'yangjin' })
  }

  return (
    <div className="login">
      <div className="title">
        Login Page
      </div>
      <button onClick={onLogin}>登录</button>
    </div>
  )
}

export default withRouter(Login)
