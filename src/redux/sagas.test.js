import sinon from 'sinon';
import { expectSaga } from 'redux-saga-test-plan';
import rootSaga from './sagas';
import {
  clearLabels,
  getResult,
  monkeyBusiness as monkeyBusinessAction,
  toggleMonkeyBusiness,
  updateOperation,
} from './actions';
import * as calculatorService from '../services/calculator';

describe('[Sagas]', () => {
  describe('monkeyBusinessSaga', () => {
    it('should toggle and do monkey business', async () => {
      const isMonkeyBusiness = true;
      const operation = '45+78';
      sinon.stub(calculatorService, 'getRandomOperation').returns(operation);

      await expectSaga(rootSaga)
        .dispatch(monkeyBusinessAction(isMonkeyBusiness))
        .put(toggleMonkeyBusiness())
        .put(updateOperation(operation))
        .put(getResult())
        .put(clearLabels())
        .run(1000);
    });

    it('should only toggle', async () => {
      const isMonkeyBusiness = false;

      await expectSaga(rootSaga)
        .dispatch(monkeyBusinessAction(isMonkeyBusiness))
        .put(toggleMonkeyBusiness())
        .run();
    });
  });
});
