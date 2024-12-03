// Store data for search functionality
let destinations = [];

// Load destination data dynamically
const loadDestinations = () => {
  fetch('assets/js/data.json')
    .then(response => response.json())
    .then(data => {
      destinations = data;
      displayDestinations(data);
    });
};

// Display recommendations
const displayDestinations = (data) => {
  const container = document.querySelector('#destinations-container');
  container.innerHTML = '';
  data.forEach(dest => {
    const card = `
      <div class="destination-card">
        <img src="${dest.image}" alt="${dest.name}">
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
      </div>`;
    container.innerHTML += card;
  });
};

// Filter destinations based on search
const filterRecommendations = () => {
  const query = document.querySelector('#search').value.toLowerCase();
  const filtered = destinations.filter(dest =>
    dest.name.toLowerCase().includes(query) || dest.description.toLowerCase().includes(query) || dest.category.toLowerCase().includes(query)
  );
  displayDestinations(filtered);
};

// Book Now button functionality
const bookNow = () => {
    window.location.href = 'contact.html';
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadDestinations);


