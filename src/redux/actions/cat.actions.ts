import { ICat } from "utils/types/cat.types";
import dispatchApi from "./dispatchApi";

export enum GetCatFactKeys {
  GET_CAT_FACT_REQ = "GET_CAT_FACT_REQ",
  GET_CAT_FACT_SUCCESS = "GET_CAT_FACT_SUCCESS",
  GET_CAT_FACT_FAILURE = "GET_CAT_FACT_FAILURE",
}
export const getCatFact = (dispatch: any): Promise<ICat> =>
  dispatchApi(dispatch, {
    types: Object.keys(GetCatFactKeys),
    method: "GET",
    endpoint: "/",
    body: {
    },
  });
