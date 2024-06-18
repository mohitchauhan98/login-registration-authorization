import React from 'react';
import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import userReducer from '../../store/Slice';
import Dashboard from './Dashboard';

const renderWithProviders = (
  ui,
  { initialState, store = configureStore({ reducer: { user: userReducer }, preloadedState: initialState }) } = {}
) => {
  return render(
    <Provider store={store}>
      <MemoryRouter>{ui}</MemoryRouter>
    </Provider>
  );
};

describe('Dashboard component', () => {
  it('renders user information when user is logged in', () => {
    const initialState = {
      user: {
        user: { name: 'Charles Morris', email: 'test@example.com' },
        token: 'test-token',
        loading: false,
        error: ''
      }
    };
    renderWithProviders(<Dashboard />, { initialState });
    expect(screen.getByText(/Charles Morris/i)).toBeInTheDocument();
    expect(screen.getByText(/test@example.com/i)).toBeInTheDocument();
  });

  it('shows loading message when user is not available', () => {
    const initialState = {
      user: {
        user: '',
        token: 'test-token',
        loading: false,
        error: ''
      }
    };
    renderWithProviders(<Dashboard />, { initialState });
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
