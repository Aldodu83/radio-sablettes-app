import './Navigation.css';

const Navigation = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'accueil', label: 'Accueil', icon: '🏠' },
    { id: 'ecouter', label: 'Écouter', icon: '🎧' },
    { id: 'programmes', label: 'Programmes', icon: '📅' },
    { id: 'replays', label: 'Replays', icon: '▶️' },
    { id: 'contact', label: 'Contact', icon: '✉️' },
  ];

  return (
    <nav className="bottom-navigation">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
          onClick={() => onNavigate(item.id)}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
