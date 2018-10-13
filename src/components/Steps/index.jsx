/*
 * @Author: luzhenqian 
 * @Date: 2018-10-08 22:17:33 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-10 19:56:34
 */
import React from 'react'
import { Steps } from 'antd';

export default class initSteps extends React.Component {

  state = {
    steps: [
      {
        title: '第一步',
        description:''
      },
      {
        title: '第二步',
        description:''
      },
      {
        title: '第三步',
        description:''
      },
    ],
    current:0
  }

  render() {

    const { Step } = Steps

    const steps = this.props.steps === undefined ? this.state.steps : this.props.steps

    const current = this.props.current === undefined ? this.state.current : this.props.current

    return (
      <div>
          <Steps current={current}>
            {steps.map(item => <Step key={item.title} title={item.title} description={item.description}></Step>)}
          </Steps>
      </div>
    )
  }
}