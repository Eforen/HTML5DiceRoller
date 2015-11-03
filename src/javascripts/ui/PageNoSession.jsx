import React from 'react'
import Header from './Header.jsx'
import SubHeader from './SubHeader.jsx'
import DiceRoller from './DiceRoller.jsx'
import SessionHistory from './SessionHistory.jsx'
//import { Router, Route, Link } from 'react-router'

import * as RollActions from "../data/actions/RollActions.js";

export default class PageNoSession extends React.Component {
  render () {
    return <div>
      <Header>Private Session</Header>
      <DiceRoller onRole={this.roll.bind(this)}/>
      <SessionHistory/>
    </div>
  }

  roll(roleCode){
    RollActions.createRole(roleCode);
  }
}