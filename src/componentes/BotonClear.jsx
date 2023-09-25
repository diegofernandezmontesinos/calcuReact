import React from 'react'

const BotonClear = (props) => {
  return (
    <div className='botonClear' 
    onClick={props.manejarClear} >
      
      {props.children}
    
    </div>
  )
}

export default BotonClear