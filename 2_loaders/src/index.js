import { Title } from "./components/title.js";
import { Image } from "./components/image.js";
import { Button } from "./components/button.js";
import warning from "./templates/warning.html";
import fraseTxt from "./files/frases.txt";
import description from "./files/description.json";

import './styles/warning.css';

const title = new Title();
title.create('Hello World, Title!');

const image = new Image();
image.insertImage();

const button = new Button();
button.create();

// Babel Spread
const obj = { a: 1, b: 2, c: 3, d: 4 };
let { a, b, ...test } = obj;
console.log(a);
console.log(b);
console.log(test);

// Import HTML
const body = document.querySelector('body');
body.innerHTML += warning;

// Import files
const phrase = fraseTxt;
console.log(phrase.toUpperCase());

// Import Json
const _description = description;
console.log(description);
