import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import orderReducer from "../reducer/orderReducer";
import userReducer from "../reducer/userReducer";

import teacherReducer from "../reducer/teacherReducer"

const allReducer = combineReducers({
    user: userReducer,
    order: orderReducer,
    teacher: teacherReducer,
})
const store = createStore(allReducer, applyMiddleware(thunk))

export default store;
