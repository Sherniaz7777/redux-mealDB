import axios from "axios";
import { ADD_COUNTRY_REJECTE, ADD_COUNTRY_STARTE, ADD_COUNTRY_SUCCES } from "../types/types";

const getMealID = (id) => {
  return async (dispatch) => {
    dispatch(addCountryStarted());
    try {
      const { data } = await axios(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      dispatch(addCountrySuccess(data.meals));
    } catch (error) {
      dispatch(addCountryRejected(error));
    }
  };
};

export default getMealID;

const addCountryStarted = () => ({ type: ADD_COUNTRY_STARTE });
const addCountrySuccess = (data) => ({
  type: ADD_COUNTRY_SUCCES,
  payload: data,
});
const addCountryRejected = () => ({
  type: ADD_COUNTRY_REJECTE,
  payload: error,
});
