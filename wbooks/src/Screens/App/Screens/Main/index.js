import { connect } from 'react-redux';
import {logOut} from '../../../../redux/LogIn/actions'
import AcountApi from '../../../../services/AcountApi'
import Main from './presenter'
import {TOKEN_KEY} from '../../../../config/api'

const mapStateToProps = state => {
  return
};

const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => {
      localStorage.removeItem(TOKEN_KEY);
      AcountApi.updateToken("");
      dispatch(logOut());
      }
  }
}

const LogOutUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default LogOutUser;
