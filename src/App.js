import { useState } from "react";

import "./App.scss";
import CentrosConsumo from "./components/centros_consumo/CentrosConsumo";
import Hotel from "./components/hotel/Hotel";
import Detalle from "./components/detalle/Detalle";
import "./styles/utils.scss";

function App() {
  const [filter, setFilter] = useState({});
  const [current, setCurrent] = useState(null);
  return (
    <div className="App">
      <Hotel filter={filter} setFilter={setFilter} setCurrent={setCurrent} />
      <div className="container">
      <section>
        <div>
          <h2>Restaurantes</h2>
          <hr></hr>
          <CentrosConsumo
            tipoCentro="Restaurantes"
            filter={filter}
            setCurrent={setCurrent}
          />
        </div>
        <div className="centro-bar">
          <h2>Bares</h2>
          <hr></hr>
          <CentrosConsumo
            tipoCentro="Bares"
            filter={filter}
            current={current}
            setCurrent={setCurrent}
          />
        </div>
        <div>
          {current ? <Detalle current={current} /> : <></>}
        </div>
      </section>
      </div>
      
    </div>
  );
}

export default App;
