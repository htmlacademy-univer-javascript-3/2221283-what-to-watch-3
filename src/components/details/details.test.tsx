import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Details from './details';
import { convertTime } from '../../utils/functions';

describe('Component: Details', () => {
  const director = 'john';
  const starring = ['jonatas', 'johnson'];
  const runTime = 99;
  const genre = 'com';
  const released = 2012;
  let active = true;
  it('should render correct', () => {

    const runTimeExpected = convertTime(runTime);

    render(<Details director={director} starring={starring} runtime={runTime} genre={genre} released={released} active={active} />);


    expect(screen.getByText(genre)).toBeInTheDocument();
    expect(screen.getByText(runTimeExpected)).toBeInTheDocument();
  });

  it('should not render when active false', () => {
    active = false;

    render(<Details director={director} starring={starring} runtime={runTime} genre={genre} released={released} active={active} />);

    expect(screen.queryByText(genre)).not.toBeInTheDocument();
  });
});
