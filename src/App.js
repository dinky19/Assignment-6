import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Bar from './comps/Bar';
import Home from './comps/Home';
import Projects from './comps/Projects';
import Services from './comps/Services';
import Contact from './comps/Contact';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Bar />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects/" component={Projects} />
          <Route path="/services/" component={Services} />
          <Route path="/contact/" component={Contact} />
          </Switch> 
      </div>
      </BrowserRouter>
    )
  }
}





export default App;