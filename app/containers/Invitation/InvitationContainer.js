import React, { Component } from 'react'
import { PaperWrapper } from 'components'
import { browserHistory } from 'react-router'

import { RaisedButton } from 'material-ui'
import Face from 'material-ui/svg-icons/image/tag-faces'
import Illumina from '../../illumina-logo.svg'

const TRUE = true
const style = {
  divContainer: {
    padding: '2em',
    color: '#37474F'
  },
  button: {
    margin: 12
  },
  titleSponsor: {
    color: '#3F51B5',
    padding: 0
  },
  divSponsor: {
    textAlign: 'center'
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
          <p>Dear Community:</p>
          <p>I hope you are well. </p>
          <p>I am writing to extend an invitation to you, to participate in two sequential events: <strong>the 10th  GMI meeting (15 – 17 May 2017)</strong>, and the <strong>“Whole Genome Sequencing Technology and Produce Safety: Testing for pathogenic bacterial DNA and its significance” meeting (18-19 May 2017).</strong></p>
          <p>Both events will take place at the <strong>Sheraton Hotel Cabo San Lucas, Baja California Sur, Mexico.</strong></p>
          <p>Further details:</p>
          <p>Together with the GMI Steering Committee, InoQuoTech has the honor to host one of the most important global events, known as the Global Microbial Identifier - GMI meeting <a href='http://www.globalmicrobialidentifier.org'>globalmicrobialidentifier.org</a>.  The genomic epidemiological database for global identification of microorganisms, or global identifier of microorganisms is a platform for storing whole genome sequencing (WGS) data of microorganisms. These data are for the identification of relevant genes and for the comparison of genomes to detect outbreaks and emerging pathogens. GMI envisions a global system of DNA genome databases for microbial and infectious disease identification and diagnostics. Such a system will benefit those addressing individual problems at the frontline such as clinicians and veterinarians, as well as policy-makers, regulators, and industry. By enabling access to this global resource, a professional response on health threats will be within reach of all countries with basic laboratory infrastructure.</p>
          <p>Among a number of world class scientists, institutions and organisations supporting GMI are Food and Agriculture Organization of the United Nations (FAO), the United States Department of Agriculture (USDA), the United States Food and Drug Administration (FDA), the United States Center for Disease Control and Prevention (CDC), the Denmark Technological University (DTU). As the name indicates, this is the  10th GMI meeting to be held.InoQuoTech will also be the host for the “Whole Genome Sequencing Technology and Produce Safety: Testing for pathogenic bacterial DNA and its significance” meeting.</p>
          <p><strong>GMI 10TH IS SEEKING SPONSORS!!</strong> If you are interested in sponsoring this event, you will have a 10'x10' booth to exhibit your company or institution at both meetings, please contact <strong>lourdessimental@inoquotech.com</strong>, and/or <strong>danielgonzalez@inoquotech.com</strong> to discuss your participation. Also, if you are interested in having allocated time to orally discuss your company during the event, let us know, as this is feasible.</p>
          <p> Invitation: <a target="_blank" href="https://drive.google.com/file/d/0B59YKT8NCxmcMTg0Wm91NjM1NmM/view?usp=sharing">English</a> </p>
          <p> Invitación: <a target="_blank" href="https://drive.google.com/file/d/0B59YKT8NCxmcc2VKa2dlbzZLb1U/view?usp=sharing">Español</a> </p>
          <p><a href="https://www.starwoodmeeting.com/events/start.action?id=1612269802&key=F68669B">Hotel sede</a></p>

          <div style={style.divSponsor}>
            <h3 style={style.titleSponsor}>Sponsorships:</h3>
            <div>
              <a href="https://www.illumina.com/"><img src={Illumina} width='200px'/></a>
            </div>
          </div>
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
