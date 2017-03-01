import React, { PropTypes } from 'react'

import './Employer.css'

class Employer extends React.Component {
  render () {
    const { employer, showDetails } = this.props
    return (
      <li className='Employer'>
        <h2>{employer.name}</h2>
        <button
          onClick={event => {
            showDetails()
          }}
        >Details</button>
      </li>
    )
  }
}

Employer.propTypes = {
  employer: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  hideDetails: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  showDetails: PropTypes.func.isRequired
}

export default Employer
