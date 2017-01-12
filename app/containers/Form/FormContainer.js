import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import isEmail from 'email-validator'
import * as registryActionCreators from 'redux/modules/Form/actions'

import { PaperWrapper } from 'components'

import { RadioButton, RadioButtonGroup } from 'material-ui'
import TextField from 'material-ui/TextField'
/* <div style={{textAlign: 'center'}}>
<TagFace color={Styles.colors.indigo500} style={{width:'50px',height:'50px'}}/>
</div> */

import { colors } from 'material-ui/styles'
import {
  formTextField,
  textField,
  formRadioField,
  radioFieldRow,
  registrationHeader
} from './style.css'

const TRUE = true
const stylJS = {
  labelStyle: {
    color: colors.grey500
  }
}

class FormContainer extends Component {

  onHandleChange (e, value, field) {
    this.props.setDataForm(value, field)
  }

  _isEmail (field) {
    return isEmail.validate(field)
      ? ''
      : 'email format/formato email'
  }

  _errorText (field) {
    return field
      ? field.length > 2
        ? ''
        : 'required/requerido'
      : 'required/requerido'
  }

  render () {
    return (
      <PaperWrapper>
        <h1 className={registrationHeader}>Registration / Inscripción</h1>
        <div className={formTextField}>
          <TextField
            onChange={(e, value, field) => this.onHandleChange(e, value, 'firsName')}
            className={textField}
            errorText={this._errorText(this.props.person.firsName)}
            floatingLabelText='First Name/Nombre'
          />
          <TextField
            onChange={(e, value, field) => this.onHandleChange(e, value, 'lastName')}
            className={textField}
            errorText={this._errorText(this.props.person.lastName)}
            floatingLabelText='Last Name/Apellido'
          />
          <TextField
            onChange={(e, value, field) => this.onHandleChange(e, value, 'title')}
            className={textField}
            errorText={this._errorText(this.props.person.title)}
            hintText='Sra, Sr, Miss, Mrs, ...'
            floatingLabelText='Title/Titulo'
          />
          <TextField
            onChange={(e, value, field) => this.onHandleChange(e, value, 'organization')}
            className={textField}
            fullWidth={TRUE}
            errorText={this._errorText(this.props.person.organization)}
            floatingLabelText='Organization/Organización'
          />
          <TextField
            onChange={(e, value, field) => this.onHandleChange(e, value, 'position')}
            className={textField}
            errorText={this._errorText(this.props.person.position)}
            floatingLabelText='Position/Posición'
          />
          <TextField
            onChange={(e, value, field) => this.onHandleChange(e, value, 'email')}
            className={textField}
            errorText={this._isEmail(this.props.person.email)}
            floatingLabelText='Email'
          />
          <TextField
            className={textField}
            errorText='required/requerido'
            floatingLabelText='Verify email/comporbar email'
          />
          <TextField
            onChange={(e, value, field) => this.onHandleChange(e, value, 'work')}
            className={textField}
            errorText={this._errorText(this.props.person.work)}
            floatingLabelText='Work/Trabajo'
          />
          <TextField
            onChange={(e, value, field) => this.onHandleChange(e, value, 'mobile')}
            className={textField}
            errorText={this._errorText(this.props.person.mobile)}
            floatingLabelText='Mobile/Celular'
          />
          <TextField
            onChange={(e, value, field) => this.onHandleChange(e, value, 'country')}
            className={textField}
            errorText={this._errorText(this.props.person.country)}
            floatingLabelText='Country/Pais'
          />
          <TextField
            onChange={(e, value, field) => this.onHandleChange(e, value, 'state')}
            className={textField}
            errorText={this._errorText(this.props.person.state)}
            floatingLabelText='State/Estado'
          />
          <TextField
            onChange={(e, value, field) => this.onHandleChange(e, value, 'town')}
            className={textField}
            errorText={this._errorText(this.props.person.town)}
            floatingLabelText='City/Ciudad'
          />
          <TextField
            onChange={(e, value, field) => this.onHandleChange(e, value, 'line')}
            className={textField}
            errorText={this._errorText(this.props.person.line)}
            floatingLabelText='Line 1/C.P.'
          />
          <TextField
            onChange={(e, value, field) => this.onHandleChange(e, value, 'address')}
            className={textField}
            errorText={this._errorText(this.props.person.address)}
            fullWidth={TRUE}
            floatingLabelText='Primary Address/Direccion'
          />
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
