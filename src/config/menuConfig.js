/*
 * @Author: luzhenqian 
 * @Date: 2018-10-03 10:17:29 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-09 09:19:01
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
      }
    ]
  }
]