import { call, put, select } from 'redux-saga/effects'
import { takeLatest, delay } from 'redux-saga'

import { SAVE_FORM_REQUEST, FETCH_REGISTRIES_REQUEST } from 'types/register'
import { actions as ACT } from 'actions/register'
import { savePerson, fetchRegistries } from 'services/register'

export function* saveFormSaga () {
  const person = yield select(state => state.register.toJS().person)
  try {
    yield call(savePerson, person)
    yield put(ACT.saveFormSuccess())
  } catch (e) {
    yield put(ACT.saveFormFail(e))
  }
}

export function* fetchRegistriesSaga () {
  yield delay(2000)
  try {
    const registries = yield call(fetchRegistries)
    yield put(ACT.fetchRegistriesSuccess(registries))
  } catch (e) {
    yield put(ACT.fetchRegistriesFail(e))
  }
}

export default function* rootSaga () {
  yield [
    takeLatest(SAVE_FORM_REQUEST, saveFormSaga),
    takeLatest(FETCH_REGISTRIES_REQUEST, fetchRegistriesSaga)
  ]
}
