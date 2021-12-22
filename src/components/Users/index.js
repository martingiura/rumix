// ./client/src/components/Guitars/index.js
import React, { useEffect, useContext } from "react";
import UserContext from "../../context/User/UserContext";

import { Link } from "react-router-dom";

export default function Users() {
  // ESTADO GLOBAL
  const ctx = useContext(UserContext);

  const { users, getUsers } = ctx;

  // ESTADO LOCAL

  // EL MOMENTO EN QUE SE EJECUTA EL USE EFFECT ES DESPUÉS DEL RETURN.
  useEffect(() => {
    getUsers();
  }, []); // CUANDO HAY UN ARREGLO VACÍO, SIGNIFICA QUE VA A EJECUTARSE UNA SOLA VEZ.

  return (
    <>
      <div className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
        <div class="md:flex md:items-center md:justify-between">
          <div class="flex-1 min-w-0">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Buscar compañeros de Piso en Ciudad de México
            </h2>
          </div>
          <div class="mt-4 flex md:mt-0">
            <Link to="/guitarras/crear"></Link>
          </div>
        </div>

        <div class="bg-white">
          <div>
            <div class="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {users.map((element) => {
                return (
                  <>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4 mr-8">
                      <Link to={`/users/${element._id}`}>
                        <img
                          className="w-full h-56 object-cover object-center"
                          src={element.imageUrl}
                          alt="avatar"
                        />
                      </Link>
                      <div className="flex items-center px-6 py-3 bg-gray-900">
                        <svg
                          className="h-6 w-6 text-white fill-current"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
                        </svg>
                        <h1 className="mx-3 text-white font-semibold text-lg">
                          <Link to={`/users/${element._id}`}>
                            {element.nombre}, {element.age}
                          </Link>
                        </h1>
                      </div>
                      <div className="py-4 px-6">
                        <h1 className="text-2xl font-semibold text-gray-800">
                          {element.profileSummary}
                        </h1>
                        <p className="py-2 text-lg text-gray-700">
                          {element.profileDescription}
                        </p>
                        <div className="flex items-center mt-4 text-gray-700">
                          <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            ></path>
                          </svg>
                          <h1 className="px-2 text-sm">Perfil Verificado</h1>
                        </div>
                        <div className="flex items-center mt-4 text-gray-700">
                          <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 512 512"
                          >
                            <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
                          </svg>
                          <h1 className="px-2 text-sm">
                            {element.prefferedLocation}
                          </h1>
                        </div>
                        <div className="flex items-center mt-4 text-gray-700">
                          <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 512 512"
                          >
                            <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
                          </svg>
                          <h1 className="px-2 text-sm">Conectar</h1>
                        </div>
                      </div>
                    </div>
                    {/* <div class="">
                      <div class="rounded-lg bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                        <Link to={`/users/${element._id}`}>
                          <img
                            src={element.imageUrl}
                            alt="Imagen de guitarra"
                            class="w-full h-full object-center object-cover"
                          />
                        </Link>
                      </div>
                      <div class="pt-10 pb-4 text-center">
                        <h3 class="text-sm font-medium text-gray-900">
                          <Link to={`/users/${element._id}`}>
                            {element.nombre}
                          </Link>
                        </h3>
                        <div class="mt-3 flex flex-col items-center">
                          <p class="mt-1 text-sm text-gray-500">
                            
                          </p>
                        </div>
                        <p class="mt-4 text-base font-medium text-gray-900">
                          ${element.budget}
                        </p>
                      </div>
                    </div> */}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
