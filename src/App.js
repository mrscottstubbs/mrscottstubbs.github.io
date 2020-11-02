import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar.js';
import Tachyonsocialfooter from './Tachyonsocialfooter.js'

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Hobbies from './Hobbies';
import Projects from './Projects';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <NavBar />
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/About" component={About}/>
            <Route path="/Skills" component={Skills}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/Hobbies" component={Hobbies}/>
            <Route path="/Projects" component={Projects}/>
          </Switch>
        </div>

        <div id="bottom"> <hr/>
          <Tachyonsocialfooter></Tachyonsocialfooter>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
