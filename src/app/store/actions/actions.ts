import {
    NOTES_FETCH_INIT,
    NOTES_FETCH_ERROR,
    NOTES_FETCH_SUCCESS,
    NOTE_CREATE_ERROR,
    NOTE_CREATE_INIT,
    NOTE_DELETE_ERROR,
    NOTE_CREATE_SUCCESS,
    NOTE_DELETE_INIT,
    NOTE_DELETE_SUCCESS,
    NOTE_UPDATE_ERROR,
    NOTE_UPDATE_INIT,
    NOTE_UPDATE_SUCCESS, SET_LANGUAGE
} from '../constants'

const fetchNotes = () => ({
  type: NOTES_FETCH_INIT,
})

const fetchNotesSuccess = (data) => ({
  type: NOTES_FETCH_SUCCESS,
  data,
})

const fetchNotesError = (error) => ({
  type: NOTES_FETCH_ERROR,
  error,
})

const updateNote = (note) => ({
    type: NOTE_UPDATE_INIT,
    note
})

const updateNoteSuccess = () => ({
    type: NOTE_UPDATE_SUCCESS
})

const updateNoteError = (error) => ({
    type: NOTE_UPDATE_ERROR,
    error
})

const deleteNote = (note) => ({
    type: NOTE_DELETE_INIT,
    note,
})

const deleteNoteSuccess = () => ({
    type: NOTE_DELETE_SUCCESS,
})

const deleteNoteError = (error) => ({
    type: NOTE_DELETE_ERROR,
    error,
})

const createNote = (note) => ({
    type: NOTE_CREATE_INIT,
    note,
})

const createNoteSuccess = () => ({
    type: NOTE_CREATE_SUCCESS,
})

const createNoteError = (error) => ({
    type: NOTE_CREATE_ERROR,
    error
})

const setLanguage = (language) => ({
    type: SET_LANGUAGE,
    language
})

export {
    fetchNotes,
    fetchNotesError,
    fetchNotesSuccess,
    createNote,
    createNoteError,
    createNoteSuccess,
    updateNote,
    updateNoteError,
    updateNoteSuccess,
    deleteNote,
    deleteNoteError,
    deleteNoteSuccess,
    setLanguage
}
