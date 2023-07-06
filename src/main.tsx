import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App.tsx'
import './index.css'
import {store} from "./redux";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
      <Router>
        <App />
      </Router>
  </Provider>,
)
