import { combineReducers } from 'redux-loop'
import { notesReducer } from './reducers'

const combinedReducer = combineReducers({
  fetch: notesReducer,
})

export default combinedReducer
