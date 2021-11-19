import React from 'react'
import './styles.less'

const NotFound = () => {
  const onGoHome = () => {
    location.href = '/'
  }

  return (
    <div className="not-found">
      <div className="title">
        NotFound
      </div>
      <button onClick={onGoHome}>返回首页</button>
    </div>
  )
}

export default NotFound
