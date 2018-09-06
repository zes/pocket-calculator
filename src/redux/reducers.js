import {
  CLEAR_OUTPUTS,
  GET_RESULT,
  TOGGLE_DISPLAY_LIST,
  TOGGLE_MONKEY_BUSINESS,
  UPDATE_OPERATION,
} from './actions';
import { calculate } from '../services/calculator';

export const initialState = {
  displayList: false,
  isMonkeyBusiness: false,
  operation: '',
  operationsList: [],
  result: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_OUTPUTS:
      return { ...state, operation: '', result: '' };
    case GET_RESULT:
      return {
        ...state,
        result: calculate(state.operation),
        operationsList: [
          ...state.operationsList,
          { operation: state.operation, result: calculate(state.operation) },
        ],
      };
    case TOGGLE_DISPLAY_LIST:
      return { ...state, displayList: !state.displayList };
    case TOGGLE_MONKEY_BUSINESS:
      return { ...state, isMonkeyBusiness: !state.isMonkeyBusiness };
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
