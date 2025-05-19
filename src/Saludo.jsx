//componente
import React, { useState } from "react";

function Saludo() {
    const[nombre, setNombre] = useState('');

    const manejarCambio = (e) => {
        setNombre(e.target.value);
    };

    return (
        <div className="mb-6 flex justify-center items-center text-center flex-col">
            <input type="text" placeholder="Escribi tu Nombrer" value={nombre} onChange={manejarCambio} className="w-64 p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 mx-auto" />
            <h2 className="text-xl text-indigo-700 font-semibold text-center w-full">¡Hola, {nombre}!</h2>
        </div>
    )
}

export default Saludo;