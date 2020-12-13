import * as actions from "../actionTypes";

const addItemSuccess = (item) => ({
  type: actions.ADD_TO_CART_REQUEST,
  payload: item,
});

export const removeItem = (id) => ({
  type: actions.REMOVE_FROM_CART_REQUEST,
  payload: id,
});

export const addItem = (item) => {
  return (dispatch) => {
    dispatch(addItemSuccess(item));
  };
};
