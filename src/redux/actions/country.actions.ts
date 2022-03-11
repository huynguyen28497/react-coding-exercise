import { IAPI } from "utils/types/api.types";
import dispatchApi from "./dispatchApi";

export enum GetCountryKeys {
  GET_COUNTRY_REQ = "GET_COUNTRY_REQ",
  GET_COUNTRY_SUCCESS = "GET_COUNTRY_SUCCESS",
  GET_COUNTRY_FAILURE = "GET_COUNTRY_FAILURE",
}
export const getCountries = (dispatch: any): Promise<IAPI> =>
  dispatchApi(dispatch, {
    types: Object.keys(GetCountryKeys),
    method: "GET",
    endpoint: "/country",
    body: {
      params: {
        limit: 300,
      },
    },
  });
