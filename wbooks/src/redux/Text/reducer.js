import {APPLY_TEXT} from './actions'

const initialState = {
  searchText: '',
};

export default function text(state = initialState, action) {
  switch (action.type) {
    case APPLY_TEXT:
      return {
        ...state,
        searchText: action.payload
      };
    default:
      return state;
  };
};
