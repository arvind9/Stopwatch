// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minites: 0, secounds: 0}

  onIncrement = () => {
    this.setState(
      prevState => ({secounds: prevState.secounds + 1}),
      this.changeMinute,
    )
  }

  changeMinute = () => {
    const {secounds} = this.state
    if (secounds > 59) {
      this.setState(prevState => ({
        minites: prevState.minites + 1,
        secounds: 0,
      }))
    }
  }

  onStart = () => {
    this.intervalId = setInterval(this.onIncrement, 1000)
  }

  onStop = () => {
    clearInterval(this.intervalId)
  }

  onReset = () => {
    clearInterval(this.intervalId)
    this.setState({minites: 0, secounds: 0})
  }

  render() {
    const {minites, secounds} = this.state

    return (
      <div className="bg">
        <h1>Stopwatch</h1>
        <div className="card-bg">
          <p className="timer-heading">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="image"
              alt="stopwatch"
            />
            Timer
          </p>
          <h2 className="timer">
            {minites > 9 ? minites : `0${minites}`}:
            {secounds < 10 ? `0${secounds}` : secounds}
          </h2>
          <div>
            <button
              type="button"
              onClick={this.onStart}
              className="start-button"
            >
              Start
            </button>
            <button type="button" onClick={this.onStop} className="stop-button">
              Stop
            </button>
            <button
              type="button"
              onClick={this.onReset}
              className="reset-button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
