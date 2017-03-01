import React from 'react'
import { connect } from 'react-redux'

import { addEmployer, removeEmployer } from '../../actions/employers'
import Employer from '../../components/Employer'
import './Board.css'

class Board extends React.Component {
  render () {
    return (
      <div className='Board'>
        <div className='Board-header'>
          <h2>Board</h2>
          <button
            onClick={event => {
              this.props.addEmployer({})
            }}
          >Add Employer</button>
        </div>
        <ul>
          {this.props.employers.map((employer, index) => {
            return (
              <Employer
                key={index}
                remove={() => this.props.removeEmployer(employer.id)}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      employers: state.employers
    }
  },
  dispatch => {
    return {
      addEmployer: employer => {
        dispatch(addEmployer(employer))
      },
      removeEmployer: employerId => {
        dispatch(removeEmployer(employerId))
      }
    }
  }
)(Board)
