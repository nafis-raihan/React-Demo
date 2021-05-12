import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'

const todoTitle = "Learning and Creating App with React.js";
const todoName = "Md. Nafis Raihan"
const group = "Bsc. in Computer Science and Engineering"
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();


ReactDOM.render(
  <div>
 <h1 className="headingStyle">Demo App</h1>

 <div className="headingStyle2">
 <h2 className="titleStyle">{todoTitle} </h2>
 <h3 className="nameStyle">{todoName}</h3>
 <h4 className="groupStyle">{group}</h4>
  <p className="yearStyle">{dateName + "/" + monthName + "/" + currentYear}</p>
 </div>
 
  </div>, 
  
  
  document.getElementById('root')
);

 