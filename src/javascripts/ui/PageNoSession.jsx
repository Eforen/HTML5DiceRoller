import React from 'react'
import Header from './Header.jsx'
import SubHeader from './SubHeader.jsx'
import DiceRoller from './DiceRoller.jsx'
//import { Router, Route, Link } from 'react-router'

export default class PageNoSession extends React.Component {
  render () {
    return <div>
      <Header>Private Session</Header>
      <DiceRoller rollHandler={this.handleRole.bind(this)}/>
      <Header>Session History</Header>
      <p>No rolls in log</p>
    </div>
  }

  handleRole(role){
    alert(role)
  }

  handleClick () {
    //<button onClick={this.handleClick.bind(this)}>click me!</button>
    //this.setState({ n: this.state.n + 1 })
  }
}