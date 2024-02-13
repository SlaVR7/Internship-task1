import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  return (
    <header>
      <nav className="header__nav">
        <div className="header__nav_item">
          <Link to="/" className={`header__nav_link ${location.pathname === '/' && 'active-link'}`}>
            Main page
          </Link>
        </div>
        <div className="header__nav_item">
          <Link
            to="/button"
            className={`header__nav_link ${location.pathname === '/button' && 'active-link'}`}
          >
            Button page
          </Link>
        </div>
        <div className="header__nav_item">
          <Link
            to="/date"
            className={`header__nav_link ${location.pathname === '/date' && 'active-link'}`}
          >
            Date page
          </Link>
        </div>
        <div className="header__nav_item">
          <Link
            to="/form"
            className={`header__nav_link ${location.pathname === '/form' && 'active-link'}`}
          >
            Form page
          </Link>
        </div>
      </nav>
    </header>
  );
}
