import { useState } from "react";
import "./App.scss";
import CentrosConsumo from "./components/CentrosConsumo";
import Hotel from "./components/hotel/Hotel";

function App() {
  const [hotel, setHotel] = useState(1);
  return (
    <div className="App">
      <Hotel hotel={hotel} setHotel={setHotel}/>
      
      <section>
        <div>
          <h2>Restaurantes</h2>
          <hr></hr>
          <CentrosConsumo tipoCentro="Restaurantes" hotel={hotel}/>
        </div>
        <div className="centro-bar">
          <h2>Bares</h2>
          <hr></hr>
          <CentrosConsumo tipoCentro="Bares" hotel={hotel}/>
        </div>
        <div>
          <h2>Detalles</h2>
        </div>
      </section>
    </div>
  );
}

export default App;
