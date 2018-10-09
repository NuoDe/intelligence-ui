/*
 * @Author: luzhenqian 
 * @Date: 2018-10-08 22:17:33 
 * @Last Modified by: luzhenqian
 * @Last Modified time: 2018-10-08 23:26:05
 */
import React from 'react'
import { Card, Steps } from 'antd';

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
    ]
  }

  render() {

    const { Step } = Steps

    console.log(this.props.steps)

    const steps = this.props.steps === undefined ? this.state.steps : this.props.steps

    console.log();

    return (
      <div>
        <Card>
          <Steps>
            {steps.map(item => <Step key={item.title} title={item.title} description={item.description}></Step>)}
          </Steps>
        </Card>
      </div>
    )
  }
}