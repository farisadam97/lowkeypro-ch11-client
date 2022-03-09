import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import { render, screen } from '@testing-library/react';
import GameHistories from '../components/GameHistories/game.histories.component';

describe('GameHistories', () => {
	it('Should render the Game Histories component', async () => {
		render(<Provider store={store}><GameHistories /></Provider>);
	});
});
