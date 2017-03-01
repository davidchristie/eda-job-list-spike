import React from 'react'
import ReactDOM from 'react-dom'
import Employer from './Employer'

describe('<Employer />', () => {
  it('renders without crashing', () => {
    const employer = {
      name: 'Test'
    }
    const hideDetails = () => {}
    const remove = () => {}
    const showDetails = () => {}
    const div = document.createElement('div')
    ReactDOM.render(
      <Employer
        employer={employer}
        hideDetails={hideDetails}
        remove={remove}
        showDetails={showDetails}
      />,
      div
    )
  })
})
