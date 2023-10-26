import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={'/mylist'} style={{ textDecoration: 'none' }}><img src="img/avatar.jpg" alt="User avatar" width={63} height={63} /></Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link to={'/login'} className="user-block__link" style={{ textDecoration: 'none' }}>Sign out</Link>
      </li>
    </ul>
  );
}
