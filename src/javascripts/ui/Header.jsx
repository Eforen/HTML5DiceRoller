const React = require('react');

import { Router, Route, Link } from 'react-router'

var Header = React.createClass({
 
  render() {
    return (<div className="Header">{this.props.children}</div>)
  },
});
 
module.exports = Header;