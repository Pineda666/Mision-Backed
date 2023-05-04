import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  let localtime = new Date();
  let horaqatar = new Date(localtime.getTime() + (3600000 * 8));

  const titulo = React.createElement(
    'h1',
    {},
    'La hora es: '
  );

  const HoraPeru = React.createElement(
    'h2',
    {},
    'En Perú: ' + new Date().toLocaleTimeString('es-MX')
  );

  const HoraQatar = React.createElement(
    'h2',
    {},
    'En Qatar: ' + horaqatar.toLocaleTimeString('es-MX')
  );

  const headerApp = React.createElement(
    'header',
    {className:'App-header'},
    titulo, HoraPeru, HoraQatar
  );

  const divApp = React.createElement(
    'div',
    {className:'App'},
    headerApp
  );

  // const element = (
  //   <div className="App">
  //     <header className="App-header">
  //       <h1>La hora es: </h1>
  //       <h2>Son las {new Date().toLocaleTimeString()}</h2>
  //     </header>
  //   </div>
  // );
  root.render(divApp)
}

export default App;
