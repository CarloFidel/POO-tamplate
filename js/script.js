import { messages, messagesError } from "./messages.js";
import { findOnePosition, findAllPositions, cleanInputs, validateEmptyInputs } from "./functions.js";

const but1 = document.querySelector("input[value='Boton1']");
const but2 = document.querySelector("input[value='Boton2']");
const but3 = document.querySelector("input[value='Boton3']");

const section01 = document.querySelector(".section_01");
const section02 = document.querySelector(".section_02");
const section03 = document.querySelector(".section_03");

but1.addEventListener('click', () =>{
    but2.classList.remove('current');
    but3.classList.remove('current');
    but1.classList.add('current');
    section01.style.display = "block";
    section02.style.display = "none";
    section03.style.display = "none";

});

but2.addEventListener('click', () =>{
    but1.classList.remove('current');
    but3.classList.remove('current');
    but2.classList.add('current');
    section02.style.display = "block";
    section01.style.display = "none";
    section03.style.display = "none";
});

but3.addEventListener('click', () =>{
    but1.classList.remove('current');
    but2.classList.remove('current');
    but3.classList.add('current');
    section03.style.display = "block";
    section01.style.display = "none";
    section02.style.display = "none";
});

const form = document.querySelector(".form_01");
const inputs = document.querySelectorAll("input");
const resultContainer = document.querySelector(".results_container");


console.log(inputs);

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    validateEmptyInputs(inputs) ? resultContainer.innerHTML = "Todo ok" : resultContainer.innerHTML = "Faltan datos por llenar";
})