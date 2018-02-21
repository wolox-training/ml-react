import api from '../config/api';

export default {
  logIn(user, pass) {
    return api.post('/users/sessions',{
        email: user,
        password: pass
      });
  },
  updateToken(token) {
    api.defaults.headers.authorization = token;
  }
}
