const React = require('react');
const Header = require('Header');
const SubHeader = require('SubHeader');

import { Router, Route, Link } from 'react-router'

var PageGetStarted = React.createClass({
 
  render() {
    return (<div>
		<Header>Getting Started</Header>
		<Header></Header>
		<Header></Header>
		<SubHeader></SubHeader>
		<Header></Header>
		<SubHeader></SubHeader>
		<Header></Header>
		<Header></Header>
		</div>)
  },
});
 
module.exports = PageGetStarted;