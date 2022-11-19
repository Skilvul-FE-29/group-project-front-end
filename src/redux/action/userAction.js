export const USER_IN = "USER_IN";
export const USER_OUT = "USER_OUT";

export function userIn() {
    return {
        type: USER_IN,
    }
}

export function userOut() {
    return {
        type: USER_OUT
    }
}