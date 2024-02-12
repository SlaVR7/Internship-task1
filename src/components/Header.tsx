import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <nav className="header__nav">
        <Link to="/" className="header__nav_item">
          Main page
        </Link>
        <Link to="/button" className="header__nav_item">
          Button page
        </Link>
        <Link to="/date" className="header__nav_item">
          Date page
        </Link>
        <Link to="/form" className="header__nav_item">
          Form page
        </Link>
      </nav>
    </header>
  );
}
