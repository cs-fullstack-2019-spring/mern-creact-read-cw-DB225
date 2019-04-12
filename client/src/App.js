import React, { Component } from 'react';
import './App.css';
import { Navbar,Nav } from 'react-bootstrap';
import ListMovies from "./components/ListMovies";
import {BrowserRouter as Router, Route} from "react-router-dom";
import NewMovie from "./components/NewMovie";

class App extends Component {
  render() {
    return (
        <Router>
      <div className="App">
          <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">DidierApp</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/list">List</Nav.Link>
                      <Nav.Link href="/create">New Movie</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
          <h1>Welcome to my Movie Collection</h1>
          <Route exact path="/create" component={NewMovie}/>
          <Route exact path="/list" component={ListMovies}/>
      </div>
        </Router>
    );
  }
}

export default App;
