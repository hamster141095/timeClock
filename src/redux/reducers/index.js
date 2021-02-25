import { combineReducers } from "redux";
import clockReducer from "./clockReducer";

const appReducers = combineReducers({
    clockReducer,
});

export default appReducers;
