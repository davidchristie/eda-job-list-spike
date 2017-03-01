import React, { PropTypes } from 'react'

import './Details.css'

class Details extends React.Component {
  render () {
    return (
      <div
        className='Details'
        onClick={event => {
          event.preventPropagation()
        }}
      >
        <h2>{this.props.employer.name}</h2>
        <button
          onClick={event => {
            this.props.hideDetails()
          }}
        >Close</button>
        <button
          onClick={event => {
            this.props.remove()
          }}
        >Remove</button>
      </div>
    )
  }
}

Details.propTypes = {
  employer: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  hideDetails: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
}

export default Details
