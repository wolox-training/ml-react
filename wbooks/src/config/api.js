import axios from 'axios';

export const TOKEN_KEY = "TOKEN_KEY";
export const USER_ID = "USER_ID";
var instance = axios.create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1/',
  timeout: 5000
});

export default instance;
