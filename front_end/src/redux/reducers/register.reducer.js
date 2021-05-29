import {
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  REGISTRER_FETCING,
} from "../../constans";

const initialState = {
  isFetching: false,
  isError: false,
  status: false,
  message: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTRER_FETCING:
      return {
        ...state,
        isFetching: true,
        isError: false,
        status: false,
        message: "",
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        status: payload.status,
        message: payload.message,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        isFetching: false,
        isError: true,
        status: payload.status,
        message: payload.message,
      };

    default:
      return state;
  }
};
