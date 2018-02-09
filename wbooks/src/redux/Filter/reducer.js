import {CHANGE_FILTER, APPLY_FILTER, filters} from './actions'

const initialState = {
  filterType: 'author',
  filterTypeChange: 'author'
};

export default function filter(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        filterTypeChange: action.payload
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
