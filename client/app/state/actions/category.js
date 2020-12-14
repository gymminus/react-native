import * as actions from "../actionTypes";
import axios from "axios";

export const loadCategories = () => {
  return (dispatch) => {
    dispatch(loadCategoriesRequest());
    axios
      .get("http://localhost:5000/api/shop/categories")
      .then((res) => {
        dispatch(loadCategoriesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(loadCategoriesFailure(err));
      });
  };
};

export const changeCategory = (id) => {
  return (dispatch) => {
    dispatch(changeCategorySuccess(id));
  };
};

const changeCategorySuccess = (id) => ({
  type: actions.CHANGE_CATEGORY,
  payload: id,
});

const loadCategoriesRequest = () => ({
  type: actions.LOAD_CATEGORIES_REQUEST,
});

const loadCategoriesSuccess = (categories) => ({
  type: actions.LOAD_CATEGORIES_SUCCESS,
  payload: categories,
});

const loadCategoriesFailure = (error) => ({
  type: actions.LOAD_CATEGORIES_FAIL,
  payload: error,
});
