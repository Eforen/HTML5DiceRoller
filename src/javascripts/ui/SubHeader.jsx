const React = require('react');

import { Router, Route, Link } from 'react-router'

export default class SubHeader extends React.Component{
 
  render(){
    return (<div className="SubHeader">{this.props.children}</div>)
  }
}