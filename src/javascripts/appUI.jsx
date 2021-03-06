const React = require('react');
const ReactDOM = require('react-dom');
const injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
const AppDisplay = require('./ui/AppDisplay.jsx');
const PageGetStarted = require('./ui/PageGetStarted.jsx');
const PageNoSession = require('./ui/PageNoSession.jsx');

// First we import some components...
import { Router, Route, Redirect, Link, History } from 'react-router'
import { createHistory, useBasename } from 'history'

//const history = createHistory()
/*
const history = useBasename(createHistory)({
  basename: '/#'
})*/

// Then we delete a bunch of code from App and
// add some <Link> elements...
const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* change the <a>s to <Link>s */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>

        {/*
          next we replace `<Child>` with `this.props.children`
          the router will figure out the children for us
        */}
        {this.props.children}
      </div>
    )
  }
})

// Make a new component to render inside of Inbox
const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

// Make a new component to render inside of Inbox
const Message = React.createClass({
  render() {
    return <h3>Message</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {/* Render the child route component */}
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})


// Make a new component to render inside of Inbox
class NoMatch extends React.Component{
  render() {
    return <h3>Message 404 Location not found!</h3>
  }
}


window.updateGame = function() {
	//React.render(<Router history={history} routes={routes} />, document.body)
	//React.render(
  ReactDOM.render(
		<Router>
			<Redirect from="/" to="/get-started" />
			<Route path="/" component={AppDisplay}>
				<Route path="get-started" name="Getting Started" component={PageGetStarted}/>
				<Route path="private" name="Private Session" component={PageNoSession}/>
				<Route path="about" component={About}/>
				<Route path="inbox" component={Inbox}>
				<Route path="messages/:id" component={Message}/>
				</Route>
				<Route path="*" component={NoMatch}/>
			</Route>
		</Router>, document.getElementById("aplicationpagewrapper"))
	//React.render(<AppDisplay />, document.body);
}