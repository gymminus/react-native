import { combineReducers } from "redux";

import item from "./item";
import cart from "./cart";

export default combineReducers({
  item,
  cart,
});
