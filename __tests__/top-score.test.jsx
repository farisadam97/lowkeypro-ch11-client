import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import { render, screen } from '@testing-library/react';
import TopScore from '../pages/top-score';

describe('TopScore', () => {
	it('Should render the Top Score page', async () => {
		render(<Provider store={store}><TopScore /></Provider>);
		
		const heading = screen.getByRole('heading', {
		  name: /List Top Scores/i,
		});
		expect(heading).toBeInTheDocument();
		
		expect(screen.getByText('This top score from various games provided on this platform')).toBeInTheDocument();
		expect(screen.getByText('Name')).toBeInTheDocument();
		expect(screen.getByText('Email')).toBeInTheDocument();
		expect(screen.getByText('Username')).toBeInTheDocument();
		expect(screen.getByText('City')).toBeInTheDocument();
	});
});
