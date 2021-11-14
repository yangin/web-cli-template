import React from 'react'
import { StyledNotFound } from './styles'

const NotFound = () => {
  const onGoHome = () => {
    location.href = '/'
  }

  return (
    <StyledNotFound>
      <div className="title">
        NotFound
      </div>
      <button onClick={onGoHome}>返回首页</button>
    </StyledNotFound>
  )
}

export default NotFound
