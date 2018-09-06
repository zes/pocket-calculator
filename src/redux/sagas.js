import { put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
  MONKEY_BUSINESS,
  clearLabels,
  getResult,
  toggleMonkeyBusiness,
  updateOperation,
} from './actions';
import { getRandomOperation } from '../services/calculator';

function* monkeyBusinessSaga({ isMonkeyBusiness }) {
  yield put(toggleMonkeyBusiness());
  while (isMonkeyBusiness) {
    const operation = getRandomOperation();
    yield put(updateOperation(operation));
    yield delay(500);
    yield put(getResult());
    yield delay(500);
    yield put(clearLabels());
    yield delay(500);
  }
}

function* rootSaga() {
  yield takeLatest(MONKEY_BUSINESS, monkeyBusinessSaga);
}

export default rootSaga;
