import React from 'react';
import { render, screen } from '@testing-library/react';
import ExampleComponent from '../components/ExampleComponent';

describe('ExampleComponent', () => {
  test('renders the component with correct text', () => {
    render(<ExampleComponent />);
    const element = screen.getByText(/some text/i); // Replace with actual text
    expect(element).toBeInTheDocument();
  });

  // Add more tests as needed
});