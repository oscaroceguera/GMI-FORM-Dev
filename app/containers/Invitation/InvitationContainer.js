import React, { Component } from 'react'
import { PaperWrapper } from 'components'
import { browserHistory } from 'react-router'

import { RaisedButton } from 'material-ui'
import Face from 'material-ui/svg-icons/image/tag-faces'

const TRUE = true
const style = {
  divContainer: {
    padding: '2em',
    color: '#37474F'
  },
  button: {
    margin: 12
  }
}

class InvitationContainer extends Component {

  onHandleClick () {
    browserHistory.push('/registration')
  }

  render () {
    return (
      <PaperWrapper>
        <div style={style.divContainer}>
          <p>Dear community:</p>
          <p>I hope you are well. We want to welcome you at the <strong>Sheraton Hotel Cabo San Lucas, Baja California Sur, Mexico</strong> during the week of May 15th, 2017.</p>
          <p>I am writing to extend you an invitation to participate at both meetings, the GMI 10th and the Whole Genome Sequencing Technology and Produce Safety: Testing for pathogenic bacterial DNA and its significance.</p>
          <p>InoQuoTech has the honor to host one of the most important global events, known as the Global Microbial Identifier -GMI meeting <a href='http://www.globalmicrobialidentifier.org/'>http://www.globalmicrobialidentifier.org</a>  The genomic epidemiological database for global identification of microorganisms, or global identifier of microorganisms is a platform for storing whole genome sequencing (WGS) data of microorganisms. These data are for the identification of relevant genes and for the comparison of genomes to detect outbreaks and emerging pathogens. GMI envisions a global system of DNA genome databases for microbial and infectious disease identification and diagnostics. Such a system will benefit thoseaddressing individual problems at the frontline such as clinicians and veterinarians, as well as policy-makers, regulators, and industry. By enabling access to this global resource, a professional response on health threats will be within reach of all countries with basic laboratory infrastructure.</p>
          <p>This is why we want you to be part of this great event where institutions such as the Food and Agriculture Organization of the United Nations (FAO), the United States Department of Agriculture (USDA), the United States Food and Drug Administration (FDA), the United States Center for Disease Control and Prevention (CDC), the Denmark Technological University (DTU), and others from all around the world will attend to share their experience and researchdeveloped with this powerful tool. <strong>The GMI10th is happening on May 15th to 17th, 2017.</strong></p>
          <p>We are also inviting to you be part of the meeting <strong>Whole Genome Sequencing Technology and Produce Safety: Testing for pathogenic bacterial DNA and its significance.</strong> This event will be hosted from <strong>May 18th to 19th, 2017.</strong></p>
          <p>If you are interested in having a stand of 3X3 m where you can exhibit your company or institution at either or both meetings, please contact <strong>lourdessimental@inoquotech.com</strong> to discuss your participation. Also, if you are interested in having allocated time to orally discuss your company during the event, let me know, as this is feasible.</p>
          <p>Both events will occur at Sheraton Hotel in Cabo San Lucas, BCS, Mexico.</p>
          <p><a href="https://www.starwoodmeeting.com/events/start.action?id=1612269802&key=F68669B">Hotel sede</a></p>
          <p><a href="http://www.eliteincentives.com/english/gmi/gmi.html">Activities/Actividades</a></p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <RaisedButton
            onClick={this.onHandleClick}
            label='Registration / Inscripción'
            primary={TRUE}
            style={style.button}
            icon={<Face />}
          />
        </div>
      </PaperWrapper>
    )
  }
}

export default InvitationContainer
