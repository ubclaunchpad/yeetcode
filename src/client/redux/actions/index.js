const axios = require('axios'); 

export const SUBMIT_BEGIN = "SUBMIT_BEGIN";
export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS";
export const SUBMIT_FAILURE = "SUBMIT_FAILURE";

export const CHANGE_CODE = "socket/CHANGE_CODE";
export const SUBMIT_CODE = "socket/SUBMIT_CODE";

export const GET_PROBLEM = "GET_PROBLEM";
export const UPDATE_OPPONENT_CODE = "UPDATE_OPPONENT_CODE";

export const OPPONENT_SUBMIT_SUCCESS = "OPPONENT_SUBMIT_SUCCESS";
export const OPPONENT_SUBMIT_FAILURE = "OPPONENT_SUBMIT_FAILURE";

export const WIN = "WIN";
export const OPPONENT_WIN = "OPPONENT_WIN";

// export const submit = () => {
//   return (dispatch, getState) => {
//     dispatch(submitBegin());
//     return axios.post('/api/runCode/', {
//       code: getState().code
//     })
//     .then(res => {
//       dispatch(submitSuccess(res));
//       return res;
//     })
//     .catch(error => dispatch(submitFailure(error)));
//   };
// }
export const submit = () => {
  return (dispatch, getState) => {
    const {code} = getState();

    dispatch(submitCode(code));
  }
}

export const submitCode = code => ({
  type: SUBMIT_CODE,
  code
});

export const submitBegin = code => ({
  type: SUBMIT_BEGIN,
  code
});

export const submitSuccess = res => ({
  type: SUBMIT_SUCCESS,
  res: res.data
});

export const submitFailure = error => ({
  type: SUBMIT_FAILURE,
  error
});

export const changeCode = code => ({
  type: CHANGE_CODE,
  code
});