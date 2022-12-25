import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function App() {

  const root = ReactDOM.createRoot
    (document.getElementById('root'));

  let localtime = new Date();
  let horaqatar = new Date(localtime.getTime() + (3600000 * 8));
  let horacorea = new Date(localtime.getTime() + (3600000 * 14));
  
  const titulo = React.createElement(
    'h1',
    {},
    'La hora es: '
  );

  const horaPeru = React.createElement(
    'h2',
    {},
    'La hora en Perú es: '+ new Date().toLocaleTimeString
    ('es-PE')
  );

  const horaQatar = React.createElement(
    'h2',
    {},
    'La hora en Perú es: ' + horaqatar.toLocaleTimeString
    ('es-PE')
  );

  const horaCorea = React.createElement(
    'h2',
    {},
    'La hora en Perú es: '+horacorea.toLocaleTimeString
    ('es-PE')
  );

  /*
  const headerApp = React.createElement(
    'div',
    {className : 'App-header'},
    titulo, horaPeru, horaCorea, horaQatar
  );

  const divApp = React.createElement(
    'div',
    {className : 'App'},
    headerApp
  );
  
  root.render(divApp);
  */

  const element = (
    <div className="App">
      <header className="App-header">
        {titulo}
        {horaPeru}
        {horaQatar}
        {horaCorea}
      </header>
    </div>
  );
  

  root.render(element);

}

export default App;
