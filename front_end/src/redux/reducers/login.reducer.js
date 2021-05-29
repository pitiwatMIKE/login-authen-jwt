import { LOGIN_FAILED, LOGIN_FETCHING, LOGIN_SUCCESS } from "../../constans";

const initialState = {
  isFetching: false,
  isError: false,
  status: false,
  message: "",
  token: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_FETCHING:
      return {
        ...state,
        isFetching: true,
        isError: false,
        status: false,
        message: "",
        token: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        status: payload.status,
        message: payload.message,
        token: payload.token,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isFetching: false,
        isError: true,
        status: payload.status,
        message: payload.message,
        token: null,
      };
    default:
      return state;
  }
};
