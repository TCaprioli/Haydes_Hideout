import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store'
import { Home } from './home/components/Home'
import { NavBar } from './navbar/components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <NavBar/>
        <Route exact path="/" component={Home}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)