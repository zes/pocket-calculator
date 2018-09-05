export const GET_RESULT = 'GET_RESULT';
export const UPDATE_OPERATION = 'UPDATE_OPERATION';

export const getResult = () => ({
  type: GET_RESULT,
});

export const updateOperation = char => ({
  char,
  type: UPDATE_OPERATION,
});
