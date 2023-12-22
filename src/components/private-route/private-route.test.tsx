import { beforeAll, beforeEach, describe } from 'vitest';
import { createMemoryHistory, MemoryHistory } from 'history';
import { Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component.tsx';
import PrivateRoute from './private-route.tsx';
import { AppRoute, NameSpace, AuthStatus } from '../../const.tsx';

describe('Component: PrivateRoute', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push('/mylist');
  });

  it('should render component for public route, when user not authorized', () => {
    const expectedText = 'public route';
    const notExpectedText = 'private route';
    const preparedComponent = withHistory(
      <Routes>
        <Route path={AppRoute.Login} element={<span>{expectedText}</span>} />
        <Route
          path={AppRoute.MyListEnum}
          element={
            <PrivateRoute>
              <span>{notExpectedText}</span>
            </PrivateRoute>
          }
        />
      </Routes>,
      mockHistory
    );
    const { withStoreComponent } = withStore(preparedComponent, {
      [NameSpace.User]: { authorizationStatus: AuthStatus.NoAuth, userImage: '' },
    });

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {
    const notExpectedText = 'public route';
    const expectedText = 'private route';
    const preparedComponent = withHistory(
      <Routes>
        <Route path={AppRoute.Login} element={<span>{notExpectedText}</span>} />
        <Route
          path={AppRoute.MyListEnum}
          element={
            <PrivateRoute>
              <span>{expectedText}</span>
            </PrivateRoute>
          }
        />
      </Routes>,
      mockHistory
    );
    const { withStoreComponent } = withStore(preparedComponent, {
      [NameSpace.User]: { authorizationStatus: AuthStatus.Auth, userImage: '' },
    });

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});
