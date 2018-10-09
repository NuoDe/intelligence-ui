/*
 * @Author: luzhenqian 
 * @Date: 2018-10-03 10:17:52 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-08 21:37:57
 */

import JsonP from 'jsonp'
import Axios from 'axios'

let Http = Axios

Http.defaults.headers.post['Content-Type'] = 'application/json'

export default class http {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url, {
        param: 'callback'
      }, function (error, response) {
        if (response !== undefined) {
          resolve(response);
        } else {
          reject(error);
        }
      })
    })
  }
}

export {Http}