import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';
import {BrowserRouter, Route} from "react-router-dom";


// your code goes here
class Home extends Component{
  render(){
    return(
      <div>
        
      <BrowserRouter>
      <div>
      <Route exact path='/' component={Home} />
      <Route path='/Guilty' component={Guilty} />
      <Route path='/Happy' component={Happy} />
      <Route path='/Sleepy' component={Sleepy} />
      </div>
      </BrowserRouter>
      </div>
    );
  };
};

ReactDOM.render( <Home />, document.getElementById('root') );
