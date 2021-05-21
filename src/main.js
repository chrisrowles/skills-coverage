import 'alpinejs'
import './styles/main.css'

import api from './api'
import calculate from './calculate'
import charts from './charts'
import notify from './notify'

document.addEventListener('DOMContentLoaded', () => {
  // TODO update to alpine
  const userMenuDiv = document.getElementById("userMenu");
  const userMenu = document.getElementById("userButton");
  const navMenuDiv = document.getElementById("nav-content");
  const navMenu = document.getElementById("nav-toggle");

  document.onclick = check;

  function check(e) {
    let target = (e && e.target) || (event && event.srcElement);
    if (!checkParent(target, userMenuDiv)) {
      if (checkParent(target, userMenu)) {
        if (userMenuDiv.classList.contains("invisible")) {
          userMenuDiv.classList.remove("invisible");
        } else { userMenuDiv.classList.add("invisible"); }
      } else {
        userMenuDiv.classList.add("invisible");
      }
    }

    if (!checkParent(target, navMenuDiv)) {
      if (checkParent(target, navMenu)) {
        if (navMenuDiv.classList.contains("hidden")) {
          navMenuDiv.classList.remove("hidden");
        } else { navMenuDiv.classList.add("hidden"); }
      } else {
        navMenuDiv.classList.add("hidden");
      }
    } 
  }

  function checkParent(t, elm) {
    while (t.parentNode) {
      if (t == elm) { return true; }
      t = t.parentNode;
    }
    return false;
  }
})

window._api = api
window._calculate = calculate
window._charts = charts
window._notify = notify