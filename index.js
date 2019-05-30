// Import stylesheets
import './style.css';
var $ = require("jquery");

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

$(function(){
  $('#app').html('阿信是天才');
})