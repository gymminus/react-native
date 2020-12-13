import { combineReducers } from "redux";

import item from "./item";
import cart from "./cart";
import category from "./category";

export default combineReducers({
  item,
  cart,
  category,
});
