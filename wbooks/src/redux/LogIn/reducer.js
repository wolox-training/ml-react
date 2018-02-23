import {LOG_IN, LOG_OUT, SIGGNED_UP} from './actions'

const initialState = {
  user: "",
  logged: false,
  siggnedIn: false
};

export default function logIn(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        logged: true
      };
      break;
    case LOG_OUT:
      return {
        ...state,
        user:"",
        logged: false
      };
      break;
    case SIGGNED_UP:
      return {
        ...state,
        siggnedIn: true
      }
    default:
      return state;
  }
}
