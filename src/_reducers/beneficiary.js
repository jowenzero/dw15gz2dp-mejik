import { GET_BENEFICIARIES } from "../constants/action-types";

const initialState = {
  data: [],
  loading: true,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_BENEFICIARIES}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_BENEFICIARIES}_FULFILLED`:
      if (action.payload) {
        return {
          ...state,
          data: action.payload.data,
          loading: false,
        };
      }
      else {
        return {
          ...state,
          loading: false,
        };
      }
    case `${GET_BENEFICIARIES}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;