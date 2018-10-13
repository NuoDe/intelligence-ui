/*
 * @Author: luzhenqian 
 * @Date: 2018-10-08 11:01:27 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-11 15:11:05
 */
import React from 'react'
import { Card, Table, Input, message } from 'antd';
import { Http } from '../../http'

export default class Tabel extends React.Component {

  dataSource = [
    {
      key: 1,
      id: 1,
      userName: '小明',
      sex: '男',
      state: 'zzz',
      interest: '打球',
      birthday: '2000-12-22 10:22:33',
      address: '山东省济南市',
      time: '10:23:33'
    }
  ]

  state = {
    dataSource: this.dataSource
  }

  getUser = () => {
    Http.get('/web/user/').then(
      (res) => {
        if (res.status === 200 && res.data !== {}) {
          for (let i = 0; i < res.data.length; i++) {
            res.data[i].key = res.data[i].id
            this.dataSource.push(res.data[i])
          }
        }
        this.setState({
          dataSource: this.dataSource
        })
      }
    )
  }

  search = (value) => {
    if (value === '') {
      message.warning('系统没有发现您所输入的id，请重新检测。')
    } else {
      Http.get("/web/user/" + value).then(
        res => {
          let data = [];
          if (res.status === 200) {
            if (res.data === "") {
              message.error('没有查询到数据！')
            } else {
              message.success('查询成功！')
              res.data.key = res.data.id
              data.push(res.data)
              this.setState({
                dataSource: data
              })
            }
          }
        }
      )
    }
  }

  componentDidMount() {
    this.getUser()
  }

  render() {
    const columns = [
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

    const Search = Input.Search

    return (
      <div>
        <Card title="基础表格">
          <Search style={{ width: 300, margin: 20 }}
            enterButton="Search"
            placeholder='请输入要查询的用户名id'
            onSearch={this.search}></Search>
          <Table
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
            bordered
          />
        </Card>
      </div>
    )
  }
}