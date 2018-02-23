import api, {USER_ID} from '../config/api';

export default {
  logIn(user, pass) {
    return api.post('/users/sessions',{
        email: user,
        password: pass
      });
  },
  updateToken(token) {
    api.defaults.headers.authorization = token;
  },
  signUp(userInfo) {
    const confPass = 'confirm-password';
    const lastName = 'last-name'
    return api.post('/users', {
      user: {
      email: userInfo.email,
      password: userInfo.password,
      confirm_password: userInfo[confPass],
      first_name: userInfo.name,
      last_name: userInfo[lastName],
      locale: 'en'
      }
    })
  },
  getUserInfo() {
    return api.get('/users/me')
  },
  getWishes() {
    const userId = localStorage.getItem(USER_ID)
    return api.get(`/users/${userId}/wishes`)
  },
  addToWishlist(bookId) {
    const userId = localStorage.getItem(USER_ID)
    return api.post(`/users/${userId}/wishes`, {
      wish:{
        book_id: bookId,
        user_id: userId
      }
    })
  }
}
