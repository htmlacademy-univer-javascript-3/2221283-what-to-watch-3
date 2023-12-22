import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Overview from './overviews';

describe('Component: Overview', () => {
  const director = 'john';
  const starring = ['jonatas', 'johnson'];
  const scoresCount = 23;
  const description = 'its film about';
  const rating = 0;
  let active = true;
  const textRating = '9';

  it('should render correct', () => {
    const starringExpected = 'Starring: jonatas, johnson';

    render(<Overview director={director} starring={starring} scoresCount={scoresCount} description={description} rating={rating} active={active} textRating={textRating} />);

    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(starringExpected)).toBeInTheDocument();
  });

  it('should not render when active false', () => {
    active = false;

    render(<Overview director={director} starring={starring} scoresCount={scoresCount} description={description} rating={rating} active={active} textRating={textRating} />);

    expect(screen.queryByText(description)).not.toBeInTheDocument();
  });
});
