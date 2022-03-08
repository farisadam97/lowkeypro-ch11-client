import React from 'react'
import { render, screen } from '@testing-library/react'
import GameList from '../pages/game-list'
import { Provider } from 'react-redux'
import {store} from '../redux/index'

describe('Unit test gamelist pages', () => {
  it('Unit test render gamelist pages', () => {
    render(<Provider store={store}><GameList /></Provider>)
  });

  
})