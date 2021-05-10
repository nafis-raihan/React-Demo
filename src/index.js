import React from 'react';
import ReactDOM from 'react-dom';

const todoTitle = "Call family";
const date = new Date();
const currentYear = date.getFullYear();


const headingStyle = {
  backgroundColor : "Purple",
  Color : "White",
  textAlign : "center",
  padding : "15px",
  fontSize : "4rem"
}

ReactDOM.render(
  <div>
 <h1 style={headingStyle}>Todo App</h1>
 <h2>{todoTitle} </h2>
  <p>{currentYear}</p>
  </div>, 
  
  
  document.getElementById('root')
);

 