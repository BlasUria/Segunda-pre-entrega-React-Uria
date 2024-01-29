import React from 'react';
import './App.css';
import CartContext from './Context/CartContext';
import Rutas from './Routes/Rutas';

function App() {
  return (
    <>
      <CartContext>
        <Rutas/>
      </CartContext>
    </> //Todo lo que esté adentro de GlobalStateContext puede acceder a la información del value. Pueden usarla o no pero siempre tienen acceso.
  );
}

export default App;
