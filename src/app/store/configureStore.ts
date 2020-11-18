import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { install } from 'redux-loop'
import { composeWithDevTools } from 'redux-devtools-extension'
import createRootReducer from '../../app/store/rootReducer'
import middleware from '../../app/store/middleware/middleware'

export const history = createBrowserHistory()

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 100,
})

const configureStore = () => {
  const store = createStore(
    // @ts-ignore
    createRootReducer(history),
    composeEnhancers(install(), applyMiddleware(middleware))
  )
  return store
}

export default configureStore
