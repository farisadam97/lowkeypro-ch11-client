import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import {store} from '../redux/index'
import ProfilePages from '../pages/profile/index'
import ProfileComponent from '../components/profile/Profile.component'

describe('Unit test profile pages', () => {
  it('renders a pages profile', () => {
    render(<Provider store={store}><ProfilePages /></Provider>)
  });
})

describe('Unit test profile component', () => {
    it('renders a component profile', () => {
        render(<Provider store={store}><ProfileComponent /></Provider>)
      });
})