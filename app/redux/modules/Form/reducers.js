import { fromJS } from 'immutable'
import {
  SET_DATA_FORM,
  EMPTY_FORM,
  // SAVE_FORM_REQUEST,
  // SAVE_FORM_SUCCESS,
  // SAVE_FORM_FAIL
} from './constants'

const initialState = fromJS({
  person: {},
  // personLoading: false,
  // personFail: null
})

function registerReducer (state = initialState, action) {
  switch (action.type) {
    case EMPTY_FORM:
      return state.merge({
        person: {}
      })
    case SET_DATA_FORM:
      return state
        .set('personLoading', false)
        .setIn(['person', action.field], action.person)
    // case SAVE_FORM_REQUEST:
    //   return state.set('personLoading', true)
    // case SAVE_FORM_FAIL:
    //   return state.merge({
    //     personLoading: true,
    //     personFail: action.error
    //   })
    default:
      return state
  }
}

export default registerReducer
