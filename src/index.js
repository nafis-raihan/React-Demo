import React from 'react';
import ReactDOM from 'react-dom';

const todoTitle = "Call family";
const date = new Date();
const currentYear = date.getFullYear();




ReactDOM.render(
  <div>
 <h1 className="headingStyle">Todo App</h1>
 <h2>{todoTitle} </h2>
  <p>{currentYear}</p>
  </div>, 
  
  
  document.getElementById('root')
);

 