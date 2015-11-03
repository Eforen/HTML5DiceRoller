import {FluxStore} from 'flux';
import AppDispatcher from "../dispatcher/AppDispatcher";

class SessionStore extends FluxStore {
  getInitialState(): number {
    return 0;
  }

  __onDispatch(payload: Object): void{
  	alert("Session msg");
  }
}

export default new SessionStore(AppDispatcher);