import { describe } from 'vitest';
import Spinner from './spinner';
import {render, screen} from '@testing-library/react';


describe('Component: Spinner', () => {
  it('should render correctly', () => {
    render(<Spinner />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
