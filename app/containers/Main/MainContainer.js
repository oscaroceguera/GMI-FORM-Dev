import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {mainContainer, header} from './style.css'
import './appear.css'

import Gmi from './GMI#1.png'

class MainContainer extends Component {
  render () {
    return (
      <div className={mainContainer}>
        <ReactCSSTransitionGroup
          transitionName='appear'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <div className={header}>
            <img src={Gmi} width='50%' />
          </div>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default MainContainer
