/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 16.11.20 - 20:11
 **/
import * as React from 'react'
import { TranslationManager } from '../../services';

const useTranslation = () => {
    return React.useContext(TranslationManager.Context) as Function
}

export default useTranslation
