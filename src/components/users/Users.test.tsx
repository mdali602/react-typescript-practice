import React from 'react';
import { render, screen } from '@testing-library/react';
import Users from './Users';

test('renders learn react link', async () => {
  render(<Users />);
  const linkElement = screen.getByText(/users/i);
  const users = await screen.findAllByRole('listitem');
  expect(linkElement).toBeInTheDocument();
  expect(users).toHaveLength(10);
});
