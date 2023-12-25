import Main from './main-page';
import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';


describe('Page: Main', () => {
  it('should render correct', () => {
    const withHistoryComponent = withHistory(<Main />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText(/What to watch Ltd./i)).toBeInTheDocument();
  });
});
