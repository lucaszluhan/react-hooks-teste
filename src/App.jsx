import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';

const themeApp = {
   light: {
      primary: '#dd3f3f',
      secondary: '#4ac445',
   },
   dark: {
      primary: '#030570',
      secondary: '#d61e9f',
   },
};

const ThemeApp = React.createContext(themeApp);

function Teste() {
   const theme = React.useContext(ThemeApp);
   return (
      <>
         <h1 style={{ background: theme.light.primary }}>Ola</h1>
      </>
   );
}

function H1() {
   return (
      <>
         <Teste>Ola</Teste>
      </>
   );
}

function App() {
   const [counter, setCounter] = useState(0);
   const [name, setName] = useState('Hello');

   useEffect(() => {
      setCounter(counter + 1);
   }, [name]);

   return (
      <div className="App">
         <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
         <h1 onClick={() => setName(`${name} World`)}>{name}</h1>
         <H1></H1>
      </div>
   );
}
export default App;
