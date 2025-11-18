import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: 'message',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  // Options pré-remplies pour le sujet
  const sujetsOptions = [
    { value: 'message', label: 'Simple message pour l\'équipe' },
    { value: 'dedicace', label: 'Demande de dédicace' },
    { value: 'set-dj', label: 'Proposer un set DJ' },
    { value: 'partenariat', label: 'Partenariat / Sponsoring' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // ============================
    // ENVOI DU FORMULAIRE
    // ============================
    // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
    // Par exemple, vers une API backend, un service d'emailing, etc.
    console.log('Données du formulaire:', formData);
    
    // Affichage du message de confirmation
    setSubmitted(true);
    
    // Réinitialiser le formulaire après 3 secondes
    setTimeout(() => {
      setFormData({
        nom: '',
        email: '',
        sujet: 'message',
        message: ''
      });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="page contact-page">
      <div className="page-header">
        <h1>Contactez-nous</h1>
        <p className="subtitle">L'équipe Radio Sablettes Tamaris est à votre écoute</p>
      </div>

      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nom">
              <span className="label-icon">👤</span>
              Nom complet
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Votre nom"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <span className="label-icon">📧</span>
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre.email@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="sujet">
              <span className="label-icon">📝</span>
              Sujet de votre message
            </label>
            <select
              id="sujet"
              name="sujet"
              value={formData.sujet}
              onChange={handleChange}
              required
            >
              {sujetsOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">
              <span className="label-icon">💬</span>
              Votre message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Écrivez votre message ici..."
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            <span className="button-icon">📤</span>
            Envoyer le message
          </button>
        </form>
      ) : (
        <div className="confirmation-message">
          <div className="confirmation-icon">✅</div>
          <h2>Message envoyé avec succès !</h2>
          <p>Merci, votre message a bien été envoyé à l'équipe Radio Sablettes Tamaris.</p>
          <p className="confirmation-note">Nous vous répondrons dans les plus brefs délais.</p>
        </div>
      )}

      <div className="contact-info">
        <h3>Autres moyens de nous contacter</h3>
        <div className="contact-methods">
          <div className="contact-method">
            <span className="method-icon">📱</span>
            <div>
              <h4>Réseaux sociaux</h4>
              <p>Suivez-nous sur Facebook, Instagram et Twitter</p>
            </div>
          </div>
          <div className="contact-method">
            <span className="method-icon">📻</span>
            <div>
              <h4>En direct</h4>
              <p>Appelez-nous pendant nos émissions live</p>
            </div>
          </div>
          <div className="contact-method">
            <span className="method-icon">🏖️</span>
            <div>
              <h4>Studio</h4>
              <p>Les Sablettes - Tamaris, bord de mer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dev-note">
        <p>💡 <strong>Note développeur :</strong> Pour connecter ce formulaire à un backend ou service d'emailing, modifiez la fonction <code>handleSubmit</code> dans <code>Contact.jsx</code></p>
      </div>
    </div>
  );
};

export default Contact;
