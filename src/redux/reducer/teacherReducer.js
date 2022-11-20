import { GET_TEACHERS } from "../action/teacherAction";

const initialState = {
  teachers: [],
};

function teacherReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TEACHERS:
      return {
        ...state,
        teachers: action.payload,
      };
    default:
      return state;
  }
}
export default teacherReducer;
