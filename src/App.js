import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import React from 'react';
import BrandIcons from './components/BrandIcons'
import 'bootstrap/dist/css/bootstrap.min.css';
import Trending from './components/Trending';
import Products from './components/Products';




import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



const App = () => {
    return (
      <div className='page'>
        <div>
          <NavBar/>
        </div>
        <div className='background'>
          <div className='search-title'>
              <div className= 'title'>
                The Sneaks App
              </div>
              <div className= 'subtitle'>
                Search Sneakers and Compare Prices
              </div>
          </div>
          <SearchBar />
          <BrandIcons/>
        </div>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL+'/'} component={Trending}/>
          <Route path={process.env.PUBLIC_URL +'/search/:key'} component={Products}/>
        </Switch>
      </div>
    );
}


export default App;
