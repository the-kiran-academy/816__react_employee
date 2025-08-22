
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">Employee Portal</div>
      <nav className="header__nav">
        <a href="/login" className="header__link">Login</a>
        <a href="/register" className="header__link">Register</a>
      </nav>
    </header>
  );
}

export default Header
