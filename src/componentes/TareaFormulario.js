import React, { useState } from "react";
import '../hojas-de-estilo/TareaFormulario.css'
import {v4 as uuidv4} from 'uuid'

function TareaFormulario(props){

    const[input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
        console.log(e.targuet.value)
        
    };

    const manejarEnvio = e => {
        e.preventDefault();
        console.log('enviando');

        const tareaNueva = {
            id : uuidv4(),
            texto : input,
            completada : false,
        };

        props.onSubmit(tareaNueva);
    };

    return(
        <form onSubmit={manejarEnvio} 
        className='tarea-formulario'>
            <input className='tarea-input'
            placeholder='Escribe una tarea..'
            name='texto'
            type='text'
            onChange={manejarCambio}
            />

            <button className='tarea-boton'>
                Agregar tarea
            </button>

        </form>
    );
}

export default TareaFormulario;