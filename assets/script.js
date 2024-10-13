// Tableau contenant les données du diaporama : image et légende
const diaporama = [
	{
	  "image": "slide1.jpg",
	  "legende": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "slide2.jpg",
	  "legende": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image": "slide3.jpg",
	  "legende": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "slide4.png",
	  "legende": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];
  
  // Variable pour suivre l'indice de la diapositive actuelle
  let indiceActuel = 0;
  
  // Sélection des éléments du DOM pour les flèches, l'image et les points
  const flecheGauche = document.querySelector('.arrow_left');
  const flecheDroite = document.querySelector('.arrow_right');
  const imageDiaporama = document.querySelector('.banner-img');
  const pointsContainer = document.querySelector('.dots');
  
  // Création des points indicateurs pour chaque diapositive
  diaporama.forEach((slide, index) => {
	const point = document.createElement('div'); // Création d'un élément <div> pour chaque point
	point.classList.add('dot'); // Ajout de la classe 'dot'
	if (index === 0) {
	  point.classList.add('dot_selected'); // Sélection du point correspondant à la première diapositive
	}
	pointsContainer.appendChild(point); // Ajout du point au conteneur des points
  });
  
  // Ajout d'événements pour les flèches de navigation
  flecheGauche.addEventListener('click', () => {
	precedentSlide(); // Appelle la fonction pour passer à la diapositive précédente
  });
  
  flecheDroite.addEventListener('click', () => {
	suivantSlide(); // Appelle la fonction pour passer à la diapositive suivante
  });
  
  // Fonction pour passer à la diapositive précédente
  function precedentSlide() {
	indiceActuel--; // Décrémente l'indice actuel
	if (indiceActuel < 0) {
	  indiceActuel = diaporama.length - 1; // Revient à la dernière diapositive si l'indice est inférieur à 0
	}
	afficherImage(); // Met à jour l'image affichée
	updatePoints(); // Met à jour l'affichage des points
  }
  
  // Fonction pour passer à la diapositive suivante
  function suivantSlide() {
	indiceActuel++; // Incrémente l'indice actuel
	if (indiceActuel >= diaporama.length) {
	  indiceActuel = 0; // Revient à la première diapositive si l'indice dépasse le nombre de diapositives
	}
	afficherImage(); // Met à jour l'image affichée
	updatePoints(); // Met à jour l'affichage des points
  }
  
  // Fonction pour afficher l'image et la légende correspondant à la diapositive actuelle
  function afficherImage() {
	const slideActuel = diaporama[indiceActuel]; // Récupère les données de la diapositive actuelle
	imageDiaporama.src = `./assets/images/slideshow/${slideActuel.image}`; // Met à jour la source de l'image
	imageDiaporama.alt = slideActuel.legende; // Met à jour l'attribut alt de l'image avec la légende
  
	const legendeElement = document.querySelector('#banner p'); // Sélectionne l'élément de la légende
	legendeElement.innerHTML = slideActuel.legende; // Met à jour le contenu HTML de la légende
  }
  
  // Fonction pour mettre à jour l'affichage des points indicateurs
  function updatePoints() {
	const points = document.querySelectorAll('.dot'); // Sélectionne tous les points
	points.forEach((point, index) => {
	  point.classList.remove('dot_selected'); // Retire la classe 'dot_selected' de tous les points
	  if (index === indiceActuel) {
		point.classList.add('dot_selected'); // Ajoute la classe 'dot_selected' au point correspondant à l'indice actuel
	  }
	});
  }
  
  // Affiche l'image et la légende de la première diapositive au chargement
  afficherImage();
  