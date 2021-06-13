import { GET_URL_DETAILS } from './type'

export const getUrlDetails = (list) => dispatch => {
    dispatch({ type: GET_URL_DETAILS, payload: list });
   }