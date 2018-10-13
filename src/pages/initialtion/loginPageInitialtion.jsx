/*
 * @Author: luzhenqian 
 * @Date: 2018-10-10 00:19:20 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-13 16:56:24
 */

import React from 'react'
import { Button, Form, Input, Upload, Icon, message } from 'antd'
import { Http } from '../../http'

class LoginPageInitialtion extends React.Component {

  reStart = () => {
    // let initInfo = this.props.form.getFieldsValue()
    this.props.form.validateFields((err, value) => {
      if (err) {
        message.error(``)
      } else {
        Http.post('/web/reStart', value).then(
          (res) => {
            this.props.next()
            console.log(res)
          }
        )
      }
    })
  }

  dbValidate = () => {

  }

  render() {

    const { getFieldDecorator } = this.props.form

    const { TextArea } = Input
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

    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <div className="init_db_main">
        <Form className='init_page_content'>
          <span style={{ float: 'right', marginRight: 40 }}>建议最小比例：4:1<br />
            建议最小比例：3:1</span>
          <Item
            label="企业logo"
            {...formInputLayout}>
            <Upload
              action="/web/setLogo"
              listType="picture-card"
            >{uploadButton}</Upload>
          </Item>
          <Item
            label="登录页背景图"
            {...formInputLayout}>
            <Upload
              action="/web/setBackgroundImage"
              listType="picture-card"
            >{uploadButton}</Upload>
            {/* 建议最小尺寸：600*200<br/>最大尺寸900*300 */}
          </Item>
          <Item
            label="版权信息"
            {...formInputLayout}>
            {getFieldDecorator('copyrightInfo', {
              rules: [
                { required: true, message: '版权信息为必填项' }
              ]
            })(
              <TextArea
                autosize={{ maxRows: 4, minRows: 2 }}
                placeholder='请输入版权信息，如：2015 - 2018  intelligence 版权所有'
              />
            )}
          </Item>
          <Item {...formButtonLayout}>
            <Button type="primary" onClick={this.reStart}>设置完成</Button>
          </Item>
        </Form>
      </div>
    )
  }
}

export default Form.create()(LoginPageInitialtion)