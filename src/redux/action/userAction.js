export const USER_IN = "USER_IN";
export const USER_OUT = "USER_OUT";

export function userIn(userData) {
    return {
        type: USER_IN,
        user: userData
    }
}

export function userOut() {
    return {
        type: USER_OUT
    }
}