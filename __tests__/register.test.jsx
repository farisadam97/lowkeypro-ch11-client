import React from 'react'
import { render, screen } from '@testing-library/react'
import Register from '../pages/register/index'
import { Provider } from 'react-redux'
import {store} from '../redux/index'

describe('Unit test register pages', () => {
  it('Register Page', () => {
    render(<Provider store={store}><Register /></Provider>)
  });
})