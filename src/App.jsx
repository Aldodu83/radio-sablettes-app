import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Accueil from './pages/Accueil';
import Ecouter from './pages/Ecouter';
import Programmes from './pages/Programmes';
import Replays from './pages/Replays';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('accueil');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fonction pour rendre la page active
  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <Accueil onNavigate={setCurrentPage} />;
      case 'ecouter':
        return <Ecouter isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
      case 'programmes':
        return <Programmes />;
      case 'replays':
        return <Replays />;
      case 'contact':
        return <Contact />;
      default:
        return <Accueil onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="page-container">
        {renderPage()}
      </div>
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
