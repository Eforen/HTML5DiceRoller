const React = require('react');
var AppBar = require('material-ui/lib/app-bar');
var LeftNav = require('material-ui/lib/left-nav');
var MenuItem = require('material-ui/lib/menu/menu-item');
var IconMenu = require('material-ui/lib/menus/icon-menu');
var IconButton = require('material-ui/lib/icon-button');
var FontIcon = require('material-ui/lib/font-icon');
var Colors = require('material-ui/lib/styles/colors');

//const RaisedButton = require('material-ui/lib/raised-button');

var appDisplay = React.createClass({
  menuClick: function()
  {
  	console.log("WTF!")
    alert('ok');
  },
  _toggle(e){
    e.preventDefault()
    this.refs.leftNav.toggle()
  },
  render() {
  	var menuItems = [
	  { route: 'get-started', text: 'Get Started' },
	  { route: 'customization', text: 'Customization' },
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

  	console.log("WTF!")

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

	var nav = (<LeftNav ref="leftNav" menuItems={menuItems} docked={false} disableSwipeToOpen={false}/>)

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
		</div>)
  },
});
 
module.exports = appDisplay;