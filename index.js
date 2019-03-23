import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
//import Login from './Login';
//import Create from './Create';
//import Logoff from './Logoff';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
//import Chat from './Chat';



ReactDOM.render(<Router><App/></Router>
, document.getElementById('root'));


