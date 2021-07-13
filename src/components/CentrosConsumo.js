import React, { useEffect, useState } from "react";
import { getCentros } from "../services/centrosService";

export default function CentrosConsumo({ tipoCentro, hotel }) {
  const [centros, setCentros] = useState([]);
  useEffect(() => {
    getCentros(tipoCentro, hotel).then((data) => {
      setCentros(data);
    });
  }, [tipoCentro, hotel]);

  return centros.map((c) => {
    return (
      <div className="card mt-20" key={c.id}>
        <div className="card-header">
          <h3>{c.nombre}</h3>
          {tipoCentro === "Bares" ? <></> : <span>{c.conceptoEs}</span>}
        </div>

        <div className="card-body mt-10 mb-20">
          <div>
            <p>Abierto Hoy</p>
            <p>11:00 am - 06:00pm</p>
          </div>
          <div className="body-option">
            <button
              className={`btn ${tipoCentro === "Bares" ? "reverse" : ""}`}
            >
              Ver más
            </button>
          </div>
        </div>
      </div>
    );
  });
}
