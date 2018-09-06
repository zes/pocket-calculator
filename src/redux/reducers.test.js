import reducer, { initialState } from './reducers';
import {
  CLEAR_OUTPUTS,
  GET_RESULT,
  TOGGLE_DISPLAY_LIST,
  TOGGLE_MONKEY_BUSINESS,
  UPDATE_OPERATION,
} from './actions';

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
      operationsList: [{ operation: '4+7', result: '11' }],
      result: '',
    };
    expect(
      reducer(state, {
        type: GET_RESULT,
      }),
    ).toEqual({
      ...state,
      operationsList: [
        { operation: '4+7', result: '11' },
        { operation: '45+78', result: '123' },
      ],
      result: '123',
    });
  });

  it('should handle TOGGLE_DISPLAY_LIST', () => {
    expect(
      reducer(initialState, {
        type: TOGGLE_DISPLAY_LIST,
      }),
    ).toEqual({
      ...initialState,
      displayList: true,
    });
  });

  it('should handle TOGGLE_MONKEY_BUSINESS', () => {
    expect(
      reducer(initialState, {
        type: TOGGLE_MONKEY_BUSINESS,
      }),
    ).toEqual({
      ...initialState,
      isMonkeyBusiness: true,
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
