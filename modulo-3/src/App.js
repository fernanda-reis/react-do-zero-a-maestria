import "./App.css";
import City from "./assets/city.jpeg";

function App() {
  return (
    <div className="App">
      <h1>Seção 3</h1>

      {/* Imagem em pasta public */}
      <div>
        <img src="/couple.jpeg" alt="Casal" />
      </div>

      {/* Imagem em asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
    </div>
  );
}

export default App;
