import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Wordbox from './component/Wordbox'
import Button from './component/Button'
import Language from './component/Language'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="mainbox">
      <img src="https://www.google.ca/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="icon"/>
      <Wordbox/>
      <Button/>
      <Language/>
    </div>
  </React.StrictMode>
);