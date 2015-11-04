import FluxStore from 'flux/lib/FluxStore.js';
import AppDispatcher from "../dispatcher/AppDispatcher";
//var FluxStore = require('flux/lib/FluxStore');
//var AppDispatcher = require('../dispatcher/AppDispatcher');

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

export default new RollStore(AppDispatcher);