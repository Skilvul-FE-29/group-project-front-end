import { USER_IN, USER_OUT } from "../action/userAction";

const initialState = {
    user: {},
    isLogin: false,
}

function userReducer(state = initialState, action) {
    switch(action.type) {
        case USER_IN:
            return {
                user: action.user,
                isLogin: true

            }
        case USER_OUT:
            return {
                user: {},
                isLogin: false
            }
        default: return state;
    }
}

export default userReducer