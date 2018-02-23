import { connect } from 'react-redux';
import {applyFilter} from '../../../../redux/Filter/actions'
import {changeText, applyText} from '../../../../redux/Text/actions'
import Dashboard from './present'

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (values) => {
      dispatch(applyText(values.search));
      dispatch(applyFilter(values.filter));
    }
  }
}

const FilterDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default FilterDashboard
