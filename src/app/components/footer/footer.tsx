/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 15.11.20 - 19:19
 **/
import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography
                variant="subtitle1"
                align="center"
                color="textSecondary"
                component="p"
            >
                Made with ❤️ by Rudolf Cicko
            </Typography>
        </footer>
    )
}

export default Footer
