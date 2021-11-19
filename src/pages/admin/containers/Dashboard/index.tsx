import React from 'react'
import { withRouter } from 'react-router-dom'
import './index.less'

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
    <div className="login">
      <div className="title">
        Dashboard Page
      </div>
      <div>
        <button onClick={onBack}>返回</button>
      </div>
    </div>
  )
}

export default withRouter(Login)
