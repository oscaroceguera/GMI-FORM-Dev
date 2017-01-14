import { call, put, select, fork } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import { emptyForm } from 'actions/register'


export function* mySaga () {
  console.log('mi saga');
}

export default function* rootSaga () {
  yield [
    mySaga()
  ]
}
