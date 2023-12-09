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

const apiKey = "3506b4d87f89755cd7a66a24d39ac3d7";

form.addEventListener("submit", e => {
  e.preventDefault();

  let inputEl = input.value;
  let inputVal = inputEl.trim().replace(" ", "");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;

      listEl.classList.remove("hidden");

      cityNameEl.textContent = name;

      countryEl.textContent = `${sys.country}`;

      const tempC = Math.round(main.temp - 273.15);

      tempEl.textContent = `${tempC}`;

      iconEl.src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;

      descriptionEl.textContent = `${weather[0].description}`;

      tempAfter.textContent = `°C`;
    })

    .catch(error => {
      msg.textContent = error.message;
      // msg.textContent = "Please search for a valid city :(";
    });

  msg.textContent = "";
  form.reset();

  input.focus();
});
