// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ModelLink title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ModelLink/i);
    expect(titleElement).toBeInTheDocument();
});
