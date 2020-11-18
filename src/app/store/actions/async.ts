import axios from 'axios'
import { notesRoute } from '../../config/routes'

const getNotes = () => axios.get(notesRoute)

const createNote = (title) => () => axios.post(notesRoute, { title })

const deleteNote = (id) => () => axios.delete(notesRoute.concat(`/${id}`))

const updateNote = (id, title) => () =>
  axios.put(notesRoute.concat(`/${id}`), { title })

export { getNotes, createNote, deleteNote, updateNote }
