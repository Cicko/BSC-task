/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 15.11.20 - 16:21
 **/
import { get } from 'lodash'
import * as React from 'react'

interface ITranslationManager {
    t: (lang: string) => (key: string) => string
    Context: React.Context<object>
}

const TranslationManager: ITranslationManager = {
    t: (lang: string = 'en') => (key: string, replacements?: object) => {
        const translation = require(`../../../assets/translations/${[lang] ||
        process.env.FALLBACK_LANG}.json`)
        if (!replacements) return get(translation, key, key)
        else {
            let result = get(translation, key, key)
            for (key as string in replacements) {
                const regex = new RegExp(`{+\\s*${key}\\s*}+`)
                result = result.replace(regex, replacements[key])
            }
            return result
        }
    },
    Context: React.createContext({}),
}

export default TranslationManager
