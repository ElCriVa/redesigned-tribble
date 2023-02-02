//Part 2 Quote generator
var quotes = [
    "Life is what happens when you're busy making other plans.-John Lennon",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt"
]

var randomNumber 

function randomquote() {
  randomNumber = Math.floor(Math.random() * (quotes.length));
  console.log(quotes[randomNumber]);
}

randomquote();

//import parts 3.1-3.4
import {flatten} from './exercises.js';
flatten();

import {displayProduct} from "./exercises.js";
displayProduct();

import {everything} from "./exercises.js";
everything()