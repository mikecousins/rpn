import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the enter button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Enter/i);
  expect(linkElement).toBeInTheDocument();
});
