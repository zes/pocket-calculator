export const CLEAR_OUTPUTS = 'CLEAR_OUTPUTS';
export const GET_RESULT = 'GET_RESULT';
export const MONKEY_BUSINESS = 'MONKEY_BUSINESS';
export const TOGGLE_DISPLAY_LIST = 'TOGGLE_DISPLAY_LIST';
export const TOGGLE_MONKEY_BUSINESS = 'TOGGLE_MONKEY_BUSINESS';
export const UPDATE_OPERATION = 'UPDATE_OPERATION';

export const clearLabels = () => ({
  type: CLEAR_OUTPUTS,
});

export const getResult = () => ({
  type: GET_RESULT,
});

export const monkeyBusiness = isMonkeyBusiness => ({
  isMonkeyBusiness,
  type: MONKEY_BUSINESS,
});

export const toggleDisplayList = () => ({
  type: TOGGLE_DISPLAY_LIST,
});

export const toggleMonkeyBusiness = () => ({
  type: TOGGLE_MONKEY_BUSINESS,
});

export const updateOperation = char => ({
  char,
  type: UPDATE_OPERATION,
});
