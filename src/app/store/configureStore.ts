import {
  createStore
} from 'redux'
import { install } from 'redux-loop'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../../app/store/rootReducer'

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 100,
})

const configureStore = () => {
  const store = createStore(
    // @ts-ignore
    rootReducer,
    composeEnhancers(
      install(),
    )
  )
  return store
}

export default configureStore
