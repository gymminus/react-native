import * as actions from "../actionTypes";

const initialState = {
  categories: [],
  currentCategory: "",
};

export default function categoryReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.LOAD_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: [
          ...action.payload,
          { pavadinimas: "Visos", id_E_Kategorija: "" },
        ],
      };
    case actions.CHANGE_CATEGORY:
      return { ...state, currentCategory: action.payload };
    default:
      return state;
  }
}
