import React from 'react'
import { render, screen } from '@testing-library/react'
import NavbarComponent from '../components/navbar/Navbar.component'
import { Provider } from 'react-redux'
import {store} from '../redux/index'

describe('Unit test navbar component', () => {
  it('Unit test render component', () => {
    render(<Provider store={store}><NavbarComponent /></Provider>)
  });

  it('Unit test image component', () => {
    render(<Provider store={store}><NavbarComponent /></Provider>)
    
    const logoInWebsite = screen.getByAltText(/logo in website/)
    const logoInPhone   = screen.getByAltText(/logo in phone/)
    

    expect(logoInWebsite).toBeInTheDocument()
    expect(logoInPhone).toBeInTheDocument()
  });
})