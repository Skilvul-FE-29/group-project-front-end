import axios from "axios"

export const POST_ORDER = "POST_ORDER"
export const GET_ORDER = "GET_ORDER"
export const CHOOSE_TEACHER = "CHOOSE_TEACHER"

export function chooseTeacher(teacher) {
    return {
        type: CHOOSE_TEACHER,
        teacher
    }
}

export function postOrder(dataOrder) {
    return {
        type: POST_ORDER,
        dataOrder
    }
}

// export function userIn() {
//     return {
//         type: USER_IN,
//     }
// }

// export function userOut() {
//     return {
//         type: USER_OUT
//     }
// }

// export const postOrder = (order) => {
//     return async (dispatch) => {
//         axios.post('https://634a01375df95285140a732e.mockapi.io/users', order).then(res => {
//             console.log(res);
//             console.log(res.data);
//             dispatch(userIn(res.data))
//             navigation('/')
//         })
//     }
// }

// export const getOrder = () => {
//     return async (dispatch) => {
//         // ambil data API, ubah isi data todos, loading menjadi false
//         const result = axios.get("https://634a01375df95285140a732e.mockapi.io/todo");
//         dispatch(storeData(result.data))
//     }
// }