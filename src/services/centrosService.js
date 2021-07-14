import { API } from "../config";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
const getCentros = (tipoCentro, filter) => {
  return fetch(
    `${API}/hoteles/${filter.hotel}/centros-consumo?categoria=${tipoCentro}&filterDate=${filter.filterDate}}`,
    options
  ).then((res) => res.json());
};
const getCentroInfo = (idHorario) => {
  return fetch(`${API}/centro-consumo/${idHorario}`, options).then((res) =>
    res.json()
  );
};

export { getCentros, getCentroInfo };
