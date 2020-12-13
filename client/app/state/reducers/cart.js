import * as actions from "../actionTypes";

const initialState = {
  items: [],
};

export default function cartReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.ADD_TO_CART_REQUEST:
      const itemToAdd = action.payload;
      let existingItem = state.items.find(
        (item) => item.id_E_Preke === itemToAdd.id_E_Preke
      );
      return {
        ...state,
        items: existingItem
          ? state.items.map((item) => {
              if (item.id_E_Preke === itemToAdd.id_E_Preke) {
                return { ...item, count: item.count + 1 };
              } else {
                return item;
              }
            })
          : [...state.items, { ...itemToAdd, count: 1 }],
      };
    case actions.REMOVE_FROM_CART_REQUEST:
      const id = action.payload;
      let shouldRemove = state.items.find(
        (item) => item.id_E_Preke === id && item.count === 1
      );
      return {
        ...state,
        items: shouldRemove
          ? state.items.filter((item) => item.id_E_Preke !== id)
          : state.items.map((item) => {
              if (item.id_E_Preke === id) {
                return { ...item, count: item.count - 1 };
              } else {
                return item;
              }
            }),
      };
    default:
      return state;
  }
}
