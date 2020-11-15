import axios from 'axios'
import {
  notesRoute,
} from '../../config/routes'

const getNotes = () => axios.get(notesRoute)

export {
  getNotes,
}
