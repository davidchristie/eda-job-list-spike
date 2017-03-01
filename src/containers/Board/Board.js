import React from 'react'
import { connect } from 'react-redux'

import {
  addEmployer,
  hideEmployerDetails,
  removeEmployer,
  showEmployerDetails
} from '../../actions/employers'
import Details from '../../components/Details'
import Employer from '../../components/Employer'
import './Board.css'

const details = props => {
  const { employers, hideDetails, removeEmployer, showDetailsFor } = props
  if (showDetailsFor === null) {
    return null
  }
  const employer = employers.find(employer => {
    return employer.id === showDetailsFor
  })
  return (
    <Details
      employer={employer}
      hideDetails={hideDetails}
      remove={() => removeEmployer(employer.id)}
    />
  )
}

const employers = props => {
  return props.employers.map((employer, index) => {
    return (
      <Employer
        employer={employer}
        hideDetails={() => props.hideDetails()}
        key={employer.id}
        remove={() => props.removeEmployer(employer.id)}
        showDetails={() => props.showDetails(employer.id)}
      />
    )
  })
}

class Board extends React.Component {
  render () {
    return (
      <div
        className='Board'
        onClick={event => {
          if (this.props.showDetailsFor !== null) {
            this.props.hideDetails()
            event.preventPropagation()
          }
        }}
      >
        <div className='Board-header'>
          <h2>Board</h2>
          <button
            onClick={event => {
              this.props.addEmployer({})
            }}
          >Add Employer</button>
        </div>
        <ul className='Board-column'>
          {employers(this.props)}
        </ul>
        {details(this.props)}
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      employers: state.employers,
      showDetailsFor: state.showDetailsFor
    }
  },
  dispatch => {
    return {
      addEmployer: employer => {
        dispatch(addEmployer(employer))
      },
      hideDetails: () => {
        dispatch(hideEmployerDetails())
      },
      removeEmployer: employerId => {
        dispatch(removeEmployer(employerId))
      },
      showDetails: employerId => {
        dispatch(showEmployerDetails(employerId))
      }
    }
  }
)(Board)
