import {Store} from 'flux/utils';
 
class SessionStore extends Store {
  getInitialState(): number {
    return 0;
  }

  __onDispatch(payload: Object): void{

  }
}