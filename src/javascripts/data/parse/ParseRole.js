import RoleObj from '../RoleObj.js'

export default class ParseRole extends Parse.Object {
  constructor(object) {
    // Pass the ClassName to the Parse.Object constructor this should be what is in data on parse.com
    super('Role');
    // other initialization
    if(Array.isArray(object)){
      this.set('struct', object);
    } else if(typeof object === 'string' || object instanceof String){
      this.set('struct', RoleObj.evalStr(object));
    } else{
      throw new Error('ParseRole initialization failed make sure object is String or Array');
    }
  }

  getRoles(){
    return this.get('struct')
  }
}