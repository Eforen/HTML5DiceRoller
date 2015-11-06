const React = require('react');
import { Router, Route, Link, History } from 'react-router'

//var AppBar = require('material-ui/lib/app-bar');
//var LeftNav = require('material-ui/lib/left-nav');
//var MenuItem = require('material-ui/lib/menu/menu-item');
//var IconMenu = require('material-ui/lib/menus/icon-menu');
//var IconButton = require('material-ui/lib/icon-button');
//var FontIcon = require('material-ui/lib/font-icon');
//var Colors = require('material-ui/lib/styles/colors');

//import {AppBar, LeftNav, MenuItem, IconMenu, IconButton, FontIcon, Colors} from 'material-ui/lib'
//const RaisedButton = require('material-ui/lib/raised-button');

import AppBar from 'material-ui/lib/app-bar'
import LeftNav from 'material-ui/lib/left-nav.js'
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
    this.__toggleLeft()
  }
  _toggle2(e){
    e.preventDefault()
    this.__toggleRight()
  }
  __toggleLeft(){
    this.leftNav.toggle()
  }
  __toggleRight(){
    this.rightNav.toggle()
  }

  render() {

    let iconButtonElement = (
      <IconButton tooltip="System">
        <FontIcon className="material-icons" color={Colors.white}>more_vert</FontIcon>
      </IconButton>)
    let btnRight = (<IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem index={1} primaryText="Refresh" />
      <MenuItem index={2} primaryText="Send feedback" />
      <MenuItem index={3} primaryText="Settings" />
      <MenuItem index={4} primaryText="Help" />
      <MenuItem index={5} primaryText="Sign out" />
    </IconMenu>)

  let btnLeft = (<IconButton tooltip="Menu" onClick={ this.__toggleLeft.bind(this) }>
    <FontIcon className="material-icons" color={Colors.white}>menu</FontIcon>
  </IconButton>)

  let pageTitle = "Uber DiceRoller"
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
      onLeftIconButtonTouchTap={this._toggle.bind(this)}
      //onRightIconButtonTouchTap={this._toggle2}
      iconElementRight=<IconButton tooltip="System" onTouchTap={this._toggle2.bind(this)}>
                  <FontIcon className="material-icons" color={Colors.white}>more_vert</FontIcon>
                </IconButton>
      >
    </AppBar>

    <LeftNav ref={(ref) => this.leftNav = ref}
    menuItems={menuItems}
    docked={false}
    disableSwipeToOpen={false}
    selectedIndex={this._getSelectedIndex()}
    onChange={this._onLeftNavChange}/>
    
    <LeftNav ref={(ref) => this.rightNav = ref}
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