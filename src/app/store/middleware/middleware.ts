/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 17.11.20 - 22:25
 **/
import { AnyAction, Dispatch, Store } from 'redux'
import {
    NOTE_CREATE_ERROR,
    NOTE_CREATE_SUCCESS,
    NOTE_DELETE_ERROR,
    NOTE_DELETE_SUCCESS, NOTE_UPDATE_ERROR,
    NOTE_UPDATE_SUCCESS
} from '../constants';
import { toast } from 'react-toastify';
import { fetchNotes } from '../actions/actions';

const authenticationMiddleware = (store: Store) => (
    next: Dispatch<AnyAction>
) => (action: AnyAction) => {

    if (action.type === NOTE_UPDATE_SUCCESS || action.type === NOTE_CREATE_SUCCESS || action.type === NOTE_DELETE_SUCCESS) {
        next(fetchNotes())
        toast.success('SUCCESS', {
            position: toast.POSITION.TOP_LEFT
        });
    }

    if (action.type === NOTE_UPDATE_ERROR || action.type === NOTE_CREATE_ERROR || action.type === NOTE_DELETE_ERROR) {
        toast.error(action.error, {
            position: toast.POSITION.TOP_LEFT
        });
    }

    return next(action)
}

export default authenticationMiddleware
