import {
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  REGISTRER_FETCING,
} from "../../constans";
import { httpClient } from "../../utils/HttpClient";

export const setStateToFetcing = () => ({
  type: REGISTRER_FETCING,
});
export const setStateToSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
});
export const setStateToFailed = (payload) => ({
  type: REGISTER_FAILED,
  payload,
});

export const register = (user, history) => {
  return async (dispatch) => {
    dispatch(setStateToFetcing());
    const result = await httpClient.post("/register", user);
    if (result.data.status == true) {
      dispatch(setStateToSuccess(result.data));
        history.push("/")
    } else {
      dispatch(setStateToFailed(result.data));
    }
  };
};
