import { SET_LANGUAGE } from '../constants'
import { setLanguage } from '../actions/actions'
import initialState from '../initialState'

const languageReducer = (state = initialState.language, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.language

    default:
      return state
  }
}

export default languageReducer
