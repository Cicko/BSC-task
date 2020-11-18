/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 17.11.20 - 14:03
 **/
import * as React from 'react'
import { Container } from '@material-ui/core'
import NoteForm from '../../components/noteForm/NoteForm'
import { useDispatch } from 'redux-react-hook'
import withTranslation from '../../../lib/hoc/withTranslation'
import useTranslation from '../../../lib/hooks/useTranslation/useTranslation'
import useReactRouter from 'use-react-router'
import { createNote } from '../../store/actions/actions'

const CreateNotePage = () => {
  const t = useTranslation()
  const { history } = useReactRouter()
  const dispatch = useDispatch()

  const onSubmit = (title) => {
    dispatch(createNote({ title }))
    history.replace('/')
  }

  const onCancel = () => {
    history.replace('/')
  }

  return (
    <Container component="main" maxWidth="xs">
      <NoteForm
        onSubmit={onSubmit}
        onCancel={onCancel}
        submitButtonLabel={t('form.create.submit.label')}
        cancelButtonLabel={t('form.create.cancel.label')}
      />
    </Container>
  )
}

export default withTranslation(CreateNotePage)
