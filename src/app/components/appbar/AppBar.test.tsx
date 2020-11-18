/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 18.11.20 - 12:26
 **/
import * as React from 'react'
import AppBar from './AppBar'
import { StoreContext } from 'redux-react-hook'
import configureStore from '../../store/configureStore'
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';


const store = configureStore()

const mockHistoryReplace = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    replace: mockHistoryReplace,
  }),
}));

describe('AppBar component', () => {
  let getByTestId = null

  beforeEach(() => {
    const rendered = render(
        <StoreContext.Provider value={store}>
          <MemoryRouter>
            <AppBar />
          </MemoryRouter>
        </StoreContext.Provider>
    );
    getByTestId = rendered.getByTestId
  })

  test('Has button to create new note', () => {
    const button = getByTestId('create-note-button')
    expect(button).toBeTruthy()
  })

  test('Has Select to choose language', () => {
    const select = getByTestId('language-select')
    expect(select).toBeTruthy()
  })

  test('Redirection to create note is created when clicking on the button', () => {
    const button = getByTestId('create-note-button')

    fireEvent.click(button);
    expect(mockHistoryReplace).toHaveBeenCalledWith('/create');
  })
})
