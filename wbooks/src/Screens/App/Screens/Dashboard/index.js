import { connect } from 'react-redux';
import {applyFilter, changeFilter} from '../../../../redux/Filter/actions'
import {changeText, applyText} from '../../../../redux/Text/actions'
import Dashboard from './present'

const mapStateToProps = state => {
  return {
    text: state.text.searchTextChange,
    filter: state.filter.filterTypeChange
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(applyText());
      dispatch(applyFilter());
    },
    onChange: (newText) => {
      dispatch(changeText(newText));
    },
    onFilterChange: (filterType) => {
      dispatch(changeFilter(filterType));
    }
  }
}

const FilterDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default FilterDashboard
