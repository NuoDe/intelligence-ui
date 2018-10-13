/*
 * @Author: luzhenqian 
 * @Date: 2018-10-03 10:17:29 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-11 15:27:50
 */
export default [
  {
    title: '首页',
    key: '/admin'
  },
  {
    title: 'demo',
    key: '/demo',
    children: [
      {
        title: '按钮',
        key: '/admin/demo/buttons'
      },
      {
        title: '表格',
        key: '/admin/demo/table'
      },
      {
        title: '用戶信息',
        key: '/admin/demo/userInfo'
      }
    ]
  }
]