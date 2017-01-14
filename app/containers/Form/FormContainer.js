import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import isEmail from 'email-validator'
import * as registryActionCreators from 'actions/register'

import { TEXT_FIELDS, RADIO_FIELDS } from './formFields'
import { PaperWrapper, TextFieldGenerator } from 'components'

import { RadioButton, RadioButtonGroup } from 'material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import { colors } from 'material-ui/styles'

import { formTextField, textField, formRadioField, radioFieldRow, registrationHeader } from './style.css'

const stylJS = {
  labelStyle: {
    color: colors.grey500
  }
}

class FormContainer extends Component {
  onRadioChange (e, value, field) {
    this.props.setDataForm(value, field)
  }

  onTextChange (e, value, field) {
    if ((field === 'email' || field === 'emailConfirm') && !isEmail.validate(value)) return
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
    const filtrado = TEXT_FIELDS.filter( item => (person[item.field] === undefined) || (person[item.field] === '') || (person[item.field].length < 3)) // eslint-disable-line
    const showSubmit = (filtrado.length === 0) && (person.email === person.emailConfirm)

    return (
      <PaperWrapper>
        <h1 className={registrationHeader}>Registration / Inscripción</h1>
        <div className={formTextField}>
          {
            TEXT_FIELDS.map((items, index) => (
              <TextFieldGenerator
                items={items}
                key={index}
                className={textField}
                onChange={(e, value, field) => this.onTextChange(e, value, items.field)}
                errorText={this._errorText(person[items.field], items.requiredType)}
              />
            ))
          }
        </div>
        <div className={formRadioField}>
          {
            RADIO_FIELDS.map(({question, name, radioDefault, radios}, index) => (
              <div className={radioFieldRow} key={index}>
                <p>{question}</p>
                <RadioButtonGroup
                  name={name}
                  defaultSelected={radioDefault}
                  onChange={(e, value, field) => this.onRadioChange(e, value, name)}
                >
                  { radios.map(({value, label}, index) => <RadioButton key={index} labelStyle={stylJS.labelStyle} value={value} label={label} />) }
                </RadioButtonGroup>
              </div>
            ))
          }
        </div>
        <div style={{margin: '1em', textAlign: 'center'}}>
          <RaisedButton
            label='Register/Registrarse'
            secondary={true} // eslint-disable-line
            disabled={!showSubmit}
          />
        </div>
      </PaperWrapper>
    )
  }
}

FormContainer.propTypes = {
  person: PropTypes.object.isRequired
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
