const HOLIDAYS_API_KEY = "2dbcfa8276724205e54379f448524e30270f7fef";
const HOLIDAYS_API_BASE_URL = "https://calendarific.com/api/v2";

/* Fetch supported countries Logic */

const supportedCountriesPromise = (async function() {
  const response = await fetch(`${HOLIDAYS_API_BASE_URL}/countries?api_key=${HOLIDAYS_API_KEY}`);
  const data = await response.json();
  return data.response.countries;
}());


/* Search for a country Logic*/

const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", (e) => {
  // prevent form from submitting
  e.preventDefault();
  // get the search keyword
  const serachKeyword = capitalize(searchInput.value.trim().toLowerCase());
  // convert the keyword (country) to a country code if it is supported by the API
  supportedCountriesPromise.then((countries) => {
    const country = countries.filter(country => country["country_name"] === serachKeyword)[0];
    if(country) {
      localStorage.setItem("country", country["country_name"]);
      localStorage.setItem("countryCode", country["iso-3166"]);
      searchInput.value = "";
      window.location.href = "../holidays-page/holidays.html";
    }
    else {
      // TODO: Create a nice modal to display a friendly error
      console.log("country is not found!")
    }
  })
});

function capitalize(text) {
  const array = text.split(" ");
  return array.map(word => word.slice(0,1).toUpperCase() + word.slice(1, word.length)).join(" ");
}

/* Hotel controls horizontal scrolling Logic */

(function() {
  let previousControlId = 1;
  const hotelsContainer = document.querySelector(".hotels-container");
  const hotelControls = document.querySelectorAll(".hotels-controls ul li");
  hotelControls.forEach(hotelControl => hotelControl.addEventListener("click", (e) => {
    hotelControls.forEach(control => control.classList.remove("active"));
    e.target.classList.add("active");
    if(e.target.dataset.id > previousControlId)
      scroll("right", Math.abs(e.target.dataset.id - previousControlId))
    else 
      scroll("left", Math.abs(e.target.dataset.id - previousControlId));
    previousControlId = e.target.dataset.id;

  }));
}());

function scroll(direction, amount) {
  const hotelsContainer = document.querySelector(".hotels-container");
  scrollCompleted = 0;
  let scrollHandle = setInterval(() => {
    if(direction == "left")
      hotelsContainer.scrollLeft -= 8 * amount;
    else
      hotelsContainer.scrollLeft += 8 * amount;
    
    scrollCompleted += 10;
    if(scrollCompleted >= 100) {
      clearInterval(scrollHandle);
    } 
  }, 50)
}

