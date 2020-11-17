/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 17.11.20 - 12:42
 **/
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import useTranslation from '../../../../lib/hooks/useTranslation/useTranslation';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
}));


const TitleHeader = () => {
    const classes = useStyles();
    const t = useTranslation()

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    {t('notes.header.title')}
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    paragraph
                >
                    {t('notes.header.subtitle')}
                </Typography>
            </Container>
        </div>
    )
}

export default TitleHeader
