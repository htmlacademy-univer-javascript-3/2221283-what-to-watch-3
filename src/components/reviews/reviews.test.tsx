import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { reviews } from '../../utils/reviews.tsx';
import Reviews from './reviews.tsx';

describe('Component: Reviews', () => {
  let active = true;
  it('should render correct', () => {
    const mockReviews = reviews;
    const mockReviewText = mockReviews[0].comment;

    render(<Reviews active={active} reviews={mockReviews} />);

    expect(screen.getByText(mockReviewText)).toBeInTheDocument();
  });
  it('should not render correct', () => {

    active = false;

    const mockReviews = reviews;
    const mockReviewText = mockReviews[0].comment;

    render(<Reviews active={active} reviews={mockReviews} />);

    expect(screen.queryAllByTestId('col')).not.toBe(2);
    expect(screen.queryAllByTestId('row')).not.toBe(1);
    expect(screen.queryByText(mockReviewText)).not.toBeInTheDocument();
  });
});
