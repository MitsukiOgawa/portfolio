import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Top from './Top';
import Profile from './Profile';
import Work from './Work';
import Skill from './Skill';

export default class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>

          <div className="header d-flex flex-column flex-md-row align-items-center sticky-top p-3 px-md-4 mb-3">
            <nav className="my-2 my-md-0 mr-md-3">
              <Link className="p-2 trans-green" to="/">Top</Link>
              <Link className="p-2 trans-yellow" to="/profile">Profile</Link>
              <Link className="p-2 trans-lightblue" to="/skill">Skill</Link>
              <Link className="p-2 trans-blue" to="/work">Work</Link>
            </nav>
          </div>

          <Container>
            <div className="row">

              <Switch>
                <Route exact path="/" component={Top} />
                <Route path="/profile" component={Profile} />
                <Route path="/skill" component={Skill} />
                <Route path="/work" component={Work} />
              </Switch>

            </div>
          </Container>

        </React.Fragment>
      </Router>
    );
  }
}
