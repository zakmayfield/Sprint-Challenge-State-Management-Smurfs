
import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE
} from '../actions/fetchSmurfs';

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

    default:
      return state
  }
}