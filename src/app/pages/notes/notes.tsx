/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 17.11.20 - 12:41
 **/
import * as React from 'react';
import { get } from 'lodash'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { AppBar, Footer } from '../../../app/components';
import { MouseEventHandler } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import CircularProgress from '@material-ui/core/CircularProgress';
import shallowEqual from 'shallowequal'
import { fetchNotes } from '../../store/actions/actions';
import TitleHeader from './components/titleHeader';
import Note from '../../../lib/components/notes/Note';
import { TranslationManager } from '../../../lib/services'
import withTranslation from '../../../lib/hoc/withTranslation';


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    loading: {
        display: 'flex',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
    },
}));

interface INote {
    id: number,
    title: string
}


const Notes = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchNotes())
    }, [])

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
        console.log(note)
    }

    const onDelete: (INote) => MouseEventHandler = (note: INote) => (evt) => {
        console.log('delete ', note.id)
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

const withTranslationNotes = withTranslation(Notes)

export default withTranslationNotes
