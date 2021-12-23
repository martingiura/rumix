// ./client/src/components/Rooms/index.js
import React, { useEffect, useContext } from "react";
import RoomContext from "../../context/Room/RoomContext";

import { Link } from "react-router-dom";

export default function Rooms() {
  // ESTADO GLOBAL
  const ctx = useContext(RoomContext);

  const { rooms, getRooms } = ctx;

  // ESTADO LOCAL

  // EL MOMENTO EN QUE SE EJECUTA EL USE EFFECT ES DESPUÉS DEL RETURN.
  useEffect(() => {
    getRooms();
  }, []); // CUANDO HAY UN ARREGLO VACÍO, SIGNIFICA QUE VA A EJECUTARSE UNA SOLA VEZ.

  return (
    <>
      <div className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
        <div class="md:flex md:items-center md:justify-between">
          <div class="flex-1 min-w-0">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Listado de Habitaciones disponibles en Ciudad de México
            </h2>
          </div>
          <div class="mt-4 flex md:mt-0"></div>
        </div>

        <div class="bg-white">
          <div>
            <div class="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {rooms.map((element) => {
                return (
                  <>
                    <div class="">
                      <div class="rounded-lg bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75 mr-6">
                        <Link to={`/rooms/${element._id}`}>
                          <img
                            src={element.imagen}
                            alt="Imagen de Habitacion"
                            class="w-full h-full object-center object-cover"
                          />
                        </Link>
                      </div>
                      <div class="pt-10 pb-4 text-center">
                        <h3 class="text-sm font-medium text-gray-900">
                          <Link to={`/rooms/${element._id}`}>
                            {element.nombre}
                          </Link>
                        </h3>
                        <div class="mt-3 flex flex-col items-center">
                          <p class="mt-1 text-sm text-gray-500">
                            {element.descripcion}
                          </p>
                        </div>
                        <p class="mt-4 text-base font-medium text-gray-900">
                          $MXN {Number(element.precio).toLocaleString()} / mes
                        </p>
                      </div>
                    </div>
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
