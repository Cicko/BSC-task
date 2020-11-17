/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 16.11.20 - 19:04
 **/

import en from '../../assets/translations/en.json'
import cz from '../../assets/translations/cz.json'

export interface ILanguage {
    label: string
    value: string
}

export default [
    {
        label: 'English',
        value: 'en',
    },
    {
        label: 'Czech',
        value: 'cz'
    }
]
