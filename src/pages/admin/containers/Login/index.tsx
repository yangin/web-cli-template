import React from 'react'
import { withRouter } from 'react-router-dom'
import { StyledLogin } from './styles'

type LoginProps = {
  history: Object
}

const Login = (props: LoginProps) => {
  const { history } = props

  const onLogin = () => {
    history.push({ pathname: '/admin/dashboard', params: 'yangjin' })
  }

  return (
    <StyledLogin>
      <div className="title">
        Login Page
      </div>
      <button onClick={onLogin}>登录</button>
    </StyledLogin>
  )
}

export default withRouter(Login)
