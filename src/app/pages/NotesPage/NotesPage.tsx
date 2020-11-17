/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 17.11.20 - 12:41
 **/
import * as React from 'react';
import { get } from 'lodash'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MouseEventHandler } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import CircularProgress from '@material-ui/core/CircularProgress';
import shallowEqual from 'shallowequal'
import { deleteNote, fetchNotes } from '../../store/actions/actions';
import TitleHeader from './components/titleHeader';
import { Note } from '../../../lib/components';
import withTranslation from '../../../lib/hoc/withTranslation';
import { INote } from '../../../lib/components/Note/Note';
import useReactRouter from 'use-react-router';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

const NotesPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const { history } = useReactRouter()

    const mapState = React.useCallback(
        state => ({
            notes: get(state, 'notes.data', null),
            loading: get(state, 'notes.loading', false),
            error: get(state, 'notes.error', null),
        }),
        []
    )

    const { notes, loading, error } = useMappedState(mapState, shallowEqual)


    const onEdit: (INote) => MouseEventHandler = (note: INote) => (evt) => {
        history.push(`/edit/${note.id}`)
    }

    const onDelete: (INote) => MouseEventHandler = (note: INote) => (evt) => {
        dispatch(deleteNote(note))
    }


    const renderNote = (note) => (
        <Note {...note } key={note.id} onDelete={onDelete} onEdit={onEdit}/>
    )

    const mockNotes = Array.from({ length: 400 }, () => ({ id: 'x', title: 'hola'}))


    const NotesContainer = (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={2}>
                {loading  ? <CircularProgress /> : notes && notes.map(renderNote)}
            </Grid>
        </Container>
    )


    return (
        <React.Fragment>
            <main>
                <TitleHeader/>
                {NotesContainer}
            </main>
        </React.Fragment>
    );
}

const withTranslationNotes = withTranslation(NotesPage)

export default withTranslationNotes
