import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from './Navigation';
import Page from './Page';
import '../styles/App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
    render(){
        return(
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
            <nav>
                {<Navigation/>}
            </nav>
            <section className="page">
                {<Page/>}
            </section>
            </div>
        </Router>
        )
    }
}

export default App;