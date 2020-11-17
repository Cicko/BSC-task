import * as React from 'react'
import { get } from 'lodash'
import * as ReactDom from 'react-dom'
import { StoreContext, useDispatch, useMappedState } from 'redux-react-hook'
import './assets/scss/style.scss'
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'
import configureStore, { history } from './app/store/configureStore'
import { NotesPage, EditNotePage, CreateNotePage } from './app/pages/pages';
import { TranslationManager } from './lib/services';
import { AppBar, Footer } from './app/components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { fetchNotes } from './app/store/actions/actions';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const store = configureStore()

const App = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchNotes())
    }, [])

    return (
        <Router> { /* place ConnectedRouter under Provider */ }
            <> { /* your usual react-router v4/v5 routing */ }
                <AppBar/>
                <Switch>
                    <Route exact path="/" component={() => <Redirect to="/notes" />} />
                    <Route exact path="/notes" component={() => (<NotesPage/>)} />
                    <Route exact path="/edit/:id" component={(props) => (<EditNotePage {...props}/>)} />
                    <Route exact path="/create" component={() => (<CreateNotePage />)} />
                    <Route render={() => (<div>Miss</div>)} />
                </Switch>
                <Footer />
                <ToastContainer autoClose={2000} newestOnTop/>
            </>
        </Router>
    )
}

const Main = () => {
    return (
        <StoreContext.Provider value={store}>
            <CssBaseline />
            <App/>
        </StoreContext.Provider>
    )
}


ReactDom.render(
    <Main />,
    document.getElementById('root')
)
