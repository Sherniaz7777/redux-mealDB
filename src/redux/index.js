import { applyMiddleware, combineReducers, createStore } from "redux";
import mealDbReducer from "./slice/mealDBslice";
import { thunk } from "redux-thunk";
import mealIDReducer from "./mealIDslice";






const rootReducer = combineReducers({
  mealDB: mealDbReducer,
  mealID: mealIDReducer
});












const store = createStore(rootReducer, applyMiddleware(thunk))
export default store