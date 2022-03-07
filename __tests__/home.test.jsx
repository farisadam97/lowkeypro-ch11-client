import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/home-page';

describe('HomePage', () => {
  it('Should render the home page', async () => {
    render(<Provider store={store}><HomePage /></Provider>);
	
	const heading = screen.getByRole('heading', {
      name: /Welcome/i,
    });
    expect(heading).toBeInTheDocument();

    expect(screen.getByText('What do you want to do today?')).toBeInTheDocument();
    expect(screen.getByText('View & Edit Profile')).toBeInTheDocument();
    expect(screen.getByText('Play Games')).toBeInTheDocument();
    expect(screen.getByText('View Games History')).toBeInTheDocument();
    expect(screen.getByText('View Top Score')).toBeInTheDocument();
  });
});
