import { CHOOSE_TEACHER, POST_ORDER } from "../action/orderAction";

const initialState = {
    teacher: JSON.parse(localStorage.getItem('choose-teacher')),
    order: JSON.parse(localStorage.getItem('data-order'))
}

function orderReducer(state = initialState, action) {
    switch(action.type) {
        case CHOOSE_TEACHER: 
            localStorage.setItem('choose-teacher', JSON.stringify(action.teacher))
            return {
                ...state,
                teacher: JSON.parse(localStorage.getItem('choose-teacher')),
            }
        case POST_ORDER:
            localStorage.setItem('data-order', action.dataOrder)
            return {
                ...state,
                order: JSON.parse(localStorage.getItem('data-order'))
            }
        default: return state;
    }
}


export default orderReducer