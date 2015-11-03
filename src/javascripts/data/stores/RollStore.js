//import Store from 'flux/utils.js';
//import AppDispatcher from "../dispatcher/AppDispatcher";
//
//alert(Store);
//alert("again");
//
//class RollStore extends Store {
//	constructor(dispatcher) {
//		super(dispatcher);
//	}
//
//	getInitialState(): number {
//		return 0;
//	}
//
//	__onDispatch(payload: Object): void{
//		alert("Role msg");
//	}
//}
//
//module.exports = new RollStore(AppDispatcher);


var FluxStore = require('flux/lib/FluxStore');
var AppDispatcher = require('../dispatcher/AppDispatcher');

class RollStore extends FluxStore {

	__onDispatch(msg) {
		alert("Role msg: "+msg.action.role);
		switch(msg.action.msgType) {

			case 'an-msg':
				changeState(msg.someData);
				this.__emitChange();
				break;

			case 'another-msg':
				changeStateAnotherWay(msg.otherData);
				this.__emitChange();
				break;

			default:
			// no op
		}
	}

}

module.exports = new RollStore(AppDispatcher);