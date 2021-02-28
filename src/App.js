import SideNav from "./components/SideNav";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App" style={{ display: "flex" }}>
        <SideNav />
        <Switch>
          <main style={{ flexGrow: 1, marginTop: "20vh" }}>
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </main>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
