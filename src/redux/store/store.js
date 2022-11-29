import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import orderReducer from "../reducer/orderReducer";
import userReducer from "../reducer/userReducer";
import scheduleReduceer from "../reducer/scheduleReducer";

import teacherReducer from "../reducer/teacherReducer";

const allReducer = combineReducers({
  user: userReducer,
  order: orderReducer,
  teachers: teacherReducer,
  schedules: scheduleReduceer,
});
const store = createStore(allReducer, applyMiddleware(thunk));

export default store;
