import burgerReducer from "./Burger/burgerReducer";
import cakeReducer from "./Cakes/cakeReducer";
import { combineReducers } from "redux";
import { usersReducer } from "./Users/usersReducer";


const rootReducer = combineReducers({
  cake: cakeReducer,
  burger: burgerReducer,
  users: usersReducer,
});

export default rootReducer;