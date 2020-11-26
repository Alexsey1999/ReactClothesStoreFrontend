import { takeEvery, put, call } from 'redux-saga/effects'
import { FETCH_GOODS_REQUEST, setFetchedGoods } from '../store/goods/actions'
import { useSelector } from 'react-redux'

import axios from '../axios'

function fetchGoods(linkurl: string) {
  return axios.get(`/category/${linkurl}`)
}

function* fetchGoodsSaga(action: any) {
  try {
    const response = yield call(() => fetchGoods(action.linkurl))
    const data = response.data
    console.log(data)
    // yield put(setFetchedGoods(data))
  } catch (error) {
    console.error(error)
  }
}

export function* watchGoodsSaga() {
  yield takeEvery(FETCH_GOODS_REQUEST, fetchGoodsSaga)
}
