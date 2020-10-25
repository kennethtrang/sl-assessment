import { put, fork, takeLatest } from 'redux-saga/effects';
import {
  GET_ITEM_REQUEST,
  getItemSuccess,
  getItemFail,
} from '../actions/getItem';
import itemData from '../data/Webdev_data2.json';

function* getItemRequest(action) {
  try {
    const data = itemData; // Asynchronous API Call
    yield put(getItemSuccess(data[0]));
  } catch (error) {
    yield put(getItemFail(error.message));
  }
}

function* watchGetItemRequest() {
  yield takeLatest(GET_ITEM_REQUEST, getItemRequest);
}

export default function* root() {
  yield fork(watchGetItemRequest);
}
