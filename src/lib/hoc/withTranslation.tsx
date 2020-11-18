import * as React from 'react'
import { get } from 'lodash'
import { useMappedState } from 'redux-react-hook'
import { TranslationManager } from '../services'

/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 17.11.20 - 18:43
 **/

const withTranslation = (Component) => (props) => {
  const mapState = React.useCallback(
    (state) => ({
      language: get(state, 'language', process.env.FALLBACK_LANG),
    }),
    []
  )

  const { language } = useMappedState(mapState)

  return (
    <TranslationManager.Context.Provider value={TranslationManager.t(language)}>
      <Component {...props} />
    </TranslationManager.Context.Provider>
  )
}

export default withTranslation
