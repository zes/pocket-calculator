import reducer, { initialState } from './reducers';
import { CLEAR_OUTPUTS, GET_RESULT, UPDATE_OPERATION } from './actions';

describe('Reducers', () => {
  it('should return the initialState if no state is given', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should return the initialState if no action is given', () => {
    expect(reducer(initialState, { type: 'DUMMY_ACTION' })).toEqual(
      initialState,
    );
  });

  it('should handle CLEAR_LABELS', () => {
    expect(
      reducer(initialState, {
        type: CLEAR_OUTPUTS,
      }),
    ).toEqual({
      ...initialState,
    });
  });

  it('should handle GET_RESULT', () => {
    const state = {
      operation: '45+78',
      result: '',
    };
    expect(
      reducer(state, {
        type: GET_RESULT,
      }),
    ).toEqual({
      ...state,
      result: '123',
    });
  });

  it('should handle UPDATE_OPERATION', () => {
    const state = {
      operation: '45',
      result: '',
    };
    expect(
      reducer(state, {
        char: '+',
        type: UPDATE_OPERATION,
      }),
    ).toEqual({
      ...state,
      operation: '45+',
    });
  });
});
