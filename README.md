# 🎵 Radio Sablettes Tamaris (RST) - Application Web

Application web moderne et responsive pour Radio Sablettes Tamaris, la radio bord de mer du sud de la France. Mix sunset, chill, deep house et lounge.

![Radio Sablettes Tamaris](https://via.placeholder.com/800x400/0096c8/ffffff?text=Radio+Sablettes+Tamaris)

## 🌊 Fonctionnalités

- **🏠 Accueil** : Présentation de la radio avec hero section et événements à l'affiche
- **🎧 Écouter** : Lecteur audio en direct avec mode nuit
- **📅 Programmes** : Grille complète des programmes de la semaine
- **▶️ Replays** : Podcasts et replays des émissions passées
- **✉️ Contact** : Formulaire de contact avec options pré-remplies

## 🎨 Design

- **Thème bord de mer** : Couleurs bleu, turquoise, blanc et orange sunset
- **Responsive** : Optimisé pour mobile, tablette et desktop
- **Mode nuit** : Disponible sur la page Écouter
- **Navigation en bas** : Interface mobile-first avec navigation fixe

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

### Build de production

```bash
npm run build
```

### Prévisualisation du build

```bash
npm run preview
```

## 📝 Configuration et Personnalisation

### 1. Page Accueil (`src/pages/Accueil.jsx`)

Modifiez les constantes en haut du fichier :

```javascript
const radioName = "Radio Sablettes Tamaris";
const slogan = "La radio bord de mer, mix sunset, chill & deep house";
const description = "Votre description...";
```

Modifiez les événements dans le tableau `evenements`.

### 2. Page Écouter (`src/pages/Ecouter.jsx`)

#### Pour activer le flux audio :

```javascript
// Remplacez l'URL par votre flux audio réel
const audioStreamUrl = "https://votre-flux-audio.com/stream";
```

Décommentez le lecteur audio HTML5 dans le JSX (ligne ~95).

#### Pour intégrer un player YouTube/externe :

```javascript
// Remplacez par l'URL d'embed
const iframeEmbedUrl = "https://www.youtube.com/embed/VOTRE_VIDEO";
```

Décommentez la section iframe dans le JSX (ligne ~80).

#### Modifier les informations en cours :

```javascript
const currentShow = "Sunset Session";
const currentDj = "DJ Tamaris";
const currentTime = "18:00 - 20:00";
```

### 3. Page Programmes (`src/data/programmesData.js`)

Modifiez le tableau `programmesData` pour mettre à jour la grille des programmes :

```javascript
{
  jour: 'Lundi',
  programmes: [
    {
      horaire: '08:00 - 10:00',
      nom: 'Réveil Bord de Mer',
      type: 'Chill & Lounge',
      dj: 'DJ Marina'
    },
    // Ajoutez d'autres programmes...
  ]
}
```

### 4. Page Replays (`src/data/replaysData.js`)

Ajoutez vos replays dans le tableau `replaysData` :

```javascript
{
  id: 1,
  titre: 'Sunset Mix - Summer Vibes',
  description: 'Un voyage musical au coucher du soleil...',
  duree: '1h 30min',
  lien: 'https://www.youtube.com/watch?v=VOTRE_VIDEO',
  type: 'Vidéo YouTube'
}
```

### 5. Page Contact (`src/pages/Contact.jsx`)

Pour connecter le formulaire à un backend, modifiez la fonction `handleSubmit` :

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Exemple avec une API
  try {
    const response = await fetch('https://votre-api.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setSubmitted(true);
    }
  } catch (error) {
    console.error('Erreur:', error);
  }
};
```

## 🎨 Personnalisation des couleurs

Les couleurs principales sont définies dans `src/index.css` :

```css
:root {
  --color-primary: #0096c8;          /* Bleu principal */
  --color-primary-light: #40d4ff;    /* Bleu clair */
  --color-secondary: #ff9a56;        /* Orange sunset */
  --color-secondary-light: #ff6b9d;  /* Rose sunset */
}
```

## 📱 Navigation

L'application utilise une navigation en bas de l'écran (mobile-first) avec 5 sections :

1. 🏠 **Accueil** - Présentation et événements
2. 🎧 **Écouter** - Lecteur en direct
3. 📅 **Programmes** - Grille hebdomadaire
4. ▶️ **Replays** - Podcasts et vidéos
5. ✉️ **Contact** - Formulaire de contact

## 🛠️ Technologies utilisées

- **React** - Bibliothèque UI
- **Vite** - Build tool et dev server
- **CSS moderne** - Flexbox, Grid, animations
- **JavaScript ES6+** - Code moderne et propre

## 📂 Structure du projet

```
radio-sablettes-tamaris/
├── public/              # Fichiers statiques
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── Navigation.jsx
│   │   └── Navigation.css
│   ├── pages/           # Pages de l'application
│   │   ├── Accueil.jsx/css
│   │   ├── Ecouter.jsx/css
│   │   ├── Programmes.jsx/css
│   │   ├── Replays.jsx/css
│   │   └── Contact.jsx/css
│   ├── data/            # Données de configuration
│   │   ├── programmesData.js
│   │   └── replaysData.js
│   ├── App.jsx          # Composant principal
│   ├── App.css          # Styles globaux
│   ├── index.css        # Reset et variables CSS
│   └── main.jsx         # Point d'entrée
├── package.json
└── README.md
```

## 🎯 Points d'amélioration futurs

- [ ] Intégration d'un vrai flux audio
- [ ] Backend pour le formulaire de contact
- [ ] Système de gestion de contenu (CMS)
- [ ] Intégration des réseaux sociaux
- [ ] Application mobile native (React Native)
- [ ] Player audio avec contrôles avancés
- [ ] Système de favoris et playlists
- [ ] Notifications push pour les émissions

## 📞 Support

Pour toute question ou problème, contactez l'équipe Radio Sablettes Tamaris via le formulaire de contact de l'application.

## 📄 Licence

© 2024 Radio Sablettes Tamaris. Tous droits réservés.

---

**Développé avec ❤️ pour Radio Sablettes Tamaris** 🌊🎵🌅
