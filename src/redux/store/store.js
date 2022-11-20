import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import orderReducer from "../reducer/orderReducer";
import userReducer from "../reducer/userReducer";

const allReducer = combineReducers({
    user: userReducer,
    order: orderReducer
})
const store = createStore(allReducer, applyMiddleware(thunk))

export default store