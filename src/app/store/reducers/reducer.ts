import { loop, Cmd } from 'redux-loop'
import {
  getNotes,
} from '../actions/async'
import {
  NOTES_FETCH_INIT,
  NOTES_FETCH_SUCCESS,
  NOTES_FETCH_ERROR,
} from '../constants'
import {
  fetchNotesError, fetchNotesSuccess
} from '../actions/actions'
import initialState from '../initialState';


const initState = {
  ...initialState.notes
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case NOTES_FETCH_INIT:
      return loop(
          { loading: true },
          Cmd.run(getNotes, {
            successActionCreator: fetchNotesSuccess,
            failActionCreator: fetchNotesError,
          })
      )

    case NOTES_FETCH_INIT:
        return loop(
        { loading: true },
        Cmd.run(getNotes, {
        successActionCreator: fetchNotesSuccess,
        failActionCreator: fetchNotesError,
        })
    )



      case NOTES_FETCH_SUCCESS:
      return {
          loading: false,
          error: false,
          data: action.data.data,
      }

    case NOTES_FETCH_ERROR:
      return {
          error: action.error,
          loading: false,
          data: null
      }

    default:
      return state
  }
}

export default reducer
