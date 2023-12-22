import { describe } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import VideoPlayer from './video-player';
import { SMALLFILMS } from '../../utils/films';

describe('Component: VideoPlayer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('should render correctly', () => {
    const mockSmallFilm = SMALLFILMS[0];

    const preparedComponent = withHistory(
      <VideoPlayer src={mockSmallFilm.previewVideoLink} id={mockSmallFilm.id} width={280} height={175} poster={mockSmallFilm.previewImage} name={mockSmallFilm.name} />
    );
    const { withStoreComponent } = withStore(preparedComponent, {
    });

    render(withStoreComponent);

    expect(screen.getByText(mockSmallFilm.name)).toBeInTheDocument();

  });
  it('should play', () => {
    const mockSmallFilm = SMALLFILMS[0];
    const preparedComponent = withHistory(
      <VideoPlayer src={mockSmallFilm.previewVideoLink} id={mockSmallFilm.id} width={280} height={175} poster={mockSmallFilm.previewImage} name={mockSmallFilm.name} />
    );
    const { withStoreComponent } = withStore(preparedComponent, {});

    render(withStoreComponent);

    HTMLVideoElement.prototype.play = vi.fn();
    fireEvent(screen.getByTestId('video-player'), new Event('loadeddata'));

    expect(screen.getByTestId<HTMLVideoElement>('video-player').play);

  });
});
