import {Store} from 'flux/utils';
 
class RollStore extends Store {
  getInitialState(): number {
    return 0;
  }

  __onDispatch(payload: Object): void{

  }
}