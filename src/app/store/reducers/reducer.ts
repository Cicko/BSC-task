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
  notes: initialState.notes
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case NOTES_FETCH_INIT:
      return loop(
        { ...state, user: {
            user: null,
            loading: true,
            error: null,
        }},
        Cmd.run(getNotes, {
          successActionCreator: fetchNotesSuccess,
          failActionCreator: fetchNotesError,
        })
      )

    case NOTES_FETCH_SUCCESS:
      return {
        ...state,
        notes: {
          ...state.notes,
          loading: false,
          error: false,
          user: action.data,
        },
      }

    case NOTES_FETCH_ERROR:
      return {
        ...state,
        notes: {
          ...state.notes,
          loading: false,
        }
      }

    default:
      return state
  }
}

export default reducer
