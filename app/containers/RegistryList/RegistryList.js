import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from 'actions/register'

import { PaperWrapper } from 'components'

import CircularProgress from 'material-ui/CircularProgress'
import NotFoundtFace from 'material-ui/svg-icons/social/sentiment-very-dissatisfied'

import { ProgressContainer, NotFoundRegistriesContainer, NotFoundRegistriesIcon } from './style.css'

const style = {
  NotFoundRegistriesIcon: {
    width: '100px',
    height: '100px',
    color: 'gray'
  }
}

function Progress () {
  return (
    <div className={ProgressContainer}>
      <CircularProgress size={60} thickness={2} />
    </div>
  )
}

function NotFoundRegistries () {
  return (
    <div className={NotFoundRegistriesContainer}>
      <h1>No se encontraron registros!</h1>
      <NotFoundtFace style={style.NotFoundRegistriesIcon} />
    </div>
  )
}


class RegistryList extends Component {
  static propTypes = {
    people: React.PropTypes.array.isRequired,
    loading: React.PropTypes.bool.isRequired,
    fail: React.PropTypes.object
  }

  componentWillMount () {
    this.props.fetchRegistyRequest()
  }
  render () {
    console.log('people', this.props.people.length);
    const { people, loading, fail } = this.props
    return (
      <PaperWrapper>
        {
          loading
            ? <Progress />
          : people.length > 0
            ? <NotFoundRegistries />
            : <p>Si tiene</p>
        }
      </PaperWrapper>
    )
  }
}

function mapStateToProps ({register}, props) {
  const registerJS = register.toJS()
  return {
    people: registerJS.people,
    loading: registerJS.peopleLoading,
    fail: registerJS.peopleFail
  }
}

export default connect(mapStateToProps, actions)(RegistryList)
