import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import { render, screen } from '@testing-library/react';
import LandingPage from '../pages/index';

describe('LandingPage', () => {
  it('Should render the landing page', async () => {
    render(<Provider store={store}><LandingPage /></Provider>);

    const heading = screen.getByRole('heading', {
      name: /LOWKEY GAME/i,
    });
    expect(heading).toBeInTheDocument();
    
    expect(screen.getByText('Whats so special?')).toBeInTheDocument();
    expect(screen.getByText('SYSTEM REQUIREMENTS')).toBeInTheDocument();
    expect(screen.getByText('TOP SCORES')).toBeInTheDocument();
    expect(screen.getByText('Jada Griffin')).toBeInTheDocument();
    expect(screen.getByText('Want to stay in touch?')).toBeInTheDocument();
	
	expect(screen.getByAltText('Feature')).toBeInTheDocument();
    expect(screen.getByAltText('System Requirement')).toBeInTheDocument();
    expect(screen.getByAltText('Testimonial 1')).toBeInTheDocument();
    expect(screen.getByAltText('Testimonial 2')).toBeInTheDocument();
    expect(screen.getByAltText('Testimonial 3')).toBeInTheDocument();
    expect(screen.getByAltText('Newsletter')).toBeInTheDocument();
	
  });
});