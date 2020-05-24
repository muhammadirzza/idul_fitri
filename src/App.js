import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Card from './components/card';
import Envelope from './components/envelope';

function App() {
  return(
    <div>
      <Switch>
        <Route path='/' exact component={Envelope}/>
        <Route path='/card' exact component={Card}/>
      </Switch>
    </div>

  )
}

export default App;

        /* <div className="center"></div>
        <ul className="cr1">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul className="cr2">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul className="cr3">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul className="cr4">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <h2>Selamat Hari Raya Idul Fitri 1441 H</h2>
        <h3>Taqabbalallahu Minna Wa Minkum</h3>
      </div>
    // <div className="wrapper">
    //     <div className="mail">
    //         <div className="cover"></div>
    //         <div className="letter">
    //             <h1>@</h1>
    //         </div>
    //     </div>
    // </div> */
