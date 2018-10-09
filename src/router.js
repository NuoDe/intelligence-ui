/*
 * @Author: luzhenqian 
 * @Date: 2018-10-03 10:12:40 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-09 09:29:57
 */
import React from 'react'
import App from './App'
import Admin from './admin'
import Table from './pages/demo/table'
import Buttons from './pages/demo/buttons'
import Initialtion from './pages/initialtion'
import NoMatch from './pages/error/404'
import { HashRouter, Route, Switch } from 'react-router-dom'

export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/initialtion" component={Initialtion}/>
          <Route path="/admin" render={
            ()=>
            <Admin>
              <Switch>
                <Route path="/admin/demo/buttons" component={Buttons}></Route>
                <Route path="/admin/demo/table" component={Table}></Route>
                <Route component={NoMatch}/>
              </Switch>
            </Admin>
          }/>
          <Route path="/order" component={Initialtion}/>
        </App>
      </HashRouter>
    )
  }
}