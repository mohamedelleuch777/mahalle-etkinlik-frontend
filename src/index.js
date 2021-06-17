import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import Page1 from './pages/page1'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
        <Switch>
          {/* <Route path="/index" render={(props) => <Main {...props} />} /> */}
          <Route
            path="/"
            render={(props) => <Page1 {...props} />}
          />
        </Switch>
      </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
