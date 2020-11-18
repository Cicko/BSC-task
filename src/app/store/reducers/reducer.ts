import { loop, Cmd } from 'redux-loop'
import { createNote, deleteNote, getNotes, updateNote } from '../actions/async'
import {
  NOTES_FETCH_INIT,
  NOTES_FETCH_SUCCESS,
  NOTES_FETCH_ERROR,
  NOTE_CREATE_ERROR,
  NOTE_CREATE_SUCCESS,
  NOTE_CREATE_INIT,
  NOTE_DELETE_ERROR,
  NOTE_DELETE_SUCCESS,
  NOTE_DELETE_INIT,
  NOTE_UPDATE_ERROR,
  NOTE_UPDATE_SUCCESS,
  NOTE_UPDATE_INIT,
} from '../constants'
import {
  createNoteError,
  createNoteSuccess,
  deleteNoteError,
  deleteNoteSuccess,
  fetchNotesError,
  fetchNotesSuccess,
  updateNoteError,
  updateNoteSuccess,
} from '../actions/actions'
import initialState from '../initialState'

const initState = {
  ...initialState.notes,
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

    case NOTE_UPDATE_INIT:
      return loop(
        { loading: true },
        Cmd.run(updateNote(action.note.id, action.note.title), {
          successActionCreator: updateNoteSuccess,
          failActionCreator: updateNoteError,
        })
      )

    case NOTE_DELETE_INIT:
      return loop(
        { loading: true },
        Cmd.run(deleteNote(action.note.id), {
          successActionCreator: deleteNoteSuccess,
          failActionCreator: deleteNoteError,
        })
      )

    case NOTE_CREATE_INIT:
      return loop(
        { loading: true },
        Cmd.run(createNote(action.note), {
          successActionCreator: createNoteSuccess,
          failActionCreator: createNoteError,
        })
      )

    case NOTE_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
      }

    case NOTE_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
      }

    case NOTE_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
      }

    case NOTE_CREATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    case NOTE_UPDATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    case NOTE_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

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
        data: null,
      }

    default:
      return state
  }
}

export default reducer
