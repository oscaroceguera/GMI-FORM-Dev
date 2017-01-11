import React from 'react'
import { Paper } from 'material-ui'
import { paperContainer } from './styles.css'

function PaperWrapper ({ children }) {
  return (
    <Paper className={paperContainer} zDepth={2}>
      {children}
    </Paper>

  )
}

export default PaperWrapper
