//Funciones para renderizar
import React from 'react';
import ReactDOM from 'react-dom/client';
// import {App} from './HelloWorldApp'
// import { FirstApp } from './FirstApp';
import "./styles.css"
import { CounterApp } from './CounterApp';


//Para renderizar
/*Se aconseja trabajar en el modo estricto*/
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode> 
        <CounterApp value= {100}/>
    </React.StrictMode>
);

