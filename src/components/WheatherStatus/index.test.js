import React from 'react';
import { render, screen } from '@testing-library/react';

import WheatherStatus from '../WheatherStatus';

describe('WheatherStatus', () => {
  test('Render WheatherStatus component', () => {
      render(<WheatherStatus/>);
    // screen.debug();
      expect(screen.getByText(/Cloudy/)).toBeInTheDocument();
      expect(screen.getByText(/PSI/)).toBeInTheDocument();
      expect(screen.queryByText(/77%/)).toBeInTheDocument();
    // findBy...
    // queryBy...
  })
})