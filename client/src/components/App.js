import React from 'react';
import AboutMe from './AboutMe';
import HobbiesInterests from './HobbiesInterests';
import Home from './Home';
import Projects from './Projects';
import WorkHistory from './WorkHistory';
import NavBar from './NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../App.css';

function App() {

  return (
    <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/aboutMe" component={AboutMe}/>
        <Route path="/hobbiesInterests" component={HobbiesInterests} />
        <Route path="/projects" component={Projects} />
        <Route path="/workHistory" component={WorkHistory} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;