import { connect } from 'react-redux';
import Router from './layout'

const mapStateToProps = state => {
  return {
    logged: state.logIn.logged
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const PublicRouteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Router)

export default PublicRouteContainer
