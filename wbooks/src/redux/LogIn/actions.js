import {TOKEN_KEY} from '../../config/api'
import AcountApi from '../../services/AcountApi'

export const LOG_IN = "LOGIN@@LOG_IN";
export const LOG_OUT = "LOGIN@@LOG_OUT"
export const SIGGNED_UP = "LOGIN@@SIGGNED_UP"

export function logIn() {
  return {type:LOG_IN};
};

export function logUser(user, pass) {
  return (dispatch) => {
    AcountApi.logIn(user, pass).then(
      response => {
        AcountApi.updateToken(response.data.access_token);
        localStorage.setItem(TOKEN_KEY, response.data.access_token);
        dispatch(logIn());},
      error => console.log(error)
      )
  }
}

export function reenter() {
  return (dispatch) => {
    if(localStorage.getItem(TOKEN_KEY) !== null && localStorage.getItem(TOKEN_KEY) !== "") {
      AcountApi.updateToken(localStorage.getItem(TOKEN_KEY));
      dispatch(logIn());
    }
  }
}

export function signUp(payload) {
  return (dispatch) => {
    AcountApi.signUp(payload).then(
      response => dispatch(siggnedUp()),
      error => console.log(error)
    )
  }
}

export function siggnedUp() {
  return {type:SIGGNED_UP}
}

export function logOut() {
  return {type:LOG_OUT};
}
