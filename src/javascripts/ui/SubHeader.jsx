const React = require('react');

import { Router, Route, Link } from 'react-router'

var SubHeader = React.createClass({
 
  render() {
    return (<div className="SubHeader">{this.props.children}</div>)
  },
});
 
module.exports = SubHeader;