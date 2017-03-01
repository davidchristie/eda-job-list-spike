import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import Board from './containers/Board'
import './index.css'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Board />
    </App>
  </Provider>,
  document.getElementById('main')
)
