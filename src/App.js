import React from 'react';
import './pages/css/main.css';
import './pages/css/reset.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Reservation from './pages/Reservation';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App">
    <Route path="/about" exact render={
      ()=>{
        return (<About/>);
      }

    }/>
    <Route path="/" exact strict render={
      ()=>{
        return (<Home/>);
      }

    }/>
    <Route path="/home" exact strict render={
      ()=>{
        return (<h1>Welcome Home</h1>);
      }

    }/>
    <Route path="/reservation" exact strict render={
      ()=>{
        return (<Reservation/>);
      }

    }/>
      <Route path="/menu" exact strict render={
        ()=>{
          return (<Menu/>);
        }

      }/>
    </div>
    </Router>
  );
}

export default App;
