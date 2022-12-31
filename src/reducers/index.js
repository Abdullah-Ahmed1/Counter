//  we can connect only one reducer to the store, so we have to combine all reducers
//  into one root reucer using redux

import changeNumber from "./IncDec";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeNumber
}) 
export default rootReducer