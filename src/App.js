import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navigation";
import Footer from "./Footer";
import Projects from "./Pages/Projects";
import Project from "./Pages/Projects/Project";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import "./custom.scss";
import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Navbar />
        <Router>
          <Switch>
            <Route path="/projects/:id">
              <Project />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
