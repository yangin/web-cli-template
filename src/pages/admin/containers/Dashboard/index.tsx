import React from 'react'
import { withRouter } from 'react-router-dom'
import { StyledDashboard } from './styles'

type LoginProps = {
  history: Object
}

const Login = (props: LoginProps) => {
  const { history } = props

  const onBack = () => {
    history.push({ pathname: '/admin/login', params: 'yangjin' })
    console.log('这是登录按钮')
  }

  return (
    <StyledDashboard>
      <div className="title">
        Dashboard Page
      </div>
      <div>
        <button onClick={onBack}>返回</button>
      </div>
    </StyledDashboard>
  )
}

export default withRouter(Login)
