import React, { useEffect, useState } from "react";
import { getHoteles } from "../../services/hotelService";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { format } from "date-fns";
import "./hotel.scss";
import Timer from "./Timer";

registerLocale("es", es);

export default function Hotel({ filter, setFilter,setCurrent }) {
  const [hoteles, setHoteles] = useState([]);
  const [hotel, setHotel] = useState(1);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    getHoteles().then((data) => {
      setHoteles(data);
    });
    setFilter({
      hotel,
      filterDate: format(date, "yyyy-MM-dd"),
    });
    setCurrent(null)
  }, [date, hotel, setCurrent, setFilter]);

  return (
    <header className="nav-menu">
      <div>Hotel:</div>
      <label className="header-menu" htmlFor="slct">
        <select
          defaultValue={filter?.hotel}
          id="slct"
          onChange={(e) => {
            setHotel(e.target.value);
            setFilter({ ...filter, hotel });
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
      <div className="separator"></div>
      <Timer/>
      <div>
        <DatePicker
          className="datepicker-date"
          selected={date}
          onChange={(date) => {
            setDate(date);
            setFilter({ ...filter, filterDate: format(date, "yyyy-MM-dd") });
          }}
          locale="es"
          dateFormat="dd 'de' MMMM 'de' yyyy"
        />
      </div>
    </header>
  );
}
