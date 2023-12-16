"use strict";
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

const cityNameEl = document.querySelector(".city-name");
const tempEl = document.querySelector(".city-temp");
const iconEl = document.querySelector(".weather-icon");
const descriptionEl = document.querySelector(".weather-description");
const tempAfter = document.querySelector(".after-temp");
const countryEl = document.querySelector(".country-logo");
const listEl = document.querySelector(".hidden");
const citiesEl = document.querySelector(".cities");

const apiKey = "3506b4d87f89755cd7a66a24d39ac3d7";
const cities = [];

//Tạo một mảng đại diện cho thành phố mới
form.addEventListener("submit", e => {
  e.preventDefault();

  let inputEl = input.value;
  let inputVal = inputEl.trim().replace(" ", "");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;

      //Mảng đại diện cho thành phố mới
      const newCity = {
        name: name,
        country: sys.country,
        tempC: Math.round(main.temp - 273.15),
        iconSrc: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`,
        description: weather[0].description,
      };
      //Thêm thành phố mới vào danh sách
      cities.push(newCity);

      citiesEl.innerHTML = cities
        .map(city => {
          return `<li class="city">
        <span class="city-name">${city.name}</span><span class="country-logo">${city.country}</span
        ><br /><span class="city-temp">${city.tempC}</span
        ><span class="after-temp">°C</span><br /><img
          src="${city.iconSrc}"
          alt=""
          class="weather-icon"
        /><br /><span class="weather-description">${city.description}</span>
      </li>`;
        })
        .join("");
    })
    .catch(error => {
      // msg.textContent = error.message;
      msg.textContent = "Please search for a valid city! ( Điền không dấu)";
    });

  msg.textContent = "";
  form.reset();

  input.focus();
});
