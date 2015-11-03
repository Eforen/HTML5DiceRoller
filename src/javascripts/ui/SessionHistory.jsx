import React from 'react'
import Header from './Header.jsx'
import SubHeader from './SubHeader.jsx'
import DiceRoller from './DiceRoller.jsx'
//import { Router, Route, Link } from 'react-router'

export default class SessionHistory extends React.Component {
  render () {
    return <div>
      <Header>Session History</Header>
      <p>No rolls in log</p>
    </div>
  }
}