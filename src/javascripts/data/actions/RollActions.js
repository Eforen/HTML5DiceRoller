import AppDispatcher from "../dispatcher/AppDispatcher";
import * as MsgConstants from "../constants/MsgConstants";
import RollStore from "../stores/RollStore";
import SessionStore from "../stores/SessionStore";

export function createRole(roleobj) {
	AppDispatcher.handleViewAction({
		actionType: MsgConstants.ROLE_CREATE,
		role: roleobj
	});
}

export function updateRole(id, roleobj) {
  
}