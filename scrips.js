"use strict";
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax.section .cities");

const apiKey = "3506b4d87f89755cd7a66a24d39ac3d7";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

fetch(url)
  .then(response => response.json)
  .then(data => {
    const { main, name, sys, weather } = data;
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
  })
  .catch(() => {
    msg.textContent = "Please search for a valid city :(";
  });

msg.textContent = "";
form.reset();
input.focus();
