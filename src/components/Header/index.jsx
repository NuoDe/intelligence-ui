/*
 * @Author: luzhenqian 
 * @Date: 2018-10-03 10:16:07 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-11 14:29:39
 */

import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Util from '../../utils/utils'
import http from '../../http'

export default class Header extends React.Component {
  state = {}
  componentWillMount() {
    this.setState({
      userName: '曹操'
    })
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      })
    }, 1000)
    // this.getWeatherAPIData();
  }

  // 获取天气api
  getWeatherAPIData() {
    http.jsonp({
      url: 'http://localhost:8083/ttest'
    }).then((res) => {
      alert();
      console.log(res);
      debugger;
    })
  }

  render() {
    return (
      <div className='header'>
        <Row className='header-top'>
          <Col span="24">
            <span>欢迎，{this.state.userName}</span>
            <a>退出</a>
          </Col>
        </Row>
        <Row className='breadcrumb'>
          <Col span='4' className='breadcrumb-title'>
            首页
                    </Col>
          <Col span='20' className='weather'>
            <span className='date'>{this.state.sysTime}</span>
            <span className='weather-detail'>晴</span>
          </Col>
        </Row>
      </div>
    )
  }
}