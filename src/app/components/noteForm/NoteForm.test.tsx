/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 18.11.20 - 14:06
 **/
import * as React from 'react'
import { create } from 'react-test-renderer'
import AppBar from './NoteForm'
import { StoreContext } from 'redux-react-hook'
import configureStore from '../../store/configureStore'
import { Router } from 'react-router-dom'
import NoteForm from './NoteForm';

const store = configureStore()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        replace: jest.fn()
    })
}));

describe('NoteForm component', () => {
    let component = null
    let onSubmit = jest.fn()
    let onCancel = jest.fn()
    let cancelLabel = ''
    let submitLabel = ''

    beforeEach(() => {
        component = create(
            <StoreContext.Provider value={store}>
                <NoteForm onSubmit={onSubmit} onCancel={onCancel} cancelButtonLabel={cancelLabel} submitButtonLabel={submitLabel} />
            </StoreContext.Provider>
        )
    })

    test('Has button to submit and cancel', () => {
        console.log(component)
        const root = component.root
        const buttons = root.findAllByType('button')
        expect(buttons.length).toBe(2)
    })

})
