import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Allproduct from './AllProduct.js';

ReactDOM.render(
<React.StrictMode>
    <App />
</React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
<React.StrictMode>
    <Allproduct />
</React.StrictMode>,
  document.getElementById('showpro')
);


