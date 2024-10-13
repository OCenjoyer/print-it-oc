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
  
  let indiceActuel = 0;
  
  const flecheGauche = document.querySelector('.arrow_left');
  const flecheDroite = document.querySelector('.arrow_right');
  const imageDiaporama = document.querySelector('.banner-img');
  const pointsContainer = document.querySelector('.dots');
  
  diaporama.forEach((slide, index) => {
	const point = document.createElement('div');
	point.classList.add('dot');
	if (index === 0) {
	  point.classList.add('dot_selected');
	}
	pointsContainer.appendChild(point);
  });
  
  flecheGauche.addEventListener('click', () => {
	precedentSlide();
  });
  
  flecheDroite.addEventListener('click', () => {
	suivantSlide();
  });
  
  function precedentSlide() {
	indiceActuel--;
	if (indiceActuel < 0) {
	  indiceActuel = diaporama.length - 1;
	}
	afficherImage();
	updatePoints();
  }
  
  function suivantSlide() {
	indiceActuel++;
	if (indiceActuel >= diaporama.length) {
	  indiceActuel = 0;
	}
	afficherImage();
	updatePoints();
  }
  
  function afficherImage() {
	const slideActuel = diaporama[indiceActuel];
	imageDiaporama.src = `./assets/images/slideshow/${slideActuel.image}`;
	imageDiaporama.alt = slideActuel.legende;
	
	const legendeElement = document.querySelector('#banner p');
	legendeElement.innerHTML = slideActuel.legende;
  }
  
  function updatePoints() {
	const points = document.querySelectorAll('.dot');
	points.forEach((point, index) => {
	  point.classList.remove('dot_selected');
	  if (index === indiceActuel) {
		point.classList.add('dot_selected');
	  }
	});
  }
  
  afficherImage();