import { connect } from 'react-redux';
import {applyFilter, filterTitle, filterAuthor} from '../../../../redux/Filter/actions'
import {changeText, applyText} from '../../../../redux/Text/actions'
import Dashboard from './present'

const mapStateToProps = state => {
  return {
    text: state.text.searchTextChange,
    filter: state.filter.filterTypeChange
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(applyText());
      dispatch(applyFilter());
    },
    onChange: (newText) => {
      dispatch(changeText(newText));
    },
    onFilterChange: (filterType) => {
      if (filterType === 'author') {
        dispatch(filterAuthor());
      } else {
        dispatch(filterTitle());
      }
    }
  }
}

const FilterDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default FilterDashboard
