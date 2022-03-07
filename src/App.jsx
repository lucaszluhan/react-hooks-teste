import './App.css';
import { useState, useEffect } from 'react';

function App() {
   const [counter, setCounter] = useState(0);
   const [name, setName] = useState('Hello');

   useEffect(() => {
      setCounter(counter + 1);
   }, []);

   return (
      <div className="App">
         <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
         <h1 onClick={() => setName(`${name} World`)}>{name}</h1>
      </div>
   );
}

export default App;
