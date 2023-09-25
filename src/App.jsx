
import './App.css'
import { useState } from 'react'
import BotonClear from './componentes/BotonClear'
import Botones from './componentes/Botones'
import Pantalla from './componentes/Pantalla.jsx'
import FreeCodeCamp from './img/FreeCodeCamp.png'
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('')

  const handleClick = (val) => {
    setInput(input + val);
  }

  const limpiarPantalla = () => {
      setInput('')
  }

  const calcularResultado = () => {
    if (input) {

      setInput(evaluate(input));
    }else {
      alert("Ingrese un valor")
    }
  }


  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor' >
        <img
        
          src={FreeCodeCamp}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />

      </div>
        <div className='contenedor-calculadora'>
          <Pantalla input={input} />
          <div className='fila' >
            <Botones manejarClick={handleClick} >1</Botones>
            <Botones manejarClick={handleClick}>2</Botones>
            <Botones manejarClick={handleClick}>3</Botones>
            <Botones manejarClick={handleClick}>+</Botones>
          </div>
          <div className='fila' >
            <Botones manejarClick={handleClick}>4</Botones>
            <Botones manejarClick={handleClick}>5</Botones>
            <Botones manejarClick={handleClick}>6</Botones>
            <Botones manejarClick={handleClick}>-</Botones>
          </div>
          <div className='fila' >
            <Botones manejarClick={handleClick}>7</Botones>
            <Botones manejarClick={handleClick}>8</Botones>
            <Botones manejarClick={handleClick}>9</Botones>
            <Botones manejarClick={handleClick}>*</Botones> 
          </div>
          <div className='fila' >
            <Botones manejarClick={calcularResultado}>=</Botones>
            <Botones manejarClick={handleClick}>0</Botones>
            <Botones manejarClick={handleClick}>.</Botones>
            <Botones manejarClick={handleClick}>/</Botones>
          </div>
          <div className='fila' >
            <BotonClear manejarClear={limpiarPantalla} > Clear </BotonClear>
          </div>
        </div>
    </div>
  )
}

export default App
