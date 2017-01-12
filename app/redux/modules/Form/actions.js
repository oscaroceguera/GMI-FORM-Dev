import {
  SET_DATA_FORM,
  SAVE_FORM_REQUEST,
  SAVE_FORM_SUCCESS,
  SAVE_FORM_FAIL,
  EMPTY_FORM
} from './constants'

export function setDataForm (person, field) {
  return {
    type: SET_DATA_FORM,
    person,
    field
  }
}

export function saveFormRequest () {
  return {
    type: SAVE_FORM_REQUEST
  }
}

export function saveFormSuccess (registry) {
  return {
    type: SAVE_FORM_SUCCESS,
    registry
  }
}

export function saveFormFail (error) {
  return {
    type: SAVE_FORM_FAIL,
    error
  }
}

export function emptyForm () {
  return {
    type: EMPTY_FORM
  }
}
