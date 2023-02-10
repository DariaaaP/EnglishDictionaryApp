import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'mobx-react';

import WordsStore from './stores/WordsStore.jsx';
import App from './Pages/App/App.jsx';

import './style/index.scss';

const store = {
  wordsStore: new WordsStore(),
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider {...store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
