import { connect } from 'react-redux';
import {applyFilter} from '../../../../../../redux/Filter/actions'
import {applyText} from '../../../../../../redux/Text/actions'
import Dashboard from './layout'

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
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
