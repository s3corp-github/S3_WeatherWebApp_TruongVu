import React from 'react';
import { render, screen } from '@testing-library/react';

import Navigation from '../Navigation';

describe('Navigation', () => {
  test('Render Navigation component', () => {
    render(<Navigation />);
    expect(screen.getByText(/Current Location/)).toBeInTheDocument();
    expect(screen.getByText(/myENV/)).toBeInTheDocument();
  })
})