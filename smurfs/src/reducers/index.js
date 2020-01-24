
import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE
} from '../actions/fetchSmurfs';

import {
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAILURE
} from '../actions/postSmurf';

const initialState = {
  isLoading: false,
  error: '',
  smurfs: []
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_SMURF_START:
      return{
        ...state,
        isLoading: true,
        error: ''
      }
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        smurfs: action.payload
      }
    case FETCH_SMURF_FAILURE:
      return {
        error: `ERROR: ${action.payload}`,
        isLoading: false
      }


    case 'POST_SMURF_STARTx':
      return{
        ...state
      }
    case 'POST_SMURF_SUCCESSx':
      return{
        ...state,
        smurfs: action.payload,
        error: ''
      }
    case 'POST_SMURF_FAILUREx':
      return{
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}