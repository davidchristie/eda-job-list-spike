import { combineReducers } from 'redux'

import employers from './employers'
import showDetailsFor from './show-details-for'

export default combineReducers({
  employers,
  showDetailsFor
})
