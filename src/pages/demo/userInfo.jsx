/*
 * @Author: luzhenqian 
 * @Date: 2018-10-11 15:16:49 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-13 15:51:26
 */
import React from 'react'
import { Card, Table, message, Input, Button } from 'antd'
import { Http } from '../../http'

export default class UserInfo extends React.Component {

  dataSource = []

  state = {
    dataSource: this.dataSource
  }

  /**
   * 获取所有用户信息
   */
  getUserInfoAll = () => {
    Http.get('/web/demo/user').then(
      res => {
        if (res.status === 200) {
          if (res.data === null) {
            message.error('没有数据')
          } else {
            for (let i = 0; i < res.data.length; i++) {
              res.data[i].key = res.data[i].id
            }
            this.setState({
              dataSource: res.data
            })
          }
        }
        else {
          message.error('链接失败')
        }
      }
    )
  }

  /**
   * 获取某个用户信息
   */
  getUser = (value) => {
    Http.get('/web/demo/user/' + value).then(
      res => {
        if (res.status === 200) {
          console.log(res.data)
          if (res.data === "") {
            message.error('没有该用户')
          } else {
            res.data.key = res.data.id
            let data = []
            data.push(res.data)
            this.setState({
              dataSource: data
            })
          }
        }
        else {
          message.error('链接失败')
        }
      })
  }

  /**
   * 添加一个用户
   */
  addUser = () => {
    let userInfo ={
      id: 0,
      userName: '小红',
      sex: '女',
      state: '小学生',
      interest: '看电影',
      birthday: '2010',
      address: '上海人',
      time: '10:22:22'
    }
    Http.post("/web/user", userInfo).then(
      res => {
        if (res.status === 200) {
          if (res.data) {
            message.success("操作成功！")
            this.getUserInfoAll()
          } else {
            message.success("操作失败！")
          }
        }
      }
    )
  }

  // 這是一個生命周期，這個生命周期實在渲染之前來執行的
  componentDidMount() {
    this.getUserInfoAll()
  }

  columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '用户名',
      dataIndex: 'userName',
      key: 'userName'
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex'
    },
    {
      title: '状态',
      dataIndex: 'state',
      key: 'state'
    },
    {
      title: '爱好',
      dataIndex: 'interest',
      key: 'interest'
    },
    {
      title: '生日',
      dataIndex: 'birthday',
      key: 'birthday'
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: '上次登录时间',
      dataIndex: 'time',
      key: 'time'
    },
  ]

  render() {

    const Search = Input.Search

    return (
      <div>
        <Card title="用户信息">
          <Search
            placeholder="input search text"
            onSearch={this.getUser}
            enterButton
            style={{ margin: 20, width: 300 }}
          />
          <Button onClick={this.addUser}>添加一个用户</Button>
          <Table
            columns={this.columns}
            dataSource={this.state.dataSource}
            pagination={false} />
        </Card>
      </div>
    )
  }
}