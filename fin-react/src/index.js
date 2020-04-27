import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import dva from 'dva'
import conter from './models/conter'
const app = dva();
app.router(App);
console.log('test3')
app.model(conter)
app.start('#root')


