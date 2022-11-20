import { USER_IN, USER_OUT } from "../action/userAction";

const initialState = {
    user: JSON.parse(localStorage.getItem("logged_user")),
    isLogin: JSON.parse(localStorage.getItem("isLoggedIn")),
}

function orderReducer(state = initialState, action) {
    switch(action.type) {
        case USER_IN:
            return {
                user: JSON.parse(localStorage.getItem("logged_user")),
                isLogin: JSON.parse(localStorage.getItem("isLoggedIn"))
            }
        case USER_OUT:
            return {
                user: {},
                isLogin: false
            }
        default: return state;
    }
}


export default orderReducer