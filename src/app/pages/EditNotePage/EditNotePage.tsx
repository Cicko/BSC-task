/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 17.11.20 - 13:14
 **/
import * as React from 'react'
import { get, find } from 'lodash'
import shallowEqual from 'shallowequal'
import { Redirect } from 'react-router-dom'
import { Container } from '@material-ui/core';
import NoteForm from '../../components/noteForm/NoteForm';
import { useDispatch, useMappedState } from 'redux-react-hook';
import withTranslation from '../../../lib/hoc/withTranslation';
import useTranslation from '../../../lib/hooks/useTranslation/useTranslation';
import { updateNote } from '../../store/actions/actions';
import useReactRouter from 'use-react-router';
import CircularProgress from '@material-ui/core/CircularProgress';
import { toast } from 'react-toastify';

const EditNotePage = (props) => {
    const id = props.match.params.id
    const t = useTranslation()
    const { history } = useReactRouter()
    const dispatch = useDispatch()
    const mapState = React.useCallback(
        state => ({
            notes: get(state, 'notes.data', null),
            loading: get(state, 'notes.loading', true),
        }),
        []
    )

    const { notes, loading } = useMappedState(mapState, shallowEqual)

    const onSubmit = (title) => {
        dispatch(updateNote({ id, title }))
        history.replace('/')
    }

    const onCancel = () => {
        history.replace('/')
    }

    const note = find(notes, (note) => note.id == id)

    if (loading) {
        return <CircularProgress />
    }

    if (!note && notes) {
        toast.error(t('toast.error.note_doesnt_exist'), {
            position: toast.POSITION.TOP_LEFT
        });
        return <Redirect to="/" />
    }

    return (
        <Container component="main" maxWidth="xs">
            <NoteForm
                onSubmit={onSubmit}
                onCancel={onCancel}
                submitButtonLabel={t("form.edit.submit.label")}
                cancelButtonLabel={t("form.edit.cancel.label")}
                note={note}
            />
        </Container>
    )
}

export default withTranslation(EditNotePage)
