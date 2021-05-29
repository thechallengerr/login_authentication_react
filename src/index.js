import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './img/logo.svg';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Hoang',
  lastName: 'Nguyen'
};


const element = (
  <div>
    <h1>
    Hello, {formatName(user)}! Welcome to React
    </h1>
    <img srcSet={logo} className='user'></img>
  </div>
);


ReactDOM.render(
  element,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
