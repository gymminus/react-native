import * as actions from "../actionTypes";
import axios from "axios";

export const loadItems = (query, category) => {
  return (dispatch) => {
    dispatch(loadItemsRequest());
    axios
      .get(
        `http://localhost:5000/api/shop/items?query=${query}&category=${category}`
      )
      .then((res) => {
        dispatch(loadItemsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(loadItemsFailure(err));
      });
  };
};

const loadItemsRequest = () => ({
  type: actions.LOAD_ITEMS_REQUEST,
});

const loadItemsSuccess = (items) => ({
  type: actions.LOAD_ITEMS_SUCCESS,
  payload: items,
});

const loadItemsFailure = (error) => ({
  type: actions.LOAD_ITEMS_FAIL,
  payload: error,
});
