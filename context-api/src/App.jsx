import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="container">
          <Header />
          <MainContent />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
