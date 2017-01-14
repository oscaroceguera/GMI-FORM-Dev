import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'

function TextFieldGenerator ({ className, items, onChange, errorText }) {
  return (
    <TextField
      className={className}
      floatingLabelText={items.labelText}
      fullWidth={items.fullWidth}
      onChange={onChange}
      errorText={errorText}
    />
  )
}

const { string, object, func } = PropTypes

TextFieldGenerator.propTypes = {
  className: string.isRequired,
  items: object.isRequired,
  onChange: func.isRequired,
  errorText: string.isRequired
}

export default TextFieldGenerator
