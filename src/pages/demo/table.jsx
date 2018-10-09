/*
 * @Author: luzhenqian 
 * @Date: 2018-10-08 11:01:27 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-09 09:30:43
 */
import React from 'react'
import { Card, Table } from 'antd';

export default class Tabel extends React.Component {

  state={}
  
  componentDidMount() {
    let dataSource = [
      {
        key: 1,
        userName: '小明',
        sex: '18',
        state: 'zzz',
        interest: '打球',
        birthday: '2000-12-22 10:22:33',
        address: '山东省济南市',
        time: '10:23:33'
      }
    ]

    this.setState({
      dataSource
    })

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
        title: '早起时间',
        dataIndex: 'time',
        key: 'time'
      },
    ]

    return (
      <div>
        <Card title="基础表格">
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