import { replaysData } from '../data/replaysData';
import './Replays.css';

const Replays = () => {
  const handleOpenLink = (lien) => {
    window.open(lien, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page replays-page">
      <div className="page-header">
        <h1>Replays & Podcasts</h1>
        <p className="subtitle">Rattrapez les émissions que vous avez manquées</p>
      </div>

      <div className="replays-grid">
        {replaysData.map((replay) => (
          <div key={replay.id} className="replay-card">
            <div className="replay-header">
              <div className="replay-icon">
                {replay.type.includes('Vidéo') ? '🎥' : '🎵'}
              </div>
              <span className="replay-type">{replay.type}</span>
            </div>
            
            <div className="replay-content">
              <h3 className="replay-title">{replay.titre}</h3>
              <p className="replay-description">{replay.description}</p>
              
              <div className="replay-footer">
                <span className="replay-duration">
                  <span className="duration-icon">⏱️</span>
                  {replay.duree}
                </span>
                <button 
                  className="replay-button"
                  onClick={() => handleOpenLink(replay.lien)}
                >
                  {replay.type.includes('Vidéo') ? 'Voir la vidéo' : 'Écouter'}
                  <span className="button-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="replays-note">
        <h3>💡 Comment ajouter vos replays</h3>
        <p>Pour ajouter de nouveaux replays, modifiez le fichier <code>src/data/replaysData.js</code></p>
        <p>Vous pouvez y ajouter des liens vers YouTube, Soundcloud, Mixcloud ou toute autre plateforme.</p>
      </div>
    </div>
  );
};

export default Replays;
