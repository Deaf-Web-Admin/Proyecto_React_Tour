import "./counter.css";
import React, { useState } from "react";
// se debe copiar y pegar esto en el encabezado del componente donde se usara la libreria,
import "@sjmc11/tourguidejs/src/scss/tour.scss"; // Styles
import { TourGuideClient } from "@sjmc11/tourguidejs/src/Tour"; // JS
//no he probado si puede funcionar como referencia cruzada, es decir, usando  data-tg-tour aqui
// y llammandolo desde otro componente, para instalarlo con node se usa
//npm i @sjmc11/tourguidejs

//con esto se define el mensaje de inicio y el mensaje de fin
const steps = [
  {
    title: "Iniciar tour", //lo que aparecera como titulo
    content: "Iniciemos el Tour, si desea cancelar, presione escape o pinche afuera", //el contenido de la caja de dialogo
    order: 0, //cero sera el primer mensaje
  },
  {
    title: "Fin del Tour", //lo que aparecera como titulo
    content: "Eso fue todo, gracias", //el contenido de la caja de dialogo
    order: 999, //999 sera el ultimo mensaje
  },
];
const tg = new TourGuideClient({
  //las opciones para configurar el comportamiento
  steps: steps,
  isVisible: true,
  autoScroll: true,
  autoScrollSmooth: true,
  exitOnEscape: true,
  exitOnClickOutside: true,
});

const Counter = () => {
  const [displaycounter, setDisplayCounter] = useState(0); //se define y pone a cero el contador
  return (
    <div className="counterAPP">
      {/* se usa la etiqueta data-tg-tour  para almacenar el texto que se mostrara en el cuadro de dialogo*/}
      {/* se usa la etiqueta data-tg-order  para almacenar el orden que se mostraran los cuadro de dialogo*/}
      <div
        className="LCDScreen"
        data-tg-tour="Aca se muestran los numeros"
        data-tg-order="0"
      >
        {displaycounter}
      </div>{" "}
      {/* se muestra el contador en el area designada */}
      <div
        className="buttonplus"
        onClick={() => setDisplayCounter((displaycounter) => displaycounter + 1)}
        data-tg-tour="si pinchas, se aumentara el contador a uno"
        data-tg-order="1"
      ></div>{" "}
      {/* se le aumenta 1 al dar click sobre el DIV */}
      <div
        className="buttonsubtract"
        data-tg-tour="si pinchas, se restara uno al contador"
        data-tg-order="2"
        onClick={() => setDisplayCounter((displaycounter) => displaycounter - 1)}
      ></div>{" "}
      {/* se resta 1 al dar click sobre el DIV */}
      <div
        className="buttonzero"
        data-tg-tour="si pinchas, el contador se pondra a cero"
        data-tg-order="3"
        onClick={() => setDisplayCounter((displaycounter) => 0)}
      >
        00
      </div>
      {/* se coloca el disparador en div o button o cualquier area clickable y se dispara */}
      <button onClick={() => tg.start()}>iniciar tour</button>
    </div>
  );
};

export default Counter;
//aca esta el manual completo https://tourguidejs.com/#guide
