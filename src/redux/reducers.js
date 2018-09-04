import { UPDATE_OPERATION } from './actions';

const initialState = {
  operation: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
