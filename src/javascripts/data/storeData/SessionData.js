export default class SessionData {
	constructor(data, dbObj){
		if(dbObj) this.dbObj = dbObj
		else this.dbObj = null

		if(data){
			this.dataObj = {
				sessionName: data.sessionName ? data.sessionName : "Unnamed Session",
				members: data.members ? data.members : [],
				roles: data.roles ? data.roles : []
			}
		} else{
			this.dataObj = {
				sessionName: "Unnamed Session",
				members: [],
				roles: []
			}
		}
	} 

	get online(){
		return this.dbObj !== null
	}
}