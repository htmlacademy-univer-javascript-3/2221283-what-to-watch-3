import { withHistory } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import Logo from './logo';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const expectedTextW = 'W';
    const expectedTextT = 'T';

    const preparedComponent = withHistory(<Logo />);

    render(preparedComponent);

    screen.getAllByText(expectedTextW).forEach((letterW) => {
      expect(letterW).toBeInTheDocument();
    });
    expect(screen.getByText(expectedTextT)).toBeInTheDocument();
  });
});
