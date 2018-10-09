/*
 * @Author: luzhenqian 
 * @Date: 2018-10-03 10:20:12 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-09 09:12:52
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
