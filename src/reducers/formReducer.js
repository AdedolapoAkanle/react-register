import { BIO_DATA } from "../actions/types";

const INITIAL_STATE = {
  bioDataState: {
    id: "",
    name: "",
    email: "",
    address: "",
    age: "",
    gender: "",
    arr: [],
    searchType: "",
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
