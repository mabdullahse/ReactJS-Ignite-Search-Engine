import { combineReducers } from "redux";
import gamesReducer from "./gameReducer";
import loadDetailReducer from "./loadDetailReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  detail: loadDetailReducer,
});

export default rootReducer;
