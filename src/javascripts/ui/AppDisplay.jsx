const React = require('react');
import { Router, Route, Link, History } from 'react-router'

//const AppBar = require('material-ui/lib/app-bar');
//const LeftNav = require('material-ui/lib/left-nav');
//const MenuItem = require('material-ui/lib/menu/menu-item');
//const IconMenu = require('material-ui/lib/menus/icon-menu');
//const IconButton = require('material-ui/lib/icon-button');
//const FontIcon = require('material-ui/lib/font-icon');
//const Colors = require('material-ui/lib/styles/colors');

//import {AppBar, LeftNav, MenuItem, IconMenu, IconButton, FontIcon, Colors} from 'material-ui/lib'
//const RaisedButton = require('material-ui/lib/raised-button');

import AppBar from 'material-ui/lib/app-bar'
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menu/menu-item'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import IconButton from 'material-ui/lib/icon-button'
import FontIcon from 'material-ui/lib/font-icon'
import Colors from 'material-ui/lib/styles/colors'


const menuItems = [
  { route: '/get-started', text: 'Get Started' },
  //{ route: '/customization', text: 'Customization' },
  { type: MenuItem.Types.SUBHEADER, text: 'Dice Rolling' },
  { route: '/private', text: 'Just Roll' },
  { route: '/sessions', text: 'Sessions' },
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

const menuItems2 = [
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


export default class appDisplay extends React.Component {
 
  _handleClick(e) {
    e.preventDefault();
 
    this.refs.leftNav.toggle();
  }
 
  // Get the selected item in LeftMenu
  _getSelectedIndex() {
    let currentItem;
 
    for (let i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.props.route.path==currentItem.route) {
        return i;
      }
    }
  }
 
  _onLeftNavChange(e, key, payload) {
    // Do DOM Diff refresh
    console.log("WTF")
    //this.refs.leftNav.toggle();
    //this.props.history.transitionTo(payload.route);
    this.props.history.pushState(null, payload.route, payload.route);
    //this.transitionTo(payload.route);
    //this.history.transitionTo(payload.route);
  }

  menuClick()
  {
    alert('ok');
  }

  _toggle(e){
    e.preventDefault()
    this.refs.leftNav.toggle()
  }
  _toggle2(e){
    e.preventDefault()
    this.refs.rightNav.toggle()
  }

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

	var navFunc = function(){
		this.refs.leftNav.toggle()
	}

	var btnLeft = (<IconButton tooltip="Menu"
			onClick={ navFunc }>
		<FontIcon className="material-icons" color={Colors.white}>menu</FontIcon>
	</IconButton>)

	var pageTitle = "Uber DiceRoller"
	switch(this.props.children.type.name||
			this.props.children.type.displayName){
		case "PageGetStarted":
			pageTitle = "Getting Started"
			break
		case "PageNoSession":
			pageTitle = "Private Session"
			break
	}

    return (<div>
		<AppBar
			title={pageTitle}
			onLeftIconButtonTouchTap={this._toggle}
			//onRightIconButtonTouchTap={this._toggle2}
			iconElementRight=<IconButton tooltip="System" onTouchTap={this._toggle2}>
					  			<FontIcon className="material-icons" color={Colors.white}>more_vert</FontIcon>
					  		</IconButton>
			>
		</AppBar>

		<LeftNav ref="leftNav"
		menuItems={menuItems}
		docked={false}
		disableSwipeToOpen={false}
		selectedIndex={this._getSelectedIndex()}
		onChange={this._onLeftNavChange}/>

		<LeftNav ref="rightNav"
		menuItems={menuItems2}
		docked={false}
		openRight={true}
		disableSwipeToOpen={false}
		selectedIndex={this._getSelectedIndex()}
		onChange={this._onLeftNavChange}/>

		{this.props.children}

		</div>)
  }
}