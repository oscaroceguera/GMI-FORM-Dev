import { fromJS, List } from 'immutable'
import {
  SET_DATA_FORM,
  EMPTY_FORM,
  SAVE_FORM_REQUEST,
  SAVE_FORM_SUCCESS,
  SAVE_FORM_FAIL,
  FETCH_REGISTRIES_REQUEST,
  FETCH_REGISTRIES_SUCCESS,
  FETCH_REGISTRIES_FAIL
} from 'types/register'

const initialState = fromJS({
  person: {},
  savingLoading: false,
  savedPerson: true,
  savedPersonFail: false,
  people: [],
  peopleLoading: false,
  peopleFail: null
})

function registerReducer (state = initialState, action) {
  switch (action.type) {
    case EMPTY_FORM:
      return state.merge({
        person: {},
        savingLoading: false,
        savedPerson: false,
        savedPersonFail: null
      })
    case SET_DATA_FORM:
      return state
        .setIn(['person', action.field], action.person)
    case SAVE_FORM_REQUEST:
      return state.set('savingLoading', true)
    case SAVE_FORM_SUCCESS:
      return state.merge({
        savedPerson: true,
        savingLoading: false
      })
    case SAVE_FORM_FAIL:
      return state.merge({
        savingLoading: false,
        savedPersonFail: action.error
      })
    case FETCH_REGISTRIES_REQUEST:
      return state.set('peopleLoading', true)
    case FETCH_REGISTRIES_SUCCESS:
      return state.set('people', List.of(...action.regitries))
        .set('peopleLoading', false)
    case FETCH_REGISTRIES_FAIL:
      return state.merge({
        peopleFail: action.error,
        peopleLoading: false
      })
    default:
      return state
  }
}

export default registerReducer
