import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className="logo">
      <Link to={'/'} className="logo__link" style={{ textDecoration: 'none' }}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
