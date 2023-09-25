import React from 'react'
import '../hojas-de-estilo/Botones.css'

function Botones(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=') 
    }



  return (
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} 
    onClick={() => props.manejarClick(props.children)}>
        {props.children}
    </div>
  )
}

export default Botones