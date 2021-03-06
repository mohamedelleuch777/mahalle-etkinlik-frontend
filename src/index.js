import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import Catalog from './pages/catalog'
import reportWebVitals from './reportWebVitals';
import MainPage from './pages/main_page'
import PresidentPage from './pages/president_page'
import MahalleliOl from './pages/mahalleli_ol'
import MahalleAbout from './pages/mahalle_about'
import MahalleEvlerimiz from './pages/mahalle_evlerimiz'
import HaberlerDuyurular from './pages/haberler_duyurular';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
        <Switch>
          {/* <Route path="/index" render={(props) => <Main {...props} />} /> */}
          <Route
            path="/welcome"
            render={(props) => <MainPage {...props} />}
          />
          <Route
            path="/president"
            render={(props) => <PresidentPage {...props} />}
          />
          <Route
            path="/mahol"
            render={(props) => <MahalleliOl {...props} />}
          />
          <Route
            path="/about"
            render={(props) => <MahalleAbout {...props} />}
          />
          <Route
            path="/mahalleevlerimiz"
            render={(props) => <MahalleEvlerimiz {...props} />}
          />
          <Route
            path="/haberler"
            render={(props) => <HaberlerDuyurular {...props} />}
          />

          <Route
            path="/*"
            render={(props) => <Catalog {...props} />}
          />
        </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
