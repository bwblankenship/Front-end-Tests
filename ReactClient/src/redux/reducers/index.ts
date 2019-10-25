import * as Assets from "./assetsReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  assets: Assets.reducer
});

export default rootReducers;
