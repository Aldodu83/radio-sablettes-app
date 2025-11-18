import { useState } from 'react';
import './Ecouter.css';

const Ecouter = ({ isDarkMode, setIsDarkMode }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // ============================
  // CONFIGURATION AUDIO/VIDEO
  // ============================
  // Remplacez l'URL ci-dessous par votre flux audio réel
  const audioStreamUrl = "https://exemple.com/stream"; // À REMPLACER
  
  // Pour intégrer une playlist YouTube ou autre lecteur :
  // Décommentez la section iframe dans le JSX et commentez le lecteur audio
  const iframeEmbedUrl = ""; // À REMPLACER par l'URL d'embed YouTube/autre

  // ============================
  // INFORMATIONS ÉMISSION EN COURS
  // ============================
  // Modifiez ces informations pour afficher ce qui est à l'antenne
  const currentShow = "Sunset Session";
  const currentDj = "DJ Tamaris";
  const currentTime = "18:00 - 20:00";

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Ici, vous pourrez ajouter la logique pour démarrer/arrêter le flux audio
    console.log(isPlaying ? 'Pause' : 'Play', audioStreamUrl);
  };

  return (
    <div className={`page ecouter-page ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* En-tête avec mode nuit */}
      <div className="page-header">
        <h1>Écouter RST</h1>
        <button 
          className="dark-mode-toggle"
          onClick={() => setIsDarkMode(!isDarkMode)}
          title="Mode nuit"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Lecteur principal */}
      <div className="player-container">
        <div className="player-visual">
          <div className={`wave-animation ${isPlaying ? 'playing' : ''}`}>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        </div>

        {/* Gros bouton Play/Pause */}
        <button 
          className={`play-button ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlay}
        >
          {isPlaying ? '⏸' : '▶️'}
        </button>

        {/* Informations en cours */}
        <div className="now-playing">
          <h2>En ce moment à l'antenne</h2>
          <div className="show-info">
            <p className="show-name">{currentShow}</p>
            <p className="dj-name">avec {currentDj}</p>
            <p className="show-time">{currentTime}</p>
          </div>
        </div>

        {/* 
        ============================
        SECTION IFRAME (Pour YouTube/Autre lecteur)
        ============================
        Décommentez cette section si vous souhaitez intégrer un lecteur YouTube
        ou autre plateforme au lieu du lecteur audio ci-dessus
        
        <div className="iframe-player">
          <iframe
            src={iframeEmbedUrl}
            title="Radio Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: '100%',
              height: '400px',
              borderRadius: '20px',
              border: 'none'
            }}
          ></iframe>
        </div>
        */}

        {/* 
        ============================
        LECTEUR AUDIO HTML5
        ============================
        Décommentez cette section pour activer un vrai lecteur audio HTML5
        et remplacez audioStreamUrl par votre URL de stream
        
        <audio
          id="radio-audio"
          src={audioStreamUrl}
          preload="none"
          style={{ display: 'none' }}
        ></audio>
        */}
      </div>

      {/* Informations supplémentaires */}
      <div className="player-info">
        <div className="info-card">
          <span className="info-icon">📻</span>
          <div>
            <h3>Qualité Audio</h3>
            <p>Stream HD 320kbps</p>
          </div>
        </div>
        <div className="info-card">
          <span className="info-icon">🎵</span>
          <div>
            <h3>Style</h3>
            <p>Deep House & Chill</p>
          </div>
        </div>
        <div className="info-card">
          <span className="info-icon">🌊</span>
          <div>
            <h3>Direct Live</h3>
            <p>24/7 depuis les Sablettes</p>
          </div>
        </div>
      </div>

      {/* Note pour le développeur */}
      <div className="dev-note">
        <p>💡 <strong>Note :</strong> Pour activer le flux audio réel, modifiez la variable <code>audioStreamUrl</code> dans le fichier <code>Ecouter.jsx</code> et décommentez le lecteur audio HTML5.</p>
        <p>Pour intégrer un lecteur YouTube ou autre, décommentez la section iframe et renseignez <code>iframeEmbedUrl</code>.</p>
      </div>
    </div>
  );
};

export default Ecouter;
