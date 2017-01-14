import { call, put, select } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'

import { SAVE_FORM_REQUEST } from 'types/register'
import {saveFormSuccess, saveFormFail} from 'actions/register'
import { savePerson } from 'services/register'

export function* mySaga () {
  const person = yield select(state => state.register.toJS().person)
  try {
    yield call(savePerson, person)
    yield put(saveFormSuccess())
  } catch (e) {
    yield put(saveFormFail(e))
  }
}

export default function* rootSaga () {
  yield [
    takeLatest(SAVE_FORM_REQUEST, mySaga)
  ]
}
