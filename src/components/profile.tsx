import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { AuthStatus } from '../const';
import Login from './login';
import Logout from './logout';

export default function Profile() {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuth = authStatus === AuthStatus.Auth;
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={'/mylist'} style={{ textDecoration: 'none' }}><img src="img/avatar.jpg" alt="User avatar" width={63} height={63} /></Link>
        </div>
      </li>
      <li className="user-block__item">
        {isAuth ? <Logout /> : <Login />}
      </li>
    </ul>
  );
}
