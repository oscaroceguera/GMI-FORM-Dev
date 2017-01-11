import {
  SAVE_FORM_REQUEST,
  SAVE_FORM_SUCCESS,
  SAVE_FORM_FAIL
} from './constants'

export function saveFormRequest () {
  return {
    type: SAVE_FORM_REQUEST
  }
}

export function saveFormSuccess (registerData) {
  return {
    type: SAVE_FORM_SUCCESS,
    registerData
  }
}

export function saveFormFail (error) {
  return {
    type: SAVE_FORM_FAIL,
    error
  }
}
