import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Review from './review.tsx';
import { reviews } from '../../utils/reviews.tsx';

describe('Component: Review', () => {
  it('should render correct', () => {
    const mockReview = reviews[0];
    const strDate = new Date(mockReview.date);
    const expectedDate = strDate.toISOString().substring(0, 10);
    render(<Review {...mockReview} />);

    expect(screen.getByText(mockReview.comment)).toBeInTheDocument();
    expect(screen.getByText(mockReview.user)).toBeInTheDocument();
    expect(screen.getByText(mockReview.rating)).toBeInTheDocument();
    expect(screen.getByText(expectedDate)).toBeInTheDocument();
  });
});
