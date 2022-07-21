function inicio() {
  var boton = document.querySelector(".boton");
  var pantalla = document.querySelector(".pantalla");
  var cir_paralelo = document.querySelector(".cir_paralelo");
  var contenedor = document.querySelector(".contenedor");
  var voltaje1 = document.querySelector(".voltaje1");
  var confirmar = document.querySelector(".confirmar");
  var indicar_resistencia = document.querySelector(".indicar_resistencia");
  var modal = document.querySelector(".modal");
  var reiniciar = document.querySelector(".reiniciar");
  var precio = document.querySelector(".precio");
  var potencia_pantalla = document.querySelector(".potencia_pantalla");
  confirmar.onclick = function (e) {
    var aparatos = document.querySelector(".aparatos").value;

    var a = 1;
    while (a <= aparatos) {
      ingreso_resistores = `
      <H3 class="datos_usuario">Ingrese la potencia en watt por hora y el tiempo en horas de uso del aparato ${a}</H3>
      <input type="number" class="valores_potencia${a} datos_usuario modificacion" placeholder="potencia">
      <input type="number" class="valores_tiempo${a} datos_usuario modificacion"  placeholder="tiempo">
      `;
      indicar_resistencia.innerHTML += ingreso_resistores;
      a = a + 1;
    }
    confirmar.style.display = "none";
  };

  boton.onclick = function (e) {
    var eleccion = document.querySelector(".circuito-elegida").value;
    var aparatos = document.querySelector(".aparatos").value;
    var x = 1;
    var potencia_total = 0;

    if (eleccion == "serie") {
      while (x <= aparatos) {
        potencia_total =
          potencia_total +
          document.querySelector(`.valores_potencia${x}`).value *
            document.querySelector(`.valores_tiempo${x}`).value;
        resistores = `<div class="caja1 subcaja"><H2>R</H2></div>`;
        voltaje1.innerHTML += resistores;
        x = x + 1;
      }
      potencia_pantalla.textContent += `${potencia_total}W`;
      potencia_pantalla.style.fontSize = "30px";
      precio.textContent += Number(((potencia_total * 0.6*30) / 1000).toFixed(2));
      modal.style.animation = "aparecer 2s forwards";
      modal.style.display = "flex";
    } else {
      let n = 1;
      contenedor.style.borderTop = "none";
      while (n <= aparatos) {
        potencia_total =
          potencia_total +
          document.querySelector(`.valores_potencia${n}`).value *
            document.querySelector(`.valores_tiempo${n}`).value;
        cajas = ` <div class="contenedor111"><div class="caja1 subcaja cajita"><H2>R</H2></div></div>`;
        cir_paralelo.innerHTML += cajas;

        n++;
      }
      potencia_pantalla.textContent += `${potencia_total}W`;
      potencia_pantalla.style.fontSize = "30px";
      precio.textContent += Number(((potencia_total * 0.6*30) / 1000).toFixed(2));
      modal.style.animation = "aparecer 2s forwards";
      modal.style.display = "flex";
    }
  };
  //otro_evento
  reiniciar.onclick = function (e) {
    modal.style.display = "none";
    modal.style.animation = "reiniciar 2s forwards";
  };
}
