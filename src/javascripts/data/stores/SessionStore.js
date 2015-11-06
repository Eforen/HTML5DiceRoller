import FluxStore from 'flux/lib/FluxStore.js';
import AppDispatcher from "../dispatcher/AppDispatcher";
import SessionData from "../storeData/SessionData.js";

class SessionStore extends FluxStore {

	isValidSession(id){
		return (id == this.privateSession || id != "No Session")
	}

	get privateSession(){
		if(!SessionStore.__private){
			SessionStore.__private = Symbol()
		}
		return SessionStore.__private
	}

	getSession(id){
		//check Loaded Sessions
		if(this.__sessions[id])
			return this.__sessions[id]

		//check private sesson
		if(id == this.privateSession){
			if(this.__sessions[0])
				return this.__sessions[0]
			else {
				return this.__sessions[0] = {
					sessionName: "Private",
					online: false,
					roles: []
				}
			}
		}
		return "No Session"
	}


  __onDispatch(payload){
  	alert("Session msg");
  }
}

export default new SessionStore(AppDispatcher);