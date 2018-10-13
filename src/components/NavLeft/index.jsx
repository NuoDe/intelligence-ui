/*
 * @Author: luzhenqian 
 * @Date: 2018-10-03 10:16:55 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-12 11:21:53
 */

import React from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import './index.less'
import MenuConfig from '../../config/menuConfig'
const SubMenu = Menu.SubMenu

export default class NavLeft extends React.Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }
  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key}>
      <NavLink to={item.key}>
        {item.title}
        </NavLink>
        </Menu.Item>
        )
    })
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img src="./intelligence.ico" alt="1" />
          <h1>Intelligence framework</h1>
        </div>
        {/* <Menu theme="dark">
                    <SubMenu key="sub1" title="菜单1">
                        <Menu.Item key="1">子菜单1</Menu.Item>
                        <Menu.Item key="2">子菜单2</Menu.Item>
                        <Menu.Item key="3">子菜单3</Menu.Item>
                        <Menu.Item key="4">子菜单4</Menu.Item>
                    </SubMenu>
                </Menu> */}
        <Menu theme="dark">
          {this.state.menuTreeNode}
        </Menu>

      </div>
    )
  }
}