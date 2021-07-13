import React, { useEffect, useState } from "react";
import { getHoteles } from "../../services/hotelService";
import "./hotel.scss";

export default function Hotel({ hotel, setHotel }) {
  const [hoteles, setHoteles] = useState([]);

  useEffect(() => {
    getHoteles().then((data) => {
      setHoteles(data);
    });
  }, []);

  return (
    <header className="nav-menu">
      <div>Hotel:</div>
      <label className="header-menu" htmlFor="slct">
        <select
          defaultValue={hotel}
          id="slct"
          onChange={(e) => {
            setHotel(e.target.value);
          }}
        >
          {hoteles.map((h) => {
            return (
              <option value={h.id} key={h.id}>
                {h.nombre}
              </option>
            );
          })}
        </select>
      </label>
      <div>| Hora Fecha</div>
    </header>
  );
}
