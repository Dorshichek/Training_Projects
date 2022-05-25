import React from 'react'
import ReactDOM from 'react-dom/client'

import Button from './components/Button/Button';
import Textinput from "./components/Textinput/Textinput";

import style from './main.module.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Textinput/>
      <Button/>
    </React.StrictMode>
)
