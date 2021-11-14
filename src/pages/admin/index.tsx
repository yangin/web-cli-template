import React from 'react'
import ReactDOM from 'react-dom'
import { AdminRouter } from './configs/router'

const Admin = () => {
  return (
    <AdminRouter />
  )
}

ReactDOM.render(<Admin />, document.getElementById('admin'))
