import { takeEvery, put, call } from 'redux-saga/effects'
import { PRODUCT_ITEM_REQUEST, setProductItem } from '../store/product/actions'

import axios from '../axios'

function fetchProduct(id: string, category: string) {
  return axios.get(`/product/${id}?category=${category}`)
}

function* fetchProductSaga(action: any) {
  try {
    const response = yield call(() => fetchProduct(action.id, action.category))
    const data = response.data
    yield put(setProductItem(data))
  } catch (error) {
    console.error(error)
  }
}

export function* watchProductSaga() {
  yield takeEvery(PRODUCT_ITEM_REQUEST, fetchProductSaga)
}
