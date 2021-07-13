import { API } from "../config";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
const getHoteles = () => {
  return fetch(`${API}/hoteles`, options).then((res) => res.json());
};

export { getHoteles };
