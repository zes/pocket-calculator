export const CLEAR_OUTPUTS = 'CLEAR_OUTPUTS';
export const GET_RESULT = 'GET_RESULT';
export const TOGGLE_DISPLAY_LIST = 'TOGGLE_DISPLAY_LIST';
export const UPDATE_OPERATION = 'UPDATE_OPERATION';

export const clearLabels = () => ({
  type: CLEAR_OUTPUTS,
});

export const getResult = () => ({
  type: GET_RESULT,
});

export const toggleDisplayList = () => ({
  type: TOGGLE_DISPLAY_LIST,
});

export const updateOperation = char => ({
  char,
  type: UPDATE_OPERATION,
});
