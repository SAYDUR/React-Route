import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Home from './component/Home';
import About from './component/About';
import Topics from './component/Topics';


const App = () => (
  <Router>
    <div>

        <Nav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/topics">Topics</NavLink>
        </Nav>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />

    </div>
  </Router>
);


export default App;
