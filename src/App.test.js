import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  // screen.getByRole('');
  expect(screen.getByRole('banner')).toHaveClass('header');
});
