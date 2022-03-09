import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import { render, screen } from '@testing-library/react';
import GameHistoriesStats from '../components/GameHistories/game.histories.stats.component';

describe('GameHistoriesStats', () => {
	it('Should render the Game Histories Stats component', async () => {
		render(<Provider store={store}><GameHistoriesStats /></Provider>);
		
		expect(screen.getByText('Win(s)')).toBeInTheDocument();
		expect(screen.getByText('Lose(s)')).toBeInTheDocument();
		expect(screen.getByText('Draw(s)')).toBeInTheDocument();
	});
});
