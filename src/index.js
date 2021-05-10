import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const todoTitle = "Learing and Creating App with React.js";
const date = new Date();
const currentYear = date.getFullYear();




ReactDOM.render(
  <div>
 <h1 className="headingStyle">Todo App</h1>
 <h2 className="headingStyle2">{todoTitle} </h2>
  <p className="headingStyle2">{currentYear}</p>
  </div>, 
  
  
  document.getElementById('root')
);

 