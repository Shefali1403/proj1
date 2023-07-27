import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './stylesheet/index.css';
import './stylesheet/response.css';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
    <BrowserRouter basename="/proj1">
        <App/>                
    </BrowserRouter>
, document.getElementById('root'));