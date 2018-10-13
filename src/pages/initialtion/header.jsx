/*
 * @Author: luzhenqian 
 * @Date: 2018-10-10 08:56:26 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-13 15:56:57
 */
import React from 'react'

export default class InitHeader extends React.Component {

  render() {

    const pageIndex = this.props.title === undefined ? "初始化数据库" : this.props.title

    const height = this.props.height;

    return (
      <div style={{ width: '90vw', margin: '0 auto', height: (height),display:'table' }}>
        <div className="tide_logo">
          <img alt='logo' src="/assets/images/logo.png" style={{ width: 140, height: 40,margin:20 }}></img>
          {pageIndex}</div>
      </div>
    )
  }
}