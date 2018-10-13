/*
 * @Author: luzhenqian 
 * @Date: 2018-10-03 10:19:10 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-11 15:38:54
 */

export default {
  /**
   * 格式化时间
   * @param {时间戳} time 
   */
  formateDate(time) {
    if (!time) {
      return '';
    }
    let date = new Date(time);
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + " " + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  }
}