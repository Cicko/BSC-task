/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 15.11.20 - 17:52
 **/
import * as React from 'react';
import { get } from 'lodash'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { AppBar, Footer } from '../../../app/components';
import { MouseEventHandler } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import CircularProgress from '@material-ui/core/CircularProgress';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import shallowEqual from 'shallowequal'
import { fetchNotes } from '../../../app/store/actions/actions';


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


export default function Album() {
    const classes = useStyles();
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchNotes())
    }, [])

    const mapState = React.useCallback(
        state => ({
            notes: get(state, 'notes.data', null),
            loading: get(state, 'notes.loading', false),
            error: get(state, 'notes.data', null),
        }),
        []
    )

    const { notes, loading, error } = useMappedState(mapState, shallowEqual)
    console.log(notes)

    const onCreate: MouseEventHandler = (evt) => {

    }

    const onEdit: (INote) => MouseEventHandler = (note: INote) => (evt) => {

    }

    const onDelete: (INote) => MouseEventHandler = (note: INote) => (evt) => {

    }

    const Title = (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    Notes
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    paragraph
                >
                    A simple notes management app
                </Typography>
            </Container>
        </div>
    )

    const renderNote = (note) => (
        <Grid item key={note.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Note with ID: {note.id}
                    </Typography>
                    <Typography>
                        {note.title}
                    </Typography>
                </CardContent>
                <CardActions >
                    <EditIcon onClick={onEdit(note)}/>
                    <DeleteIcon onClick={onDelete(note)}/>
                </CardActions>
            </Card>
        </Grid>
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
            <CssBaseline />
            <AppBar onCreate={onCreate}/>
            <main>
                {Title}
                {NotesContainer}
            </main>
            <Footer />
        </React.Fragment>
    );
}
