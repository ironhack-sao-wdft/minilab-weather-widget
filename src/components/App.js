import { useState } from "react";

import WeatherWidget from "./WeatherWidget";

function App() {
  const [unit, setUnit] = useState("C");

  return (
    <div className="App">
      <label>Mudar escala de temperatura</label>
      <button onClick={() => setUnit("C")}> °C </button>
      <button onClick={() => setUnit("F")}> °F </button>

      <div>
        <WeatherWidget city="Miami" icon="" celsius={29} unit={unit} />
        <WeatherWidget city="Mexico City" icon="⛈️" celsius={17} unit={unit} />
        <WeatherWidget city="Berlin" icon="️" celsius={20} unit={unit} />
        <WeatherWidget city="Barcelona" icon="️" celsius={28} unit={unit} />
      </div>
    </div>
  );
}

export default App;
