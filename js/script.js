"use strict";
//variables

const input1 = document.getElementById("input1"),
  input2 = document.getElementById("input2"),
  input3 = document.getElementById("input3"),
  contacForm = document.getElementById("contactForm"),
  h2 = document.createElement("h2");


//listener
contacForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const mensaje = contacForm.texto1.value;
  const correo = contacForm.texto2.value;
  input1.remove();
  input2.remove();
  input3.remove();
  contacForm.innerHTML =
    '<div class="text-center" style = "gap: 1rem;"> <a  href = "./index.html"><button type="button" class="btn  btn-outline-light fst-italic">Volver</button></a></div>';

  h2.textContent =  mensaje + " tu informacion ha sido recibida y te escribiremos al correo: "+correo ;
  
  contacForm.appendChild(h2);
});
