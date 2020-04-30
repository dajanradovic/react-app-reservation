import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import {BrowserRouter, Route} from 'react-router-dom';
import LoginPage from "./loginPage.js";


import 'animate.css/animate.css'



const store = createStore(rootReducer);



ReactDOM.render(
  
        <Provider store={store}>
          <BrowserRouter>
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={App} />

        
        </BrowserRouter>
        
        </Provider>,
   
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
