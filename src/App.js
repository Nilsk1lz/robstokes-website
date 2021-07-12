import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Navigation';
import Projects from './Pages/Projects';
import Project from './Pages/Projects/Project';
import Home from './Pages/Home';
import './custom.scss';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
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
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </ParallaxProvider>
    );
}

export default App;
