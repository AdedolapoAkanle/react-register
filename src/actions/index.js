import { FIRST_NAME, LAST_NAME } from "./types"

export const firstNameAction = (param) => {
    return {
        type: FIRST_NAME,
        payload: param
    }
}

export const lastNameAction = (param) => {
    return {
        type: LAST_NAME,
        payload: param
    }
}