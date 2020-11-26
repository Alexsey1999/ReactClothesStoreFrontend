import { all } from 'redux-saga/effects'

import { watchGoodsSaga } from './goodsSagas'

export default function* rootSaga() {
  yield all([watchGoodsSaga()])
}
