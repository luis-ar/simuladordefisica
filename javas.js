let voltaje = document.querySelector(".voltaje");
let resistencia = document.querySelector(".resistencia");
let boton = document.querySelector(".boton");
var pantalla = document.querySelector(".pantalla");
let datos = document.querySelector(".datos");

function inicio() {
  let num1;
  let num2;
  num1 = voltaje.textContent;
  num2 = resistencia.textContent;
  boton.onclick = function (e) {
    respuesta();
  };
  datos.onclick = function (e) {
    limpiar();
  };
  function respuesta() {
    resultado = num1 * num2;
    pantalla.textContent = "Corriente=" + resultado;
  }
  function limpiar() {
    voltaje.textContent = "";
    num1 = 0;
    num2 = 0;
  }
}
