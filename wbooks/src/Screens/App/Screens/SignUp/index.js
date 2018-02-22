import { connect } from 'react-redux';
import {signUp} from '../../../../redux/LogIn/actions'
import SignUp from './layout'

const mapStateToProps = state => {
  return (
    {signedUp: false}
  )
};

const mapDispatchToProps = dispatch => {
  return {
    onSignUp: (userDetails) => {
      dispatch(signUp(userDetails));
      }
  }
}

const SignUpUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)

export default SignUpUser;
