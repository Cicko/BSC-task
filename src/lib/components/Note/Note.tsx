/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 16.11.20 - 18:58
 **/

import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles'
import useTranslation from '../../hooks/useTranslation/useTranslation'

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(to top right, #F3F3F3, #E2E2E2)',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

export interface INote {
  id: number
  title: string
}

export interface NoteProps extends INote {
  onEdit: (note) => (MouseEventHandler) => void
  onDelete: (note) => (MouseEventHandler) => void
}

const Note: React.FC<NoteProps> = (note) => {
  const { id, title, onEdit, onDelete } = note
  const classes = useStyles()
  const t = useTranslation()

  return (
    <Grid item key={note.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {t('note.card.title', { id })}
          </Typography>
          <Typography>{title}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <IconButton aria-label="edit" onClick={onEdit(note)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={onDelete(note)}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Note
