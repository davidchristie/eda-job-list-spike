import React from 'react'
import ReactDOM from 'react-dom'
import Details from './Details'

describe('<Details />', () => {
  it('renders without crashing', () => {
    const employer = {
      name: 'Test'
    }
    const hideDetails = () => {}
    const remove = () => {}
    const div = document.createElement('div')
    ReactDOM.render(
      <Details
        employer={employer}
        hideDetails={hideDetails}
        remove={remove}
      />,
      div
    )
  })
})
