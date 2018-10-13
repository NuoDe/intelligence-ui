/*
 * @Author: luzhenqian 
 * @Date: 2018-10-03 10:12:40 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-13 14:59:52
 */
import React from 'react'
import App from './App'
import Admin from './admin'
import SignIn from './pages/signIn'
import Table from './pages/demo/table'
import Buttons from './pages/demo/buttons'
import Initialtion from './pages/initialtion'
import UserInfo from './pages/demo/userInfo'
import NoMatch from './pages/error/404'
import { HashRouter, Route, Switch } from 'react-router-dom'

export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route exact path="/initialtion" component={Initialtion} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/" component={Initialtion} />
          <Route path="/admin" render={
            () =>
              <Admin>
                <Switch>
                  <Route path="/admin/demo/buttons" component={Buttons}></Route>
                  <Route path="/admin/demo/table" component={Table}></Route>
                  <Route path="/admin/demo/userInfo" component={UserInfo}></Route>
                  <Route component={NoMatch} />
                </Switch>
              </Admin>
          } />
          <Route exact path="/order" component={Initialtion} />
        </App>
      </HashRouter>
    )
  }
}