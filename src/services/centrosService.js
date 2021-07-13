import { API } from "../config";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
const getCentros = (tipoCentro, hotel) => {
  return fetch(`${API}/hotel/${hotel}/centro-consumo/${tipoCentro}`, options).then((res) =>
    res.json()
  );
};

export { getCentros };
