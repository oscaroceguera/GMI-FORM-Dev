import { fromJS } from 'immutable'
import {
  SET_DATA_FORM,
  EMPTY_FORM,
  SAVE_FORM_REQUEST,
  SAVE_FORM_SUCCESS,
  SAVE_FORM_FAIL
} from 'types/register'

const initialState = fromJS({
  person: {},
  savingLoading: false,
  savedPerson: false,
  savedPersonFail: null
})

function registerReducer (state = initialState, action) {
  switch (action.type) {
    case EMPTY_FORM:
      return state.merge({
        person: {}
      })
    case SET_DATA_FORM:
      return state
        .setIn(['person', action.field], action.person)
    case SAVE_FORM_REQUEST:
      return state.set('savingLoading', true)
    case SAVE_FORM_SUCCESS:
      return state.set('savedPerson', true)
        .set('savingLoading', false)
    case SAVE_FORM_FAIL:
      return state.merge({
        savingLoading: false,
        savedPersonFail: action.error
      })
    default:
      return state
  }
}

export default registerReducer
