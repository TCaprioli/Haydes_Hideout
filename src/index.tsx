import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store'
import Home from './home/components/Home'
import NavBar from './navbar/components/Navbar'
import { BoyProducts } from './shop/components/Boys'
import { GirlProducts } from './shop/components/Girls'
import { AccessoryProducts } from './shop/components/Accessories'
import { SeasonalProducts } from './shop/components/Seasonal'
import { AllProducts } from './shop/components/Products'
import { Cart } from './cart/components/Cart'
import { AdminForm} from './admin/components/admin_form'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({duration:1300})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products/boys" component={BoyProducts}/>
          <Route exact path="/products/girls" component={GirlProducts}/>
          <Route exact path="/products/accessories" component={AccessoryProducts}/>
          <Route exact path="/products/seasonals" component={SeasonalProducts}/>
          <Route exact path="/products" component={AllProducts}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/login" component={AdminForm}/>


        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)