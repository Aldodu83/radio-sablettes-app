import './Accueil.css';

const Accueil = ({ onNavigate }) => {
  // ============================
  // TEXTES MODIFIABLES
  // ============================
  const radioName = "Radio Sablettes Tamaris";
  const slogan = "La radio bord de mer, mix sunset, chill & deep house";
  const description = "Découvrez l'ambiance unique de la côte méditerranéenne avec nos DJ locaux et nos sélections musicales exclusives. Du lever au coucher du soleil, RST vous accompagne avec les meilleurs sons house, deep et lounge.";

  const evenements = [
    {
      id: 1,
      titre: 'Soirée Sunset Mix',
      date: 'Vendredi 22 Nov',
      description: 'Une soirée magique au coucher du soleil avec nos meilleurs DJs',
      image: '🌅'
    },
    {
      id: 2,
      titre: 'Deep House du Vendredi',
      date: 'Tous les vendredis',
      description: 'De 18h à 20h, plongez dans l\'univers deep house avec DJ Sablettes',
      image: '🎵'
    },
    {
      id: 3,
      titre: 'Chill du Dimanche Matin',
      date: 'Tous les dimanches',
      description: 'Réveillez-vous en douceur avec notre sélection lounge et chill',
      image: '☕'
    }
  ];

  return (
    <div className="page accueil-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="radio-name">{radioName}</h1>
          <p className="slogan">{slogan}</p>
          <button className="cta-button" onClick={() => onNavigate('ecouter')}>
            <span className="play-icon">▶️</span>
            Écouter maintenant
          </button>
        </div>
      </div>

      {/* Présentation */}
      <section className="presentation-section">
        <h2>Bienvenue sur RST</h2>
        <p className="description">{description}</p>
      </section>

      {/* À l'affiche cette semaine */}
      <section className="events-section">
        <h2>À l'affiche cette semaine</h2>
        <div className="events-grid">
          {evenements.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-icon">{event.image}</div>
              <h3>{event.titre}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="cta-section">
        <h2>Rejoignez la communauté RST</h2>
        <p>Suivez-nous pour ne rien rater de nos émissions, soirées et sets exclusifs !</p>
        <div className="social-links">
          <button className="social-button">📘 Facebook</button>
          <button className="social-button">📷 Instagram</button>
          <button className="social-button">🎵 Mixcloud</button>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
