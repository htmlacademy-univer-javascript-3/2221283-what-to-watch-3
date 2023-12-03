import {Navigate} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../redux/store/user-process/user-selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;
  const authorizationStatus = useAppSelector(getAuthStatus);

  return (
    authorizationStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
