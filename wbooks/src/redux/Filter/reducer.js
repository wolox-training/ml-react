import {APPLY_FILTER} from './actions'

const initialState = {
  filterType:'author'
};

export default function filter(state = initialState, action) {
  switch (action.type) {
    case APPLY_FILTER:
      return {
        ...state,
        filterType: action.payload
      };
    default:
      return state;
  }
};
