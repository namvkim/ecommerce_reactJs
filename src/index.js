import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Allproduct from './AllProduct.js';
import Login_main from './component/login/login_main';
import Test from './test';
import Api from './component/api';

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
ReactDOM.render(
<React.StrictMode>
<Login_main/>
</React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//   <Api/>
//   </React.StrictMode>,
//     document.getElementById('root')
//   );


// ReactDOM.render(
//   <React.StrictMode>
//   <Test/>
//   </React.StrictMode>,
//     document.getElementById('root2')
//   );
