import { combineReducers } from 'redux-loop'
import { connectRouter } from 'connected-react-router'
import { notesReducer, languageReducer } from './reducers'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    language: languageReducer,
    notes: notesReducer,
  })

export default createRootReducer
