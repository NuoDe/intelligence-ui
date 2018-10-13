/*
 * @Author: luzhenqian 
 * @Date: 2018-10-09 19:27:37 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-13 16:54:53
 */

import React from 'react'
import { Button, Form, Input, Select, message } from 'antd'
import { Http } from '../../http'

class DBinitialtion extends React.Component {

  dbInit = () => {
    let initInfo = this.props.form.getFieldsValue()
    this.props.form.validateFields((err, values) => {
      if (err) {
        message.error(`初始化失败，请认真核对数据库信息`);
      } else {
        Http.post("/web/dbInit",
          JSON.stringify(initInfo)
        ).then(
          (res) => {
            console.log(res)
            if (res.data === "success") {
              message.success(`初始化成功！`)
              this.props.next()
            } else if (res.data === "error") {
              message.error(`初始化失败，请认真核对数据库信息`)
            }
          }
        )
      }
    })
  }

  dbValidate = () => {
    let initInfo = this.props.form.getFieldsValue()
    Http.get("/web/dbValidate",
      { params: initInfo }
    ).then(
      (res) => {
        if (res.data) {
          message.success(`连接成功`)
        } else {
          message.error(`连接失败`)
        }
      }
    )
  }

  render() {

    const { getFieldDecorator } = this.props.form

    const { Option } = Select
    const { Item } = Form

    const formInputLayout = {
      labelCol: {
        xs: 24,
        sm: 6
      },
      wrapperCol: {
        xs: 24,
        sm: 12
      }
    }

    const formButtonLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          offset: 6,
          span: 12
        }
      }
    }

    return (
      <div className="init_db_main">
        <Form className='init_db_content'>
          <Item
            label="选择数据库"
            {...formInputLayout}>
            {
              getFieldDecorator("driverClassName", {
                initialValue: 'mysql',
                rules: [
                  { required: true, message: '数据库类型为必填项' }
                ]
              })(
                <Select>
                  <Option value="mysql">
                    mysql
                    </Option>
                </Select>
              )
            }
          </Item>
          <Item
            label="url"
            {...formInputLayout}>
            {getFieldDecorator("url", {
              // initialValue: 'jdbc:mysql://127.0.0.1:3306/',
              initialValue: 'jdbc:mysql://127.0.0.1:3306/intelligence?serverTimezone=CST&useSSL=false',
              rules: [
                { required: true, message: '数据库地址为必填项' },
                // { patten: new RegExp('/(?:jdbc)(:)(\/)(\/)(?:(html|mysql|js))(:)((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))(?![\d])(:)(?:([1-9]([0-9]{0,4})$))/i'), message: '格式错误，请重新检查' }
              ]
            })(
              <Input
                autoComplete='off'
                placeholder="请输入url" />
            )}
          </Item>
          <Item
            label="用户名"
            {...formInputLayout}>
            {getFieldDecorator("username", {
              initialValue: 'root',
              rules: [
                { max: 16, message: '用户名最大长度为16位' },
                { required: true, message: '用户名为必填项' }
              ]
            })(
              <Input
                autoComplete='off'
                placeholder="请输入用户名" />
            )}
          </Item>
          <Item
            label="密码"
            {...formInputLayout}>
            {getFieldDecorator("password", {
              initialValue: 'root',
              rules: [
                { required: true, message: '密码为必填项' }
              ]
            })(
              <Input
                autoComplete='off'
                placeholder="请输入密码" />
            )}
          </Item>
          <Item {...formButtonLayout}>
            <Button type="primary" onClick={this.dbInit}>初始化数据库</Button>
            <Button type="primary" onClick={this.dbValidate} style={{ float: 'right' }}>测试连接</Button>
          </Item>
        </Form>
      </div>
    )
  }
}

export default Form.create()(DBinitialtion)