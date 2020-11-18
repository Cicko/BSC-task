/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 15.11.20 - 19:18
 **/
import * as React from 'react'
import { get } from 'lodash'

import { useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { MouseEventHandler } from 'react'
import useTranslation from '../../../lib/hooks/useTranslation/useTranslation'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { Select } from '../../../lib/components'
import languages from '../../config/languages'
import { setLanguage } from '../../store/actions/actions'
import withTranslation from '../../../lib/hoc/withTranslation'
import { makeStyles } from '@material-ui/core/styles'
import { createStyles, Theme } from '@material-ui/core'

interface AppBarProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
  })
)

const AppBarComponent: React.FC<AppBarProps> = (props: AppBarProps) => {
  const t = useTranslation()
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const mapState = React.useCallback(
    (state) => ({
      language: get(state, 'language', process.env.FALLBACK_LANG),
    }),
    []
  )

  const { language } = useMappedState(mapState)

  const onCreate: MouseEventHandler = (evt) => {
    history.replace('/create')
  }

  const onLanguageChange = (e) => {
    console.log(e.target.value)
    dispatch(setLanguage(e.target.value))
  }

  return (
    <div className={classes.container}>
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
          <Button data-testid="create-note-button" color="primary" variant="contained" onClick={onCreate}>
            {t('appbar.button.create.label')}
          </Button>
          <Select
            label={t('appbar.languages.select.label')}
            options={languages}
            value={language}
            onChange={onLanguageChange}
            id="language-select"
          />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withTranslation(AppBarComponent)
