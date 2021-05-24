import React from 'react';
import { render, screen } from '@testing-library/react';

import WeatherChart from '../WeatherChart';

describe('WeatherChart', () => {
    test('Render WeatherChart component', () => {
        render(<WeatherChart/>);
      // screen.debug();
      // findBy...
      // queryBy...
      // screen.debug();
      // screen.getByRole('');
      expect(screen.getByText(/Tide/)).toHaveClass('tide-text');
      expect(screen.getByText(/Sunrise and Sunset/)).toBeInTheDocument();
      expect(screen.getByText(/Tide/)).toHaveClass('tide-text');
    })
  })