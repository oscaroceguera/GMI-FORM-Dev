import React from 'react'
import { Paper } from 'material-ui'
import { paperContainer, logoContainer } from './styles.css'

import Logo from './logo.svg'

function PaperWrapper ({ children }) {
  return (
    <Paper className={paperContainer} zDepth={2}>
      <div className={logoContainer}><img src={Logo} /></div>
      {children}
    </Paper>

  )
}

export default PaperWrapper
