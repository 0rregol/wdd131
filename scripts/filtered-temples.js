const hamburguesa = document.getElementById('hamburger');
const enlaces = document.querySelector('.nav-links');

hamburguesa.addEventListener('click', () => {
    enlaces.classList.toggle('show');
});

const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = document.lastModified;

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Concepción Chile Temple",
		location: "1525 Pedro de Valdivia Concepción, Bio-Bio",
		dedicated: "2018, October, 28",
		area: 23095,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/concepcion-chile-temple/concepcion-chile-temple-273-main.jpg"
	  },
	  {
		templeName: "Santiago Chile Temple",
		location: "Pocuro #1940 Providencia, Santiago",
		dedicated: "1983, September, 15",
		area: 20831,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/_temp/024-Santiago-Chile-Temple.jpg"
	  },
	  {
		templeName: "Antofagasta Chile Temple",
		location: "Avenida de Las Palmeras 44, Antofagasta",
		dedicated: "2025",
		area: 23000,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-48608-main.jpg"
	  },
  ];


  displayTemples(temples);

  function displayTemples(filteredTemples) {
	const container = document.getElementById('temple-cards');
	container.innerHTML = ""; // Limpia lo anterior
  
	filteredTemples.forEach(temple => {
	  const card = document.createElement('div');
	  card.classList.add('card');
  
	  card.innerHTML = `
		<h2>${temple.templeName}</h2>
		<p><strong>Location:</strong> ${temple.location}</p>
		<p><strong>Dedicated:</strong> ${temple.dedicated}</p>
		<p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
		<img src="${temple.imageUrl}" alt="${temple.templeName}">
	  `;
  
	  container.appendChild(card);
	});
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
	link.addEventListener('click', (event) => {
	  event.preventDefault(); // Evita que recargue la página
	  const filter = event.target.getAttribute('data-filter');
  
	  let filtered = [];
  
	  switch (filter) {
		case "old":
		  filtered = temples.filter(t => {
			const year = parseInt(t.dedicated.split(",")[0]);
			return year < 1900;
		  });
		  break;
		case "new":
		  filtered = temples.filter(t => {
			const year = parseInt(t.dedicated.split(",")[0]);
			return year > 2000;
		  });
		  break;
		case "large":
		  filtered = temples.filter(t => t.area > 90000);
		  break;
		case "small":
		  filtered = temples.filter(t => t.area < 10000);
		  break;
		case "home":
		default:
		  filtered = temples;
		  break;
	  }
  
	  displayTemples(filtered);
	});
  });