import { programmesData } from '../data/programmesData';
import './Programmes.css';

const Programmes = () => {
  return (
    <div className="page programmes-page">
      <div className="page-header">
        <h1>Grille des Programmes</h1>
        <p className="subtitle">Retrouvez tous vos programmes préférés</p>
      </div>

      <div className="programmes-container">
        {programmesData.map((journee, index) => (
          <div key={index} className="day-section">
            <h2 className="day-title">{journee.jour}</h2>
            <div className="programmes-list">
              {journee.programmes.map((programme, idx) => (
                <div key={idx} className="programme-card">
                  <div className="programme-time">
                    <span className="time-icon">🕐</span>
                    <span className="time-text">{programme.horaire}</span>
                  </div>
                  <div className="programme-details">
                    <h3 className="programme-name">{programme.nom}</h3>
                    <div className="programme-meta">
                      <span className="programme-type">
                        <span className="type-icon">🎵</span>
                        {programme.type}
                      </span>
                      <span className="programme-dj">
                        <span className="dj-icon">🎧</span>
                        {programme.dj}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="programmes-note">
        <p>💡 Les horaires et programmes peuvent varier. Suivez-nous sur les réseaux sociaux pour les mises à jour en temps réel !</p>
      </div>
    </div>
  );
};

export default Programmes;
