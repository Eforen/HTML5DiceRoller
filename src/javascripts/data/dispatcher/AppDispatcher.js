var Dispatcher = require('flux/lib/Dispatcher');

//let singleton = Symbol();
let singletonEnforcer = Symbol();

class AppDispatcher extends Dispatcher {

	constructor(enforcer) {
		if(enforcer != singletonEnforcer) throw "Cannot construct singleton";
		super();
	}

	/**
	* A bridge function between the views and the dispatcher, marking the action
	* as a view action.
	* @param  {object} action The data coming from the view.
	*/
	handleViewAction(action) {
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		});
	}

	/**
	* A bridge function between the Server Stuff and the dispatcher, marking the action
	* as a server action.
	* @param  {object} action The data coming from the view.
	*/
	handleServerAction(action) {
		this.dispatch({
			source: 'SERVER_ACTION',
			action: action
		});
	}
}

let singleton = new AppDispatcher(singletonEnforcer);

export default singleton;