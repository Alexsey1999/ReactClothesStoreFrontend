import { all } from 'redux-saga/effects'

import { watchGoodsSaga } from './goodsSagas'
import { watchProductSaga } from './productSaga'

export default function* rootSaga() {
  yield all([watchGoodsSaga(), watchProductSaga()])
}
