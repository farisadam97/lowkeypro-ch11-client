import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
// import Login from '../pages/login/index'
import Login from '../components/login/Login.component'
import { Provider } from 'react-redux'
import {store} from '../redux/index'
import LoginPages from '../pages/login/index'

describe('Unit test login component', () => {
  it('renders a label', () => {
    render(<Provider store={store}><Login /></Provider>)

    const labelUsername = screen.getByLabelText('Username');
    const labelPassword = screen.getByLabelText('Password');

    expect(labelUsername).toBeInTheDocument()
    expect(labelPassword).toBeInTheDocument()
  });

  it('renders a placeholder info', () => {
      render(<Provider store={store}><Login /></Provider>)

      const placeHolderNameUsername = screen.getByPlaceholderText('Username')
      const placeHolderNamePassword = screen.getByPlaceholderText('Password')

      expect(placeHolderNameUsername).toBeInTheDocument()
      expect(placeHolderNamePassword).toBeInTheDocument()
  })

  it('renders a input name', () => {
      const {container} = render(<Provider store={store}><Login /></Provider>)
    
      const placeHolderNameUsername = container.querySelector('[name="username"]')
      const placeHolderNamePassword = container.querySelector('[name="password"]')

      expect(placeHolderNameUsername).toBeInTheDocument()
      expect(placeHolderNamePassword).toBeInTheDocument()

  })
})

// describe('Unit test login component form submit', () => { 
//     it('renders a input name', async () => {
//         // const {container} = render(<Login />)
        
//         render(<Login />);
//         const usernameInput = screen.getByPlaceholderText(/Username/i);
//         const passwordInput = screen.getByPlaceholderText(/Password/i);

//         fireEvent.change(usernameInput, { target: { value: "alex123" } });
//         fireEvent.change(passwordInput, { target: { value: "password123" } });
//         fireEvent.click(screen.getByText(/Submit/i));
    
//       })
// })

describe('Unit test login component form submit', () => { 
  it('renders a input name', async () => {
      
      render(<Provider store={store}><LoginPages /></Provider>);
    })
})