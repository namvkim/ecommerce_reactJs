import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Allproduct from './AllProduct.js';
import Login_main from './component/login/login_main';
import Home_main from './component/home/home_main';

// --------------------router-------------------------

// ReactDOM.render(
// <React.StrictMode>
//     <App />
// </React.StrictMode>,
//   document.getElementById('root')
// );



// ---------------------------------CRUD---------------------
// ReactDOM.render(
// <React.StrictMode>
//     <Allproduct />
// </React.StrictMode>,
//   document.getElementById('showpro')
// );


// -----------------------------------Login----------------

// ReactDOM.render(
// <React.StrictMode>
// <Login_main/>
// </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
<React.StrictMode>
<Home_main/>
</React.StrictMode>,
  document.getElementById('root')
);


