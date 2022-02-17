import { combineReducers } from "redux";

import alertReducer from "./combined/alert.reducer";
import authReducer from "./combined/auth.reducer";

const rootReducer = combineReducers({
    alertReducer,
    authReducer
})

export default rootReducer;