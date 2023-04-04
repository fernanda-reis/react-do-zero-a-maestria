// components
import FirstComponent from "./components/FirsComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

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
        <Challenge />
      </div>
    </>
  );
}

export default App;
