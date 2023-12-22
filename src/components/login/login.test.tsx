import { withHistory } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import Login from './login';

describe('Component: Login', () => {
  it('should render correctly', () => {
    const withHistoryComponent = withHistory(<Login />);

    render(withHistoryComponent);

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
