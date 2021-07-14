import { format, parse } from "date-fns";
import React from "react";
import { PUBLIC_URL } from "../../config";
import "./detalle.scss";

export default function Detalle({ current }) {
  return (
    <div className="detalle">
      <h2>{current.nombre}</h2>
      <div className="img-container">
        <img src={`${PUBLIC_URL}/${current.imgPortada}`} alt={current.nombre} />
      </div>
      <div className="data-container mt-20">
        <div>
          <p>
            <strong>{current.nombre}</strong>
          </p>
          <p>{current.conceptoEs}</p>
          <img src={`${PUBLIC_URL}/${current.logo}`} alt={current.nombre} />
        </div>
        <div className="datos-horario">
          <p>
            <strong>ABIERTO HOY</strong>
          </p>

          {current.horarios.map((h) => {
            return (
              <div className="horario" key={h.id}>
                {format(parse(h.horaInicio, "HH:mm:ss", new Date()), "h:mm aa")}{" "}
                -{" "}
                {format(parse(h.horaFinal, "HH:mm:ss", new Date()), "h:mm aa")}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
