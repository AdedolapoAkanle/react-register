import { FIRST_NAME, LAST_NAME } from "../actions/types"

const INITIAL_STATE = {
    firstName: '',
    lastName: ''
}

const formReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FIRST_NAME:
            return {
                ...state, firstName: action.payload
            };
        case LAST_NAME:
            return {
                ...state, lastName: action.payload
            };
            default:
                return state;
    }
}

export default formReducer;