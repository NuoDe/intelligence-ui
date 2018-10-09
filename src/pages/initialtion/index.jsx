/*
 * @Author: luzhenqian 
 * @Date: 2018-10-03 10:44:44 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-08 23:25:15
 */

import React from 'react'
import { Button, Card, Form, Input, Select } from 'antd'
import { Http } from '../../http'
import InitStep from '../../components/Steps' 

class DBInit extends React.Component {

  dbInit = () => {
    let initInfo = JSON.stringify(this.props.form.getFieldsValue())
    console.log(initInfo)
    Http.post("/web/dbInit",
      initInfo
    ).then()
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
    
    const steps = [
      {
        title:'初始化数据库',
        description:'高安全等级，保证数据库安全性'
      },
      {
        title:'定制登录页面',
        description:'通过多种部署架构，您可以自由选择，满足多种可用性要求'
      },
      {
        title:'重新启动项目',
        description:'灵活的产品形态，满足系统可扩展性'
      },
    ]
    
    return (
      <div>
        <Card title="初始化">
          <Form>
            <Item
              label="选择数据库"
              {...formInputLayout}>
              {
                getFieldDecorator("driverClassName", {
                  initialValue: 'mysql'
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
                initialValue: 'jdbc:mysql://127.0.0.1:3306/'
              })(
                <Input
                  autoComplete='off'
                  placeholder="请输入url" />
              )}
            </Item>
            <Item
              label="用户名"
              {...formInputLayout}>
              {getFieldDecorator("userName")(
                <Input
                  autoComplete='off'
                  placeholder="请输入用户名" />
              )}
            </Item>
            <Item
              label="密码"
              {...formInputLayout}>
              {getFieldDecorator("password")(
                <Input
                  autoComplete='off'
                  placeholder="请输入密码" />
              )}
            </Item>
            <Item {...formButtonLayout}>
              <Button type="primary" onClick={this.dbInit}>初始化数据库</Button>
              <Button type="primary" onClick={this.dbInit} style={{ float: 'right' }}>测试连接</Button>
            </Item>
          </Form>
        </Card>
          <InitStep style={{ marginTop: 20 }} steps={steps}></InitStep>
      </div>
    )
  }
}

export default Form.create()(DBInit)