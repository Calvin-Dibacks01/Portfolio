import React from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import About from "./components/About";
import Contact from "./components/contact";
import Home from "./components/home";
import Project from './components/Projects';
import Resume from "./components/Resume";
import Welcome from "./components/welcome";
import Certifications from "./components/Certifications"

function App() {
  return (
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <div class="pt-tablecell relative">
                <a href="/" class="page-close"><i class="bi bi-x-lg"></i></a>
                  <Route exact path="/Welcome" component={Welcome}/>
                  <Route exact path="/Resume" component={Resume}/>
                  <Route exact path="/Contact" component={Contact}/>
                  <Route exact  path="/About" component={About}/>
                  <Route exact  path="/Projects" component={Project}/>
                  <Route exact  path="/Certifications" component={Certifications}/>
              </div>
            </Switch>
          </Router>
    
  );
}

export default App;
