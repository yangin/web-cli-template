import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Login from '../containers/Login'
import Dashboard from '../containers/Dashboard'
import NotFound from '../../../components/NotFound'

// 注意，嵌套路由的Route不能加 exact,否则无法检测到子集
export const AdminRouter = () => (
  <Router >
    <Switch>
      <Redirect exact to="/admin/login" from="/admin" />
      <Route exact path="/admin/login" component={Login} />
      <Route exact path="/admin/dashboard" component={Dashboard} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
)
