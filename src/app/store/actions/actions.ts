import {
    NOTES_FETCH_INIT,
    NOTES_FETCH_ERROR,
    NOTES_FETCH_SUCCESS
} from '../constants'

const fetchNotes = (userId) => ({
  type: NOTES_FETCH_INIT,
  userId,
})

const fetchNotesSuccess = (data) => ({
  type: NOTES_FETCH_SUCCESS,
  data,
})

const fetchNotesError = (error) => ({
  type: NOTES_FETCH_ERROR,
  error,
})

export {
    fetchNotes,
    fetchNotesError,
    fetchNotesSuccess,
}
