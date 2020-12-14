import axios from "axios";
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

export const makeOrder = (order, price) => {
  return (dispatch) => {
    dispatch(makeOrderRequest);
    axios
      .post(`http://localhost:5000/api/shop/order?price=${price}`, {
        order: order,
      })
      .then(() => {
        dispatch(makeOrderSuccess());
      })
      .catch((e) => {
        dispatch(makeOrderFailure);
      });
  };
};

const makeOrderRequest = () => ({
  type: actions.MAKE_ORDER_REQUEST,
});

const makeOrderSuccess = () => ({
  type: actions.MAKE_ORDER_SUCCESS,
});

const makeOrderFailure = (error) => ({
  type: actions.MAKE_ORDER_FAIL,
  payload: error,
});
