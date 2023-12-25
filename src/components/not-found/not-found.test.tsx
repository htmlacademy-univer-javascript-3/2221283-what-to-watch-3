import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import NotFoundPage from './not-found';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const expectedHeaderText = '404';
    const expectedLinkText = 'Вернуться на главную';

    render(withHistory(<NotFoundPage />));

    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });
});
