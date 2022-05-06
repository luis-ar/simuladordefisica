function inicio() {
  var boton = document.querySelector(".boton");
  var pantalla = document.querySelector(".pantalla");
  var datos = document.querySelector(".datos");
  var paso1 = document.querySelector(".resistencia");
  var paso2 = document.querySelector(".voltaje");
  var contenedor = document.querySelector(".contenedor");
  var voltaje1 = document.querySelector(".voltaje1");
  var confirmar = document.querySelector(".confirmar");
  var indicar_resistencia = document.querySelector(".indicar_resistencia");
  confirmar.onclick = function (e) {
    var aparatos = document.querySelector(".aparatos").value;

    var a = 1;
    while (a <= aparatos) {
      ingreso_resistores = `
      <H3 class="datos_usuario">Ingrese la resitencia del aparato ${a}</H3>
      <input type="number" class="valores_resistencia${a} datos_usuario modificacion">
      `;
      indicar_resistencia.innerHTML += ingreso_resistores;
      a = a + 1;
    }
    confirmar.style.display = "none";
  };

  boton.onclick = function (e) {
    var eleccion = document.querySelector(".circuito-elegida").value;
    var aparatos = document.querySelector(".aparatos").value;
    var intensidad = document.querySelector(".intensidad").value;
    var x = 1;
    var resistor_total = 0;

    if (eleccion == "serie") {
      while (x <= aparatos) {
        resistor_total =
          resistor_total +
          parseInt(document.querySelector(`.valores_resistencia${x}`).value);
        resistores = `<div class="caja1 subcaja"><H2>R</H2></div>`;
        voltaje1.innerHTML += resistores;
        x = x + 1;
      }
      resultado = intensidad * resistor_total;
      pantalla.textContent += resultado;
      pantalla.style.textAlign = "center";
      pantalla.style.paddingTop = "40px";
      pantalla.style.fontSize = "40px";
    }
  };
  datos.onclick = function (e) {
    pantalla.textContent = " Voltaje= ";
    pantalla.style.backgroundColor = "red";
    pantalla.style.textAlign = "center";
    pantalla.style.paddingTop = "40px";
    pantalla.style.fontSize = "40px";
  };

  // function captura() {
  //   var num1 = document.querySelector(".voltaje").value;
  //   var num2 = document.querySelector(".resistencia").value;
  //   resultado = num1 * num2;
  //   alert(resultado);
  // }
  // function limpiar() {
  //   alert("jjaa");
  // }
}
