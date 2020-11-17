/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 15.11.20 - 19:18
 **/
import * as React from 'react'
import { get } from 'lodash'

import { BrowserRouter as Router} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import useReactRouter from 'use-react-router'
import { MouseEventHandler } from 'react';
import useTranslation from '../../../lib/hooks/useTranslation/useTranslation';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { Select } from '../../../lib/components';
import languages from '../../config/languages';
import { setLanguage } from '../../store/actions/actions';
import withTranslation from '../../../lib/hoc/withTranslation';

interface AppBarProps {
}


const AppBarComponent: React.FC<AppBarProps> = (props: AppBarProps) => {
    const t = useTranslation()
    const { history } = useReactRouter()
    const dispatch = useDispatch()
    const mapState = React.useCallback(
        state => ({
            language: get(state, 'language', process.env.FALLBACK_LANG),
        }),
        []
    )

    const { language } = useMappedState(mapState)

    const onCreate: MouseEventHandler = (evt) => {
        history.push('/create')
    }

    const onLanguageChange = (e) => {
        console.log(e.target.value)
        dispatch(setLanguage(e.target.value))
    }

    return (
        <AppBar position="relative">
            <Toolbar>
                <Button variant="contained" onClick={onCreate}>{t('appbar.button.create.label')}</Button>
                <Select label={t('appbar.languages.select.label')} options={languages} value={language} onChange={onLanguageChange}/>
            </Toolbar>
        </AppBar>
    )
}

export default withTranslation(AppBarComponent)
