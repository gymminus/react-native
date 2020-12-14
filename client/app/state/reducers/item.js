import * as actions from "../actionTypes";

const initialState = {
  items: [],
};

export default function itemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.LOAD_ITEMS_SUCCESS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
}
