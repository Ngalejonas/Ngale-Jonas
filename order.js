const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

function searchRestaurants() {
  const searchTerm = searchInput.value.trim();
  if (searchTerm !== '') {
    // Perform search logic here, such as fetching data from an API and displaying results
    console.log(`Searching for restaurants with term "${searchTerm}"`);
  }
}

searchBtn.addEventListener('click', searchRestaurants);
searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    searchRestaurants();
  }
});