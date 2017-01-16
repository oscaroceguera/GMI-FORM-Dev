import {
  SET_DATA_FORM,
  SAVE_FORM_REQUEST,
  SAVE_FORM_SUCCESS,
  SAVE_FORM_FAIL,
  EMPTY_FORM,
  FETCH_REGISTRIES_REQUEST,
  FETCH_REGISTRIES_SUCCESS,
  FETCH_REGISTRIES_FAIL
} from 'types/register'

export const actions = {
  setDataForm: (person, field) => ({ type: SET_DATA_FORM, person, field }),
  saveFormRequest: () => ({ type: SAVE_FORM_REQUEST }),
  saveFormSuccess: (registry) => ({ type: SAVE_FORM_SUCCESS, registry }),
  saveFormFail: (error) => ({ type: SAVE_FORM_FAIL, error }),
  emptyForm: () => ({ type: EMPTY_FORM }),
  fetchRegistyRequest: () => ({ type: FETCH_REGISTRIES_REQUEST }),
  fetchRegistriesSuccess: (regitries) => ({ type: FETCH_REGISTRIES_SUCCESS, regitries }),
  fetchRegistriesFail: (error) => ({ type: FETCH_REGISTRIES_FAIL, error })
}
