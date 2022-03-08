import React from 'react'
import { render, screen } from '@testing-library/react'
import RPSGame from '../pages/rps-game'
import {Selection, Choice, SelectionComputer, ChoiceComputer} from '../components/RPSGame/choice/Choice.component'
import { Provider } from 'react-redux'
import {store} from '../redux/index'


describe('Unit test rpsgame page', () => {
  it('Rps Game page', () => {
    render(<Provider store={store}><RPSGame /></Provider>)
  });
})

// describe('Unit test RPSGame component', () => {
//     it('test RPS component', () => {
//       render(<Provider store={store}><Selection /></Provider>)
//       render(<Provider store={store}><Choice /></Provider>)
//       render(<Provider store={store}><SelectionComputer /></Provider>)
//       render(<Provider store={store}><ChoiceComputer /></Provider>)
//     })
//   })

// describe('Unit test Round page', () => {
//   it('Rps Round page', () => {
//     render(<Provider store={store}><RPSGame /></Provider>)
//   });
// })