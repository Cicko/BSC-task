/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 17.11.20 - 20:54
 **/

import * as React from 'react'
import { get } from 'lodash'
import { makeStyles } from '@material-ui/core/styles'
import { Button, TextField } from '@material-ui/core'
import { INote } from '../../../lib/components/Note/Note'
import useTranslation from '../../../lib/hooks/useTranslation/useTranslation'

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export interface NoteFormProps {
  onSubmit: (any) => void
  onCancel: (any) => void
  cancelButtonLabel: string
  submitButtonLabel: string
  note?: INote // If it's null, we are creating a new note.
}

const NoteForm: React.FC<NoteFormProps> = (props) => {
  const [title, setTitle] = React.useState(get(props.note, 'title', ''))
  const classes = useStyles()
  const t = useTranslation()

  return (
    <form className={classes.form} noValidate>
      <TextField
        margin="normal"
        required
        fullWidth
        id="title"
        label={t('form.title.label')}
        name="title"
        value={title}
        inputProps={{ 'data-testid': 'form-title-input' }}
        onChange={({ target }) => setTitle(target.value)}
        autoComplete="title"
        autoFocus
      />
      <Button
        variant="contained"
        data-testid="form-button-cancel"
        onClick={() => props.onCancel(title)}
        className={classes.button}
      >
        {props.cancelButtonLabel}
      </Button>
      <Button
        variant="contained"
        data-testid="form-button-submit"
        onClick={() => props.onSubmit(title)}
        className={classes.button}
      >
        {props.submitButtonLabel}
      </Button>
    </form>
  )
}

export default NoteForm
