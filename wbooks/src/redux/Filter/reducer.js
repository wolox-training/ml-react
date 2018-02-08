import {FILTER_TITLE, FILTER_AUTHOR, APPLY_FILTER, filters} from './actions'

const initialState = {
  filterType: 'author',
  filterTypeChange: 'author'
};

export default function filter(state = initialState, action) {
  switch (action.type) {
    case FILTER_TITLE:
      return {
        ...state,
        filterTypeChange: filters.TITLE
      };
    case FILTER_AUTHOR:
      return {
        ...state,
        filterTypeChange: filters.AUTHOR
      };
    case APPLY_FILTER:
      return {
        ...state,
        filterType: state.filterTypeChange
      };
    default:
      return state;
  }
};
