const HOLIDAYS_API_KEY = "2dbcfa8276724205e54379f448524e30270f7fef";
const HOLIDAYS_API_BASE_URL = "https://calendarific.com/api/v2";

const UNSPLASH_API_KEY = "uRI7Z9RQNif2CASKx_aKVRbjibxSPOMeNhIx-LsEIMM";
const UNSPLASH_API_BASE_URL = "https://api.unsplash.com/search";

/* Fetch holidays Logic */

const getHolidaysPromise = async function(countryCode, year, month, day) {
  const response = await fetch(`${HOLIDAYS_API_BASE_URL}/holidays?api_key=${HOLIDAYS_API_KEY}&
                  country=${countryCode}&type=national&year=${year ? year : (new Date).getFullYear()}
                  ${month ? "&month="+month : ""}${day ? "&day="+day : ""}`);
  const data = await response.json();
  return data.response.holidays;
};

/* Read country code from local storage on page load */

document.addEventListener('DOMContentLoaded', readLocalStorage);

function readLocalStorage() {
  if(localStorage.getItem("countryCode")) {
    getHolidaysPromise(localStorage.getItem("countryCode"), getYear(), getMonth(), getDay()).then(holidays => {
      console.log(holidays)
      holidays.forEach((holiday) => appendHolidayToPage(holiday));
    });
  }
}

const holidaysContainer = document.querySelector(".holidays");

function appendHolidayToPage(holidayObj) {
  const holidayElement = document.createElement("div");
  holidayElement.classList.add("holiday");

  const holidayImage = document.createElement("img");
  getImagePromise(holidayObj["name"]).then(images => {
    if(images.length)
      holidayImage.src = images[0]["urls"]["regular"];
    else
      holidayImage.src = "../assets/images/holidays-page/holiday.jpg";
  });
  holidayImage.setAttribute("width", "100%");
  holidayImage.setAttribute("height", "200px");
  holidayElement.appendChild(holidayImage);

  const holidayDescription = document.createElement("div");
  holidayDescription.classList.add("description");
  const holidayName = document.createElement("h4");
  holidayName.innerText = holidayObj["name"];
  holidayDescription.appendChild(holidayName);
  const holidayDate = document.createElement("p");
  holidayDate.innerText = `Date: ${holidayObj["date"]["iso"]}`;
  holidayDescription.appendChild(holidayDate);

  holidayElement.appendChild(holidayDescription)
  holidaysContainer.appendChild(holidayElement)
}

/* Fetch an image Logic */

const getImagePromise = async function(holidayName) {
  const response = await fetch(`${UNSPLASH_API_BASE_URL}?query=${holidayName}&client_id=${UNSPLASH_API_KEY}`);
  const data = await response.json();
  return data["photos"]["results"];
}

function getYear() {
  return localStorage.getItem("year");
}

function getMonth() {
  return localStorage.getItem("month");
}

function getDay() {
  return localStorage.getItem("day");
}