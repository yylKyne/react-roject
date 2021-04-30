import logo from './assets/images/logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/App.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import {Router, Route, Link}from 'react-router'

// const AboutPage = () => <h2>页面一</h2>;
// const UsersPage = () => <h2>页面二</h2>;


//引入组件
import HomePage from './components/Home';
import AboutPage from './components/About';
import UsersPage from './components/Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     <main className="App-main">
       {/* <HomePage /> */}
       <HomePage></HomePage>
       <hr />
       <AboutPage/>
       <hr />
       <UsersPage />
       <hr />
     </main>
    </div>
  );

}



export default App;
