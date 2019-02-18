import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import cartReducer from "../features/cart/reducer";
import productReducer from "../features/product-listing/reducer";
import SubmitReducer from "../features/order/reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  form: formReducer,
  order: SubmitReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
