import React, { Component } from 'react'
import { Time } from '../../utils'

export default class Remaning extends Component {
  getTimeLeft = () => {
    const { time } = this.props
    return Time.getTimeLeft(time)
  }
  overTime = () => {
    const { time } = this.props
    return Time.getStatus(time).overtime
  }
  render() {
    return (
      <div>
          { this.overTime() ? `Você fez ${this.getTimeLeft()} extras` : `Você está devendo ${this.getTimeLeft()}` }
      </div>
    )
  }
}
