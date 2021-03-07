import SideNav from "./components/SideNav";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { spring, AnimatedRoute, AnimatedSwitch } from "react-router-transition";

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

function App() {
  return (
    <Router>
      <div className="App" style={{ display: "flex" }}>
        <SideNav />
        <main style={{ flexGrow: 1, marginTop: "20vh" }}>
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          className="route-wrapper"
        >
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
        </AnimatedSwitch>
          </main>
      </div>
    </Router>
  );
}

export default App;
