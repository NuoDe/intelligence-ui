/*
 * @Author: luzhenqian 
 * @Date: 2018-10-03 10:19:21 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-10 12:35:49
 */

import React from 'react'
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './style/common.less'
// import Home from './pages/home'

export default class Admin extends React.Component {
  render() {
    return (
      <Row className="container">
        <Col span="3" className="nav-left">
          <NavLeft />
        </Col>
        <Col span="21" className="main">
          <Header />
          <Row className="content">
            {/* <Home /> */}
            {this.props.children}
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}