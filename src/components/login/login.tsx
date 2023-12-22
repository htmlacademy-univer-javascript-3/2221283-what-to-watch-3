import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Link to={'/login'} className="user-block__link" style={{ textDecoration: 'none' }}>Sign in</Link>
  );
}
