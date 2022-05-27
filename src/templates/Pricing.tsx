import React from 'react';

import Link from 'next/link';

const Pricing = () => (
  <div id="pricing" className="bg-gray-200">
    <div className="container px-6 py-8 mx-auto">
      <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
        <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 ">
          <div className="flex-shrink-0">
            <h1 className="inline-flex items-center justify-center px-2 text-xl font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 ">
              Curso Robótica con Python
            </h1>
          </div>
          <div className="flex-shrink-0">
            <span className="pt-2 text-4xl font-bold text-gray-800 uppercase">
              $35.000 CLP
            </span>
          </div>
          <ul className="flex-1 space-y-4">
            <li className="text-gray-500 ">Ejercicios prácticos</li>
            <li className="text-gray-500">Soporte en línea</li>
            <li className="text-gray-500">
              Acceso 24/7 al simulador de robótica
            </li>
          </ul>
          <Link href="https://taller.gatitolabs.cl" passHref>
            <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
              Inscríbete
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export { Pricing };
