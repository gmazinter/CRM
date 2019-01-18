import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
// import axios from 'axios';
import Clients from './components/clients';
import Actions from './components/actions';
import Analytics from './components/analytics';
import './App.css';

class App extends Component {
  
  // componentDidMount() {
  //   this.fetchData()
  // }

  // fetchData = () => {
  //   axios.get('http://localhost:8000/clients')
  //     .then((response) => {
  //       this.setState({
  //         clients: response.data
  //       }, function() {console.log(this.state)})
  //     })
  // }

  render() {
    return (
      <Router>
        <div>
          <div id="nav-bar">
          <Link to='/clients'>Clients</Link>
          <Link to='/actions'>Actions</Link>
          <Link to='/analytics'>Analytics</Link>
          </div>

          <div id="main-container">
            <Route path='/clients' exact render={() => <Clients />} ></Route>
            <Route path='/actions' exact component={Actions} ></Route>
            <Route path='/analytics' exact component={Analytics} ></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
