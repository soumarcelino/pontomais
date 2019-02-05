import React, { Component } from 'react'
import { Time } from '../../utils'

export default class Worked extends Component {
  getWorkedTime = () => {
    const { time } = this.props
    return Time.getWorkedTime(time)
  }
  render() {
    return (
      <div>
          <b>Hoje você trabalhou:</b> {this.getWorkedTime()}
      </div>
    )
  }
}
