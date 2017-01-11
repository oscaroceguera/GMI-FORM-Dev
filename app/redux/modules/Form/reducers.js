import { fromJS, List } from 'immutable'
import {
  SAVE_FORM_REQUEST,
  SAVE_FORM_SUCCESS,
  SAVE_FORM_FAIL
} from './constants'

const initialState = fromJS({
  register: {},
  registerLoading: false,
  registerFail: null
})

function registerReducer (state = initialState, action) {
  switch (action.type) {
    case SAVE_FORM_REQUEST:
      return state.set('registerLoading', true)
    case SAVE_FORM_SUCCESS:
      return state
        .set('registerLoading', false)
        .set('register', action.registerData)
    case SAVE_FORM_FAIL:
      return state.merge({
        registerLoading: true,
        registerFail: action.error
      })
    default:
      return state
  }
}

export default registerReducer
