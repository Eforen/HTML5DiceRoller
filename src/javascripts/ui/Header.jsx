import React from 'react'
//import { Router, Route, Link } from 'react-router'

export default class Header extends React.Component {
  render () {
    return <div className="Header">{this.props.children}</div>
  }
}