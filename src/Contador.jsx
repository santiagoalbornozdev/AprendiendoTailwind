import React, { useState } from "react";

function Contador() {
    const [Contador, setContador] = useState(0);
    const botonEstilo = "text-white px-4 py-2 rounded";
    return (
        <div className="w-130 my-5 p-2 border border-gray-300 rounded text-center mx-auto">
             <div className="flex items-center justify-center space-x-2">
            <h2 className="text-2xl font-semibold">contador: {Contador}</h2>
                <div className="flex space-x-2">
                     <button className="px-3 py-1 bg-blue-500 text-white rounded" onClick={() => setContador(Contador + 1)}>Aumentar </button>
                     <button className="px-3 py-1 bg-blue-500 text-white rounded" onClick={() => setContador(Contador - 1)}>Restar </button>
                     <button className="px-3 py-1 bg-blue-500 text-white rounded" onClick={() => setContador(0)}>Reiniciar </button>
                </div>
            </div>
        </div>
    )
}

export default Contador;