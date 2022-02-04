import { combineReducers } from "redux";

import alertReducer from "./combined/alert.reducer";

const rootReducer = combineReducers({
    alertReducer
})

export default rootReducer;