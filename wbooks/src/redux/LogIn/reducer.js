import {LOG_IN, LOG_OUT} from './actions'

const initialState = {
  user: "",
  logged: false
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
    default:
      return state;
  }
}
