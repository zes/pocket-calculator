import { CLEAR_OUTPUTS, GET_RESULT, UPDATE_OPERATION } from './actions';
import { calculate } from '../services/calculator';

export const initialState = {
  operation: '',
  result: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_OUTPUTS:
      return { ...initialState };
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
