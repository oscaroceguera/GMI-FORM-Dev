import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from 'actions/register'
import { CSV_REGISTRIES } from 'services/config'
import { PaperWrapper } from 'components'

import CircularProgress from 'material-ui/CircularProgress'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import NotFoundtFace from 'material-ui/svg-icons/social/sentiment-very-dissatisfied'
import Download from 'material-ui/svg-icons/file/file-download'
import FloatingActionButton from 'material-ui/FloatingActionButton';

import { ProgressContainer, NotFoundRegistriesContainer, NotFoundRegistriesIcon, btnCSV } from './style.css'

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

Registry.propTypes = {
  data: React.PropTypes.object.isRequired
}

function Registry ({data}) {
  const name = `${data.title} ${data.firstName} ${data.lastName}`
  const address = `${data.address}, ${data.line}`
  const location = `${data.town}, ${data.state}, ${data.country}`
  return (
    <TableRow>
      <TableRowColumn>{name}</TableRowColumn>
      <TableRowColumn>{data.email}</TableRowColumn>
      <TableRowColumn>{address}</TableRowColumn>
      <TableRowColumn>{location}</TableRowColumn>
    </TableRow>
  )
}

TableRegistries.propTypes = {
  data: React.PropTypes.array.isRequired
}

function TableRegistries ({data}) {
  return (
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Nombre</TableHeaderColumn>
          <TableHeaderColumn>Email</TableHeaderColumn>
          <TableHeaderColumn>Dirección</TableHeaderColumn>
          <TableHeaderColumn>Ubicación</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        { data.map((row, index) => <Registry key={index} data={row} />) }
      </TableBody>
    </Table>

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
    const { people, loading, fail } = this.props
    return (
      <div>
        <PaperWrapper>
          {
            loading
              ? <Progress />
              : people.length < 0
                ? <NotFoundRegistries />
                : <TableRegistries data={people}/>
          }

      </PaperWrapper>
      <div className={btnCSV}>
        <FloatingActionButton href={CSV_REGISTRIES}>
          <Download />
        </FloatingActionButton>
      </div>
    </div>
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
