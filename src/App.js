import './App.css';

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";

// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure to include the trailing slash
  const URL= "https://portfolio-project-ga.herokuapp.com/";

  return (
    <div className="App">
      <h1>Testing</h1>
    </div>
  );
}

export default App;
