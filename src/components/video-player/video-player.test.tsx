import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import VideoPlayer from './video-player';
import { smallFilms } from '../../utils/films';

describe('Component: VideoPlayer', () => {
  it('should render correctly', () => {
    const mockSmallFilm = smallFilms[0];

    const preparedComponent = withHistory(
      <VideoPlayer src={mockSmallFilm.previewVideoLink} id={mockSmallFilm.id} width={280} height={175} poster={mockSmallFilm.previewImage} name={mockSmallFilm.name} />
    );
    const { withStoreComponent } = withStore(preparedComponent, {
    });

    render(withStoreComponent);
    expect(screen.getByText(mockSmallFilm.name)).toBeInTheDocument();
  });
});
