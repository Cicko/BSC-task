/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 18.11.20 - 14:06
 **/
import * as React from 'react'
import { StoreContext } from 'redux-react-hook'
import configureStore from '../../store/configureStore'
import NoteForm from './NoteForm'
import { render, fireEvent } from '@testing-library/react'
import { TranslationManager } from '../../../lib/services'

const store = configureStore()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    replace: jest.fn(),
  }),
}))

describe('NoteForm component', () => {
  let onSubmit = jest.fn()
  let onCancel = jest.fn()
  let cancelLabel = ''
  let submitLabel = ''
  let getbyTestId = null

  beforeEach(() => {
    const rendered = render(
      <StoreContext.Provider value={store}>
        <TranslationManager.Context.Provider value={TranslationManager.t('en')}>
          <NoteForm
            onSubmit={onSubmit}
            onCancel={onCancel}
            cancelButtonLabel={cancelLabel}
            submitButtonLabel={submitLabel}
            note={{ title: 'example', id: 0 }}
          />
        </TranslationManager.Context.Provider>
      </StoreContext.Provider>
    )
    getbyTestId = rendered.getByTestId
  })

  test('Has button to submit', () => {
    const button = getbyTestId('form-button-submit')
    expect(button).toBeTruthy()
  })

  test('Has button to cancel', () => {
    const button = getbyTestId('form-button-cancel')
    expect(button).toBeTruthy()
  })

  test('OnSubmit function is called when submit button is clicked', () => {
    const button = getbyTestId('form-button-submit')
    fireEvent.click(button)

    expect(onSubmit).toHaveBeenCalled()
    expect(onSubmit).toHaveBeenCalledWith('example')
  })

  test('OnCancel function is called when cancel button is clicked', () => {
    const button = getbyTestId('form-button-cancel')
    fireEvent.click(button)

    expect(onCancel).toHaveBeenCalled()
    expect(onCancel).toHaveBeenCalledWith('example')
  })

  test('OnCancel function is called when cancel button is clicked', () => {
    const button = getbyTestId('form-button-cancel')
    fireEvent.click(button)

    expect(onCancel).toHaveBeenCalled()
    expect(onCancel).toHaveBeenCalledWith('example')
  })

  test('After modifying title, the value should be returned to the onSubmit function', () => {
    const input = getbyTestId('form-title-input')

    fireEvent.change(input, { target: { value: 'New value' } })

    const button = getbyTestId('form-button-submit')
    fireEvent.click(button)

    expect(onSubmit).toHaveBeenCalledWith('New value')
  })
})
