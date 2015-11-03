import Store from 'flux/utils.js';
import AppDispatcher from "../dispatcher/AppDispatcher";

alert(Store);
alert("again");

class RollStore extends Store {
	constructor(dispatcher) {
		super(dispatcher);
	}

	getInitialState(): number {
		return 0;
	}

	__onDispatch(payload: Object): void{
		alert("Role msg");
	}
}

module.exports = new RollStore(AppDispatcher);