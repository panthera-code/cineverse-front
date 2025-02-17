# CinéVerse - front

Ce front fait partie de mon projet "CinéVerse".

# Documentation Projet "CinéVerse"

## 1. Introduction

**Titre du projet** : CinéVerse 2.0

**Description du projet** : CinéVerse 2.0 est une application web de streaming de contenu cinématographique inspirée de la plateforme Netflix pour le design et Allociné pour le contenu. Elle vise à proposer aux utilisateurs des informations détaillées sur les films, séries, documentaires, et animations, ainsi que des recommandations personnalisées basées sur leurs préférences.

**Objectifs** :
- Permettre aux utilisateurs de rechercher et consulter les informations de films et séries.
- Offrir une interface utilisateur immersive et intuitive, inspirée de Netflix.
- Afficher des recommandations personnalisées pour chaque utilisateur.

**Technologies** :
- Frontend : React (Vite.js)
- Backend : Node.js avec Express
- Base de données : MySQL
- API pour données de films : TMDb (The Movie Database API) ou une base de données personnelle

---

## 2. Conception du Projet

### 2.1. Fonctionnalités Principales

1. **Page d'accueil** : 
   - Présente des suggestions de contenu (nouveautés, top-rated, etc.).
   - Design type “bandeau de carrousel” pour les films en tendance.

2. **Recherche** : 
   - Barre de recherche permettant de trouver un film ou une série.
   - Suggestions instantanées basées sur les mots-clés.

3. **Fiches de contenu** : 
   - Description complète du film ou de la série : résumé, genre, casting, note, date de sortie.
   - Bande-annonce intégrée, si disponible.

4. **Recommandations** : 
   - Suggestions personnalisées basées sur les films ou séries déjà consultés par l'utilisateur.

5. **Gestion de profil utilisateur** :
   - Création et gestion d'un profil utilisateur (inscription, connexion).
   - Historique de visionnage et listes de favoris.
   
6. **Notation et Avis** : 
   - Les utilisateurs peuvent noter les films et séries et écrire des avis.

7. **Design et UX/UI** : 
   - Interface immersive avec des vignettes pour chaque contenu (inspiration Netflix).
   - Utilisation de tons sombres pour une meilleure immersion.

### 2.2. Structure de la Base de Données

1. **Utilisateur** :
   - `id`
   - `nom_utilisateur`
   - `email`
   - `mot_de_passe` (hashé)
   - `historique` (liste des films/séries vus)
   - `favoris` (liste des films/séries favoris)
   
2. **Film/Série** :
   - `id`
   - `titre`
   - `description`
   - `date_sortie`
   - `genre`
   - `casting` (liste des acteurs et réalisateurs)
   - `note`
   - `bande_annonce_url`
   
3. **Avis** :
   - `id`
   - `utilisateur_id`
   - `contenu_id` (id du film ou de la série)
   - `note`
   - `commentaire`
   - `date`

---

## 3. Architecture du Projet

**Modèle d'architecture** : MVC (Modèle-Vue-Contrôleur)  
**Modules** :
- **Frontend** : Vite.js (ou React pour une SPA)
- **Backend** : Node.js avec Express pour gérer les requêtes HTTP, avec une API RESTful pour interagir avec le frontend.
- **Base de données** : MySQL pour stocker les informations utilisateurs, les contenus et les avis.

### 3.1. Schéma d'architecture

1. **Client (Frontend)** :
   - Interface utilisateur pour la navigation et les interactions avec le contenu.
   - Communication avec le backend via des requêtes HTTP pour les données (Axios).

2. **Serveur (Backend)** :
   - Gère les requêtes du client et communique avec la base de données.
   - Fournit des endpoints pour récupérer les informations de contenu, ajouter aux favoris, etc.
   
3. **Base de données** :
   - Stockage des informations de contenu (films et séries), des utilisateurs et des avis.

---

## 4. Design de l'Interface (UI/UX)

1. **Inspiration Netflix** : 
   - Un design fluide et intuitif pour la navigation.
   - Utilisation d’un **thème sombre** pour l’interface avec des vignettes pour les films.
   
2. **Pages Principales** :
   - **Page d'accueil** : Présentation des catégories de films et séries en carrousel.
   - **Page de contenu** : Affiche les détails d’un film ou d’une série avec un aperçu en vidéo.
   - **Page de profil utilisateur** : Permet de voir les favoris, l’historique, et de modifier le profil.
   
3. **Wireframes (croquis d’interface)** : 
   - **Page d'accueil** avec bandeaux de contenu en carrousel.
   - **Page de détails** du film ou de la série avec synopsis, casting, et bande-annonce.
   - **Page de profil utilisateur** avec gestion des favoris et historique de visionnage.

---

## 5. Implémentation

### 5.1. Frontend

1. **Composants Vite.js (ou React)** :
   - `Header` : Barre de navigation et recherche.
   - `ContentCard` : Carte de chaque film ou série.
   - `Carousel` : Carrousel de contenus populaires ou récents.
   - `UserProfile` : Gestion des favoris et de l’historique de l’utilisateur.

2. **Interactions** :
   - Gestion des événements de clic sur les vignettes pour ouvrir les pages de détails.
   - Système de filtre et de tri pour les contenus.

### 5.2. Backend

1. **Endpoints** :
   - `GET /films` : Récupération de tous les films/séries.
   - `GET /films/:id` : Récupération d'un film ou d'une série par ID.
   - `POST /users` : Création d'un utilisateur.
   - `POST /avis` : Ajout d’un avis utilisateur.

2. **Contrôleurs** : Gestion de la logique pour chaque fonctionnalité.

### 5.3. Intégration avec une API de Films

Utilisation de l'API **TMDb** pour récupérer des données de films et séries si la base de données personnelle ne contient pas encore de données.

---

## 6. Tests et Validation

1. **Tests unitaires** : Tests sur les composants frontend et sur les routes backend.
2. **Tests fonctionnels** : Vérification de la bonne exécution des fonctionnalités principales.
3. **Tests d’intégration** : Tests pour s’assurer que les modules backend et frontend fonctionnent bien ensemble.
4. **Validation** : Évaluation par des utilisateurs pour recueillir leurs impressions sur l'ergonomie.

---

## 7. Déploiement

1. **Environnement** : Heroku, AWS, ou une plateforme de déploiement compatible pour l’hébergement.
2. **Base de données** : MySQL pour une base de données cloud.
3. **Serveur web** : Configuration du serveur web (Nginx) pour servir l’application.

---

## 8. Conclusion et Évolutions Futures

**Résumé du projet** : CinéVerse est une application immersive inspirée d'Allociné et de Netflix, qui propose aux utilisateurs une expérience fluide de découverte et de gestion de contenu cinématographique.

**Améliorations potentielles** :
- Intégration d'une fonctionnalité de streaming (si possible légalement).
- Ajout d’une intelligence artificielle pour des recommandations plus précises.
- Développement d’une application mobile pour une expérience multi-plateformes.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
