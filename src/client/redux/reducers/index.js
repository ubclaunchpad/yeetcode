import {
  SUBMIT_SUCCESS,
  SUBMIT_BEGIN,
  SUBMIT_FAILURE,
  CHANGE_CODE,
  GET_PROBLEM,
  UPDATE_OPPONENT_CODE,
  OPPONENT_SUBMIT_SUCCESS,
  OPPONENT_SUBMIT_FAILURE,
  WIN,
  OPPONENT_WIN
} from '../actions';

const initialState = {
  submitting: false,
  totalTestCases: 0,
  testCasesPassed: 0,
  error: undefined,
  result: undefined,
  code: "",
  opponentCode: "",
  problem: {
    name: undefined,
    description: undefined,
    stub: undefined
  },
  history: []
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case SUBMIT_BEGIN: {
      return {
        ...state,
        submitting: true,
      }
    }

    case SUBMIT_SUCCESS: {
      let {input, actualOutput, expectedOutput} = action.data.errors[0];
      let {numTestCasesTotal, numTestCasesPassed} = action.data;
      let item = `${numTestCasesPassed} / ${numTestCasesTotal} passed`;
      let item2 = `Test case failed: ${input}, actual output: ${actualOutput}, expected output: ${expectedOutput}`;

      return {
        ...state,
        history: [...state.history, item, item2]
      }
    }
    
    case OPPONENT_SUBMIT_SUCCESS: {
      let {numTestCasesTotal, numTestCasesPassed} = action.data;
      let item = `OPPONENT RAN CODE: ${numTestCasesPassed} / ${numTestCasesTotal} passed`;
      return {
        ...state,
        history: [...state.history, item]
      }
    }

    case SUBMIT_FAILURE: {
      let error = action.error;
      let item = `ERROR RUNNING CODE: ${error}`;
      return {
        ...state,
        history: [...state.history, item]
      }
    }

    case OPPONENT_SUBMIT_FAILURE: {
      let item = `Opponent encountered an error running code LOL`;
      return {
        ...state,
        history: [...state.history, item]
      }
    }

    case WIN: {
      let item = `ALL TEST CASES PASSED! YOU WON!!!`;
      return {
        ...state,
        history: [...state.history, item]
      }
    }

    case OPPONENT_WIN: {
      let item = `Opponent won. You suck ass.`;
      alert("you lost LMAO")
      return {
        ...state,
        history: [...state.history, item]
      }
    }

    case CHANGE_CODE: 
      return {
        ...state,
        code: action.code
      }

    case GET_PROBLEM:
      return {
        ...state,
        problem: action.problem,
        code: action.problem.stub
      }    

    case UPDATE_OPPONENT_CODE:
    return {
      ...state,
      opponentCode: action.code
    }

    default:
      return state;
  }
}

export default rootReducer;