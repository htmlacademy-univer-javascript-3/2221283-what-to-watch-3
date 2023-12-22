import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Main from './main-page';
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
