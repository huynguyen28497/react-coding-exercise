import { IUniversity } from "./../../utils/types/university.types";
import { IAPI } from "./../../utils/types/api.types";
import dispatchApi from "./dispatchApi";

export enum GetListUniversityKeys {
  GET_LIST_UNIVERSITY_REQ = "GET_LIST_UNIVERSITY_REQ",
  GET_LIST_UNIVERSITY_SUCCESS = "GET_LIST_UNIVERSITY_SUCCESS",
  GET_LIST_UNIVERSITY_FAILURE = "GET_LIST_UNIVERSITY_FAILURE",
}
export const getListUniversity = (
  dispatch: any,
  page = 1,
  name = "",
  limit = 10,
  country = ""
): Promise<IAPI> => {
  let params: any = {
    page,
    limit,
  };
  if (name) {
    params.name = `%${name}%`;
  }
  if (country) {
    params.country = country;
  }
  return dispatchApi(dispatch, {
    types: Object.keys(GetListUniversityKeys),
    method: "GET",
    endpoint: "/university",
    body: {
      params,
    },
  });
};

export enum DeleteUniversityKeys {
  DELETE_UNIVERSITY_REQ = "DELETE_UNIVERSITY_REQ",
  DELETE_UNIVERSITY_SUCCESS = "DELETE_UNIVERSITY_SUCCESS",
  DELETE_UNIVERSITY_FAILURE = "DELETE_UNIVERSITY_FAILURE",
}

export const deleteUniversity = (dispatch: any, id: string): Promise<IAPI> => {
  return dispatchApi(dispatch, {
    types: Object.keys(GetListUniversityKeys),
    method: "DELETE",
    endpoint: `/university/${id}`,
    body: {},
  });
};

export enum AddUniversityKeys {
  ADD_UNIVERSITY_REQ = "ADD_UNIVERSITY_REQ",
  ADD_UNIVERSITY_SUCCESS = "ADD_UNIVERSITY_SUCCESS",
  ADD_UNIVERSITY_FAILURE = "ADD_UNIVERSITY_FAILURE",
}


export const addUniversity = (dispatch: any, u: IUniversity): Promise<IAPI> => {
  return dispatchApi(dispatch, {
    types: Object.keys(AddUniversityKeys),
    method: "POST",
    endpoint: `/university`,
    body: {
      data: u,
    },
  });
};

export enum EditUniversityKeys {
  EDIT_UNIVERSITY_REQ = "EDIT_UNIVERSITY_REQ",
  EDIT_UNIVERSITY_SUCCESS = "EDIT_UNIVERSITY_SUCCESS",
  EDIT_UNIVERSITY_FAILURE = "EDIT_UNIVERSITY_FAILURE",
}


export const editUniversity = (dispatch: any, u: IUniversity): Promise<IAPI> => {
  return dispatchApi(dispatch, {
    types: Object.keys(EditUniversityKeys),
    method: "PUT",
    endpoint: `/university/${u.id}`,
    body: {
      data: u,
    },
  });
};
