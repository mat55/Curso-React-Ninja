import { combineReducers } from 'redux'
import todos from './todos'
import filter from './visibility-filter'

export default combineReducers({
  todos,
  filter
})
