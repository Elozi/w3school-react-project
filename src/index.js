import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './class one/header';
import Menu from './class one/menu_header';
import Outline from './class one/outline';
import Page from './class one/page';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Header></Header>
      <Menu></Menu>
      <div className='flex'>
        <Outline outlineHeader="HTML" ></Outline>
        <Page></Page>
      </div>


    </div>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
