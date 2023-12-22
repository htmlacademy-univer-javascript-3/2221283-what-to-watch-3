import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import Player from './player';
import { NameSpace } from '../../const';
import { FILM } from '../../utils/films';
import userEvent from '@testing-library/user-event';


describe('Page: Player', () => {
  it('should render correct', () => {
    const mockFilm = FILM;

    const withHistoryComponent = withHistory(<Player />);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      [NameSpace.Data]: { loadedFilm: mockFilm }
    });

    render(withStoreComponent);

    expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
    expect(screen.getByTestId('play-button')).toBeInTheDocument();
  });


  it('should play when click on play', async () => {
    const mockVideoPlay = vi.fn();
    HTMLVideoElement.prototype.play = mockVideoPlay;
    const mockFilm = FILM;

    const withHistoryComponent = withHistory(<Player />);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      [NameSpace.Data]: { loadedFilm: mockFilm }
    });

    render(withStoreComponent);
    await userEvent.click(screen.getByTestId('play-button'));

    expect(mockVideoPlay).toBeCalled();
  });

  it('should pause when click on play second time', async () => {
    const mockVideoPause = vi.fn();
    HTMLVideoElement.prototype.pause = mockVideoPause;
    const mockFilm = FILM;

    const withHistoryComponent = withHistory(<Player />);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      [NameSpace.Data]: { loadedFilm: mockFilm }
    });

    render(withStoreComponent);
    await userEvent.click(screen.getByTestId('play-button'));
    await userEvent.click(screen.getByTestId('play-button'));
    expect(mockVideoPause).toBeCalled();
  });
});
