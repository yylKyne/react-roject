import React from 'react'; //核心库
import ReactDOM from 'react-dom'; //dom相关功能
// import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// const AboutPage = () => <h2>页面一</h2>;
// const UsersPage = () => <h2>页面二</h2>;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Router>
    {/* <Switch>
        <Route path="/AboutPage/" component={AboutPage} />
        <Route path="/UsersPage/" component={UsersPage} />
    </Switch> */}
</Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
