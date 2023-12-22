import { withHistory, withStore } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import Logout from './logout';

describe('Component: Logout', () => {
  it('should render correctly', () => {
    const expectedText = 'Logout';
    const preparedComponent = withHistory(<Logout />);
    const { withStoreComponent } = withStore(preparedComponent, {});
    render(withStoreComponent);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
