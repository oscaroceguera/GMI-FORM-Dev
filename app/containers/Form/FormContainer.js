import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import isEmail from 'email-validator'
import * as registryActionCreators from 'actions/register'

import { TEXT_FIELDS } from './formFields'

import { PaperWrapper } from 'components'

import { RadioButton, RadioButtonGroup } from 'material-ui'
import TextField from 'material-ui/TextField'

import { colors } from 'material-ui/styles'
import {
  formTextField,
  textField,
  formRadioField,
  radioFieldRow,
  registrationHeader
} from './style.css'

const stylJS = {
  labelStyle: {
    color: colors.grey500
  }
}

class FormContainer extends Component {

  onHandleChange (e, value, field) {
    if (!value || value.length < 3) return
    this.props.setDataForm(value, field)
  }

  _errorText (field, type) {
    const { person } = this.props

    if (type === 'email') return isEmail.validate(field) ? '' : 'email format/formato email'

    if (type === 'emailConfirm') {
      return field
        ? field === person.email
          ? ''
          : 'verify email does not match/ emails no coinciden'
        : 'email format/formato email'
    }

    return field
      ? field.length > 3
        ? ''
        : 'required/requerido'
      : 'required/requerido'
  }

  render () {
    const { person } = this.props

    return (
      <PaperWrapper>
        <h1 className={registrationHeader}>Registration / Inscripción</h1>
        <div className={formTextField}>
          {
            TEXT_FIELDS.map((item, index) => {
              return (
                <TextField
                  key={index}
                  className={textField}
                  floatingLabelText={item.labelText}
                  onChange={(e, value, field) => this.onHandleChange(e, value, item.field)}
                  errorText={this._errorText(person[item.field], item.requiredType)}
                  fullWidth={item.fullWidth}
                />
              )
            })
          }
        </div>
        <div className={formRadioField}>
          <div className={radioFieldRow}>
            <p>
              - Have you previously attending a GMI Meeting?
              <br />
              - ¿Ha asistido a alguna Reunion del GMI con anterioridad?
            </p>
            <RadioButtonGroup name='shipSpeed' defaultSelected='false'>
              <RadioButton labelStyle={stylJS.labelStyle} value='true' label='Yes/Si' />
              <RadioButton labelStyle={stylJS.labelStyle} value='false' label='No' />
            </RadioButtonGroup>
          </div>
          <div className={radioFieldRow}>
            <p>
              - Do you wish to have your details included in the delegate list?
              <br />
              - ¿Quiere que sus datos sean incluidos en el cuadernillo del evento?
            </p>
            <RadioButtonGroup name='shipSpeed' defaultSelected='true'>
              <RadioButton labelStyle={stylJS.labelStyle} value='true' label='Yes/Si' />
              <RadioButton labelStyle={stylJS.labelStyle} value='false' label='No' />
            </RadioButtonGroup>
          </div>
          <div className={radioFieldRow}>
            <p>- 1rst Whole Genome Sequencing Technology and Produce Safety: Testing for pathogenic  bacterial DNA and its significance. May 18th and 19th</p>
            <p>- 1ra Tecnología de Secuenciación del Genoma Completo e Inocuidad de Frutas y Hortalizas Frescas: Buscando el ADN de bacterias patógenas y su significado. 18 y 19 de Mayo</p>
            <RadioButtonGroup name='shipSpeed' defaultSelected='true'>
              <RadioButton labelStyle={stylJS.labelStyle} value='true' label='Yes I Confirm my Interes to Attend/ Si, Confirmo mi interes de atender ' />
              <RadioButton labelStyle={stylJS.labelStyle} value='false' label='No I Do Not Wish to Attend/ No, no quiero asistir' />
            </RadioButtonGroup>
          </div>
        </div>
      </PaperWrapper>
    )
  }
}

function mapStateToProps ({register}, props) {
  const registerJS = register.toJS()
  return {
    person: registerJS.person,
    personLoading: registerJS.personLoading,
    personFail: registerJS.personFail
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(registryActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)
