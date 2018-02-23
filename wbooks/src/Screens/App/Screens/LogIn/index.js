import { connect } from 'react-redux';
import {logUser, reenter} from '../../../../redux/LogIn/actions'
import LogIn from './present'

const mapStateToProps = state => {
  return (
    {error: false}
  )
};

const mapDispatchToProps = dispatch => {
  return {
    onLogIn: (userDetails) => {
      dispatch(logUser(userDetails.email, userDetails.password));
      },
    onReenter: () => {
      dispatch(reenter());
    }
  }
}

const LogInUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn)

export default LogInUser;
