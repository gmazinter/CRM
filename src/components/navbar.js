import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to='/clients'><button>Clients</button></Link>
                    <Link to='/actions'><button>Actions</button></Link>
                    <Link to='/analytics'><button>Analytics</button></Link>
                </div>
            </Router>
        )
    }
}

export default Navbar