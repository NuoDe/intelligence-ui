/*
 * @Author: luzhenqian 
 * @Date: 2018-10-03 10:12:18 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-03 10:54:40
 */

import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
