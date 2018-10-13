/*
 * @Author: luzhenqian 
 * @Date: 2018-10-09 15:15:31 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-13 16:19:26
 */
import React from 'react'
import { Http } from '../../http'
import './index.less'

export default class Login extends React.Component {

  state = {
    logoUrl: localStorage.getItem('logoUrl'),
    backgroundImageUrl: localStorage.getItem('backgroundImageUrl'),
    copyrightInfo: localStorage.getItem('copyrightInfo')
  }

  init = () => {
    // let logoUrl = localStorage.getItem('copyrightInfo');
    // let backgroundImageUrl = localStorage.getItem('copyrightInfo');
    // let copyrightInfo = localStorage.getItem('copyrightInfo');
    if (this.state.copyrightInfo === null) {
      Http.get("/web/sginIn/initSignInPage").then((res) => {
        if (res.status === 200) {
          if (res.data === "") {

          } else {
            let logoUrl = res.data.logoUrl === null ? './assets/images/logo.png' : res.data.logoUrl
            let backgroundImageUrl = res.data.backgroundImageUrl === null ? './assets/images/backgroundImage.png' : res.data.backgroundImageUrl
            let copyrightInfo = res.data.copyrightInfo === null ? '' : res.data.copyrightInfo
            localStorage.setItem('logoUrl', logoUrl)
            localStorage.setItem('backgroundImageUrl', backgroundImageUrl)
            localStorage.setItem('copyrightInfo', copyrightInfo)
          }
        }
      })
    } else {
    }
  }

  componentDidMount() {
    this.init();
  }

  render() {
    return (
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <div style={{ width: '100%', height: '10%', background: 'red' }}>
          <div style={{ width: "80%", height: '10%', margin: '0 auto' }}>
            <img
              alt='logo'
              style={{ width: '150px', height: '40px' }}
              src={this.state.logoUrl} />
            <span style={{ float: 'right' }}>繁體版|ENGLISH</span>
          </div>
        </div>

        <div></div>
        <div></div>
      </div>
    )
  }
}
