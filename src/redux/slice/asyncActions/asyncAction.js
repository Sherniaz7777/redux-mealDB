import axios from "axios";
import {
  ADD_COUNTRY_REJECTED,
  ADD_COUNTRY_STARTED,
  ADD_COUNTRY_SUCCESS,
} from "../types/types";

const getMealDB = () => {
  return async (dispatch) => {
    dispatch(addCountryStarted());
    try {
      const { data } = await axios(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=b`
      );
      dispatch(addCountrySuccess(data.meals));
    } catch (error) {
      dispatch(addCountryRejected(error));
    }
  };
};

export default getMealDB;

const addCountryStarted = () => ({ type: ADD_COUNTRY_STARTED });
const addCountrySuccess = (data) => ({
  type: ADD_COUNTRY_SUCCESS,
  payload: data,
});
const addCountryRejected = () => ({
  type: ADD_COUNTRY_REJECTED,
  payload: error,
});
