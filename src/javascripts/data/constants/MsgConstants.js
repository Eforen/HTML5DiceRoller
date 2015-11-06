export const ROLE_CREATE = Symbol('RollStore-create');
export const ROLE_UPDATE = Symbol('RollStore-update');

export const SESSION_CREATE = Symbol('SessionStore-create'); //Attempts to create a session
export const SESSION_UPDATE = Symbol('SessionStore-update'); //Attempts to update a session details
export const SESSION_JOIN = Symbol('SessionStore-join'); //Request joining a session
export const SESSION_LEAVE = Symbol('SessionStore-leave'); //Attempts leaving a session
export const SESSION_OPEN = Symbol('SessionStore-open'); //Attemps to activate a session