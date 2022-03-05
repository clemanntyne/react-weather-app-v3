import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Francisco" />
        <footer>
          Project coded by Stephanie Clemann. Is{" "}
          <a
            href="https://github.com/clemanntyne/react-weather-app-v3"
            target="_blank"
          >
            Open Source
          </a>{" "}
          on GitHub.
        </footer>
      </div>
    </div>
  );
}

export default App;
