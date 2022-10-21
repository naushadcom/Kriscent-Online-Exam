import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { adminDataReducer } from "../pages/admin/admin.reducer.js";
const rootReducer = combineReducers({
	admin: adminDataReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
