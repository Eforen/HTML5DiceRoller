const React = require('react');
import { Router, Route, Link } from 'react-router'

var AppBar = require('material-ui/lib/app-bar');
var LeftNav = require('material-ui/lib/left-nav');
var MenuItem = require('material-ui/lib/menu/menu-item');
var IconMenu = require('material-ui/lib/menus/icon-menu');
var IconButton = require('material-ui/lib/icon-button');
var FontIcon = require('material-ui/lib/font-icon');
var Colors = require('material-ui/lib/styles/colors');

//const RaisedButton = require('material-ui/lib/raised-button');


var menuItems = [
  { route: 'get-started', text: 'Get Started' },
  { route: 'customization', text: 'Customization' },
  { type: MenuItem.Types.SUBHEADER, text: 'Testing' },
  {
     type: MenuItem.Types.LINK,
     payload: '#/about',
     text: 'About'
  },
  {
     type: MenuItem.Types.LINK,
     payload: '#/inbox',
     text: 'Inbox'
  },
  { type: MenuItem.Types.SUBHEADER, text: 'Dice Rolling' },
  { route: 'nosession', text: 'Just Roll' },
  { route: 'sessions', text: 'Sessions' },
  { type: MenuItem.Types.SUBHEADER, text: 'Settings' },
  { route: 'login', text: 'Login' },
  { type: MenuItem.Types.SUBHEADER, text: 'About This Software' },
  {
     type: MenuItem.Types.LINK,
     payload: 'https://github.com/Eforen/HTML5DiceRoller',
     text: 'Source Code'
  },
  {
     type: MenuItem.Types.LINK,
     payload: 'https://www.ubersoftech.com',
     text: 'Developer Site',
     disabled: false
  },
  {
     type: MenuItem.Types.LINK,
     payload: 'http://eforen.tv',
     text: "Eforen's Website",
     disabled: false
  },
]


var appDisplay = React.createClass({
 
/*
  constructor() {
    //super();
 
    this._handleClick = this._handleClick.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
  },
 
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  */
 
  _handleClick(e) {
    e.preventDefault();
 
    this.refs.leftNav.toggle();
  },
 
  // Get the selected item in LeftMenu
  _getSelectedIndex() {
    let currentItem;
 
    for (let i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.props.route.path==currentItem.route) {
        return i;
      }
    }
  },
 
  _onLeftNavChange(e, key, payload) {
    // Do DOM Diff refresh
    this.refs.leftNav.toggle();
    this.context.route.transitionTo(payload.route);
  },

  menuClick: function()
  {
    alert('ok');
  },
  _toggle(e){
    e.preventDefault()
    this.refs.leftNav.toggle()
  },
  render() {

  	var iconButtonElement = (
  		<IconButton tooltip="System">
  			<FontIcon className="material-icons" color={Colors.white}>more_vert</FontIcon>
  		</IconButton>
  		)
  	var btnRight = (<IconMenu iconButtonElement={iconButtonElement}>
		<MenuItem primaryText="Refresh" />
		<MenuItem primaryText="Send feedback" />
		<MenuItem primaryText="Settings" />
		<MenuItem primaryText="Help" />
		<MenuItem primaryText="Sign out" />
	</IconMenu>)

	var nav = (<LeftNav ref="leftNav"
		menuItems={menuItems}
		docked={false}
		disableSwipeToOpen={false}
		selectedIndex={this._getSelectedIndex()}
		onChange={this._onLeftNavChange}/>)

	var navFunc = function(){
		this.refs.leftNav.toggle()
	}

	var btnLeft = (<IconButton tooltip="Menu"
			onClick={ navFunc }>
		<FontIcon className="material-icons" color={Colors.white}>menu</FontIcon>
	</IconButton>)

    return (<div>
		<AppBar
			title="UberDice"
			onLeftIconButtonTouchTap={this._toggle}>
		</AppBar>
		{nav}
		{this.props.children}
		</div>)
  },
});
 
module.exports = appDisplay;