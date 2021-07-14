import React, { useEffect, useState } from "react";
import { getCentros } from "../../services/centrosService";
import { format, parse } from "date-fns";
export default function CentrosConsumo({
  tipoCentro,
  filter,
  current,
  setCurrent,
}) {
  const [centros, setCentros] = useState([]);
  useEffect(() => {
    getCentros(tipoCentro, filter).then((data) => {
      setCentros(data);
    });
  }, [tipoCentro, filter]);

  return centros.length === 0 ? (
    <p>Sin resultados para mostrar</p>
  ) : (
    centros.map((c) => {
      return (
        <div className="card mt-20" key={c.id}>
          <div className="card-header">
            <h3>{c.nombre}</h3>
            {tipoCentro === "Bares" ? <></> : <span>{c.conceptoEs}</span>}
          </div>

          <div className="card-body mt-10 mb-20">
            <div>
              <strong>Abierto Hoy</strong>
              {c.horarios.map((h) => {
                return (
                  <p className="horario" key={h.id}>
                    {format(
                      parse(h.horaInicio, "HH:mm:ss", new Date()),
                      "h:mm aa"
                    )}{" "}
                    -{" "}
                    {format(
                      parse(h.horaFinal, "HH:mm:ss", new Date()),
                      "h:mm aa"
                    )}
                  </p>
                );
              })}
            </div>
            <div className="body-option">
              <button
                className={`btn ${tipoCentro === "Bares" ? "reverse" : ""}`}
                onClick={() => {
                  setCurrent(c);
                }}
              >
                Ver más
              </button>
            </div>
          </div>
        </div>
      );
    })
  );
}
