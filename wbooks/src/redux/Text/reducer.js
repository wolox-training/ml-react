import {CHANGE_TEXT, APPLY_TEXT} from './actions'

const initialState = {
  searchText: '',
  searchTextChange: ''
};

export default function text(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        searchTextChange: action.payload
      };
    case APPLY_TEXT:
      return {
        ...state,
        searchText: state.searchTextChange
      };
    default:
      return state;
  };
};
