export const MsgConstants = {
	ROLE_CREATE: Symbol('RollStore-create'),
	ROLE_UPDATE: Symbol('RollStore-update'),

	SESSION_CREATE: Symbol('SessionStore-create'),
	SESSION_UPDATE: Symbol('SessionStore-update'),
	SESSION_JOIN: Symbol('SessionStore-join'),
	SESSION_LEAVE: Symbol('SessionStore-leave')
};