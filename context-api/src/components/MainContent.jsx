import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

const MainContent = () => {
  const { theme } = useContext(ThemeContext);
  const { isAuthenticated, user } = useContext(AuthContext);

  return (
    <main className={`main-content ${theme}`}>
      <h1>React Context API Experiment</h1>
      
      <div className="card">
        <h3>Dashboard</h3>
        <p>
          This section reacts to the <strong>ThemeContext</strong> and the{' '}
          <strong>AuthContext</strong>.
        </p>
        
        {isAuthenticated ? (
          <div className="welcome-box mt-20">
            <p>Access Granted.</p>
            <p>Here is your personalized data, <strong>{user.name}</strong>!</p>
          </div>
        ) : (
          <div className="alert-box mt-20">
            <p>Access Denied.</p>
            <p>Please log in above to see personalized data.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default MainContent;
