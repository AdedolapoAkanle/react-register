import { BIO_DATA } from "../actions/types";

const INITIAL_STATE = {
  bioDataState: {
    name: "",
    email: "",
    address: "",
    age: "",
    gender: "",
  },
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BIO_DATA:
      return {
        ...state,
        bioDataState: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
