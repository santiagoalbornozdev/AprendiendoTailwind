import React from 'react'
import Saludo from './Saludo';
import Contador from './Contador';

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
         <h1 className="text-3xl font-bold text-center text-indigo-600">Hola react</h1>
         <p className="text-center text-gray-600 mb-4">Práctica con React</p>
         <Saludo />
         <Contador />
      </div>
    </div>
  )
}

