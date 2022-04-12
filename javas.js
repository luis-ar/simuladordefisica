function inicio() {
  var boton = document.querySelector(".boton");
  var pantalla = document.querySelector(".pantalla");
  var datos = document.querySelector(".datos");
  var paso1 = document.querySelector(".resistencia");
  var paso2 = document.querySelector(".voltaje");

  boton.onclick = function (e) {
    var resistencia = document.querySelector(".resistencia").value;
    var voltaje = document.querySelector(".voltaje").value;
    resultado = voltaje / resistencia;
    pantalla.textContent += resultado;
  };
  datos.onclick = function (e) {
    paso1.value = "";
    paso2.value = "";
  };
}
