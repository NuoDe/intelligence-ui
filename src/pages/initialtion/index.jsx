/*
 * @Author: luzhenqian 
 * @Date: 2018-10-03 10:44:44 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-13 16:37:03
 */

import React from 'react'
import InitStep from '../../components/Steps'
import DBInit from './DBInitialtion'
import LoginInit from './loginPageInitialtion'
import InitHeader from './header'
import './index.less'

export default class Init extends React.Component {

  state = {
    current: 0
  }

  next = () => {
    this.setState({
      current: this.state.current + 1
    })
  }

  render() {
    const steps = [
      {
        title: '初始化数据库',
        description: '高安全等级，保证数据库安全性'
      },
      {
        title: '定制登录页面',
        description: '通过多种部署架构，您可以自由选择，满足多种可用性要求'
      },
      {
        title: '重新启动项目',
        description: '灵活的产品形态，满足系统可扩展性'
      },
    ]

    return (
      <div className="init_main">
        <InitHeader title={steps[this.state.current].title} height="10%"></InitHeader>
        {
          this.state.current === 0 ? <DBInit next={this.next}></DBInit> : null
        }
        { 
          this.state.current === 1 ? <LoginInit next={this.next}></LoginInit> : null
        }
        {
          this.state.current === 2 ? <DBInit next={this.next}></DBInit> : null
        }
        <InitStep steps={steps} current={this.state.current}></InitStep>
      </div>
    )
  }
}
