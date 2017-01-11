import React, { Component} from 'react'

import { PaperWrapper } from 'components'

import { RadioButton, RadioButtonGroup } from 'material-ui'
import TextField from 'material-ui/TextField'
/* <div style={{textAlign: 'center'}}>
<TagFace color={Styles.colors.indigo500} style={{width:'50px',height:'50px'}}/>
</div> */

import { colors } from 'material-ui/styles'
import {
  paperContainer,
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
  render () {
    return (
      <PaperWrapper>
        <h1 className={registrationHeader}>Registration / Inscripción</h1>
        <div className={formTextField}>
          <TextField className={textField} errorText='required/requerido' floatingLabelText='First Name/Nombre' />
          <TextField className={textField} errorText='required/requerido' floatingLabelText='Last Name/Apellido' />
          <TextField className={textField} errorText='required/requerido' hintText='Sra, Sr, Miss, Mrs, ...' floatingLabelText='Title/Titulo' />
          <TextField className={textField} fullWidth={TRUE} errorText='required/requerido' floatingLabelText='Organization/Organización' />
          <TextField className={textField} errorText='required/requerido' floatingLabelText='Position/Posición' />
          <TextField className={textField} errorText='required/requerido' floatingLabelText='Email' />
          <TextField className={textField} errorText='required/requerido' floatingLabelText='Verify email/comporbar email' />
          <TextField className={textField} errorText='required/requerido' floatingLabelText='Work/Trabajo' />
          <TextField className={textField} errorText='required/requerido' floatingLabelText='Mobile/Celular' />
          <TextField className={textField} errorText='required/requerido' floatingLabelText='Country/Pais' />
          <TextField className={textField} errorText='required/requerido' floatingLabelText='State/Estado' />
          <TextField className={textField} errorText='required/requerido' floatingLabelText='City/Ciudad' />
          <TextField className={textField} errorText='required/requerido' floatingLabelText='Line 1/C.P.' />
          <TextField className={textField} fullWidth={TRUE} errorText='required/requerido' floatingLabelText='Primary Address/Direccion' />
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

export default FormContainer
