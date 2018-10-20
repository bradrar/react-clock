import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);

      this.state = {
        clock : new Date(),
        date : new Date(),
        isToggleOn: true,
      }

      this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      clock : new Date(),
    })
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
      const isToggleOn = this.state.isToggleOn;
      let currentDate;

      if (isToggleOn) {
        currentDate = <DateString date={this.state.date} />
      } else {
        currentDate = undefined 
      }

    return (
      <div>
        <div className="header">
          <Header />
        </div>

        <div className="toggle">
          <ToggleSwitch onChange={this.handleClick} defaultChecked={this.state.isToggleOn} />
        </div>
      
        <div className="container">
          <h1>{this.state.clock.toLocaleTimeString()}</h1>
          {currentDate}
        
        </div>
      </div>
    )
  }
}


const DateString = (props) => {
  return (
  <p>{props.date.toDateString()} </p>
  )
}

const ToggleSwitch = (props) => {
  return (
    <div>

    <label className="switch">
        <input type="checkbox" onChange={props.onChange} defaultChecked={props.defaultChecked} />
        <span className="slider round"></span>
    </label>
    <i className="fas fa-calendar-alt fa-3x"></i>
    </div>
  )
}

const Header = (props) => {
  return (
    <h1><i className="far fa-clock"></i> React Clock </h1>
  )
}