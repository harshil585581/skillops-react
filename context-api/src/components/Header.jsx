import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, login, logout, isAuthenticated } = useContext(AuthContext);

  return (
    <header className={`header ${theme}`}>
      <div className="logo">
        <h2>Context API Demo</h2>
      </div>
      <div className="actions">
        <span>Current Theme: {theme}</span>
        <button className="toggle-btn" onClick={toggleTheme}>
          Toggle Theme
        </button>
        
        {isAuthenticated ? (
          <div className="auth-actions">
            <span>Welcome, {user.name}!</span>
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <button className="login-btn" onClick={() => login('Developer')}>
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
