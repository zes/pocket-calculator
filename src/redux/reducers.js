import { GET_RESULT, UPDATE_OPERATION } from './actions';
import { calculate } from '../services/calculator';

const initialState = {
  operation: '',
  result: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESULT:
      return {
        ...state,
        result: calculate(state.operation),
      };
    case UPDATE_OPERATION:
      return {
        ...state,
        operation: `${state.operation}${action.char}`,
      };
    default:
      return state;
  }
};

export default rootReducer;
