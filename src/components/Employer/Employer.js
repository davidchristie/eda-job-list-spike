import React, { PropTypes } from 'react'

import './Employer.css'

class Employer extends React.Component {
  render () {
    return (
      <li className='Employer'>
        <h2>Employer</h2>
        <button
          onClick={event => {
            this.props.remove()
          }}
        >Remove</button>
      </li>
    )
  }
}

Employer.propTypes = {
  remove: PropTypes.func.isRequired
}

export default Employer
