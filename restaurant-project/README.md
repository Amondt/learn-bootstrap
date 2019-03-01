# Canvas exercices

*created by A. Mondt*
<br/>
*last update March 2019*

## Description

A bootstrap pizza restaurant page creation
<br/>
[page](https://amondt.github.io/learn-bootstrap/restaurant-project/index.html)

## Instructions

- Emplacement : GitHub sur un repository intitulé "bootstrap-resto-website"
- Deadline : à indiquer
- Publier le résultat en tant que GitHub Page
- Remise du projet [via ce formulaire](https://goo.gl/forms/nkikL2FEy3O11gFw1)

### Quoi ?

Le site est un site vitrine d'une franchise de restaurants. La franchise est fictive mais le type de nourriture (burger, pizza, asiatique,...) est laissé au choix de l’apprenant.

Le site doit être **responsive** : au moins pour les petits écrans (xs) et les écrans moyens (md)

Minimum 5 pages accessibles par une barre de navigation (navbar) présente sur toutes les pages vers les différentes rubriques : Accueil, Carte, Photos, Restaurants, Contact.
Si vous souhaitez faire un site plus complet avec encore plus de trucs, faites-vous plaisir ! (mais seulement une fois que vous avez rempli le cahier des charges du client)

### Objectifs 
- Un fichier CSS pour tout le site (en plus de celui de Bootstrap, bien sûr. Contraintes : vous utiliserez le CDN.)
- Liens relatifs aux autres pages (pas de liens absolus)
- Fichiers rangés dans des dossiers (assets, puis css, js et img dedans)
- Utilisation de Font Awesome
- Le site doit être intégralement responsive.
- GitHub : le lien de la page GitHubPage se trouve à côté de la description (donc il faut une description au repo) ET on veut un readme
- N'oubliez pas le favicon
- Utilisez des images libre de droits (vous pouvez en trouver sur pexels, pixabay, unsplash,...)
- Lighthouse : 80% sur toutes les catégories (pour les PWA, il y a un nouveau repo avec les instructions)

#### Composition du website
Il faut au minimum :
- Une page **Accueil** avec un composant Jumbotron avec le logo ou le nom du restaurant qui s'anime comme dans votre précédent projet MainEventer.
- Une page **Carte** avec les menus présentés sous forme de liste groupée avec badges
- Une page **Photos** avec une galerie photos (minimum 10). On veut 4 photos sur chaque ligne en format Desktop, 2 en format Tablet et 1 en format smartphone.
- Une page **Restaurants** avec l'adresse, un plan d'accès et les heures d'ouverture d’au moins trois restaurants (c’est une franchise !)
- Une page **Contact** avec un formulaire de contact comprenant nom, prénom, e-mail, liste déroulante (objet du message avec un select et des options)), un champs de texte (pour le message), un bouton d'envoi avec glyphicon. Utilisez des labels pour lier les descriptions d'input avec leur input.

Si vous voulez des [idées de maquettes](mockup.md)...

#### Désirs du client

- Le client souhaite qu'à l'ouverture de la page d'accueil, il y ait un pop-up qui récupère le prénom du visiteur, puis affiche un "bonjour {nom du visiteur} !" avant le texte de présentation du restaurant.
- Le client souhaite que dans la partie Restaurants, en plus de l'affichage des horaires et des jours d'ouverture, il y ait une mention interactive "Nous sommes le { date et heure }, le restaurant est donc { ouvert / fermé }" en fonction de l'heure et la date de consultation du site.

#### Conseils
1. Prenez le temps qu’il vous faut.
2. N’hésitez pas à faire des dessins, des plans, à prendre des notes sur papier avant de commencer.
3. Lisez bien les consignes, lisez bien les consignes, lisez bien les consiiiiignes !!!
4. Préparer votre contenu, ensuite seulement appliquer la structure puis les classes et id et ensuite le CSS ! Ne vous éparpillez pas, allez-y pas à pas, page par page,...

#### BONUS

**Librairie conseillée :**
- GSAP animation pour les animations javascript poussée
- ScrollMagic pour trigeer des animations au scroll CSS/JS

**Système de commande**
Dans la page menu, faire en sorte qu'on puisse commander des plats. Un peu comme sur pizza.be


#### Not need to say but...
*pour ceux qui auraient l'audace d'y penser* :    
ne pas utiliser de thème déjà tout fait.

![The Internet is made of cats](https://akns-images.eonline.com/eol_images/Entire_Site/201478/rs_500x313-140808101821-tumblr_n2hjfcZqym1s3hp12o1_400.gif)