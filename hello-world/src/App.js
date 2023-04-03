// components
import FirstComponent from "./components/FirsComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";

// style
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1>hello world!</h1>
        <section>
          <p>Essa é minha primeira section :) </p>
          <FirstComponent />
          <TemplateExpressions />
          <Events />
        </section>
      </div>
    </>
  );
}

export default App;
