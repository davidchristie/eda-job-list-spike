import React from 'react'

import './App.css'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>App</h2>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default App
