import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Test A1

test('Test A1 - Renders Page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Digital Futures News/i);
  expect(linkElement).toBeInTheDocument();
});
