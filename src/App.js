import React from 'react';
import './App.css';
import Home from './pages/home.js';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import SearchPage from "./pages/searchPage.js"


function App() {
  return (
    <div className="App">

        <Router>

          <Switch>

             <Route path='/search'>

              <SearchPage/>

              </Route>
              <Route path='/'>
              <Home/>
             </Route>
          </Switch>

          
    
        

        </Router>

      

    </div>
  );
}

export default App;
