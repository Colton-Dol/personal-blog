// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const getBody = document.querySelector('body');
const toggle = document.getElementById('toggle');

const modeSwitch = function () {
  if (getBody.getAttribute('class') === 'light') {
    getBody.setAttribute('class', 'dark');
  } else {
    getBody.setAttribute('class', 'light');
  };

  let mode = getBody.getAttribute('class')

  localStorage.setItem('mode', mode);
};

toggle.addEventListener('click', () => {modeSwitch()});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = () => {if (localStorage.length === 0) {return []} else {return localStorage}};

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const storeLocalStorage = function () {
  
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

