import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList'
import CountryDetails from './Components/CountryDetails';
import countries from './countries.json'
import {Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-5 countries-col">
            <CountriesList countriesList={countries}/>
          </div>
          <div className="col-7">
            <Route path='/:id' component={CountryDetails}/>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
