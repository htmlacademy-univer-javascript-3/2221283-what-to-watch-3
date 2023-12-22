import { withHistory } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const expectedTextW = 'W';
    const expectedTextT = 'T';
    const expectedCopyright = /© 2019 What to watch Ltd./i;
    const preparedComponent = withHistory(<Footer />);

    render(preparedComponent);

    screen.getAllByText(expectedTextW).forEach((letterW) => {
      expect(letterW).toBeInTheDocument();
    });
    expect(screen.getByText(expectedTextT)).toBeInTheDocument();
    expect(screen.getByText(expectedCopyright)).toBeInTheDocument();

  });
});
