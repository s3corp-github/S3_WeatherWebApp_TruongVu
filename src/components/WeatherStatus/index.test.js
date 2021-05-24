import React from 'react';
import { render, screen } from '@testing-library/react';

import WeatherStatus from '../WeatherStatus';

describe('WeatherStatus', () => {
  test('Render WeatherStatus component', () => {
      render(<WeatherStatus/>);
    // screen.debug();
      expect(screen.getByText(/Cloudy/)).toBeInTheDocument();
      expect(screen.getByText(/PSI/)).toBeInTheDocument();
      expect(screen.queryByText(/77%/)).toBeInTheDocument();
    // findBy...
    // queryBy...
  })
})