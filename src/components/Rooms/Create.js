// ./new-client/src/components/Guitars/Create.js

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import RoomContext from "../../context/Room/RoomContext";

export default function CreateRoom() {
  // 1. ESTADO GLOBAL
  const ctx = useContext(RoomContext);
  const { createRoom } = ctx;

  // 2. ESTADO LOCAL
  const [newRoom, setNewRoom] = useState({
    nombre: "",
    precio: "",
    imagen: "",
    descripcion: "",
  });

  // 3. FUNCIONES
  const handleChange = (e) => {
    e.preventDefault();

    setNewRoom({
      ...newRoom,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // e.preventDefault();

    createRoom(newRoom);
    navigate("/rooms/");
  };
  return (
    <>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div classNam="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Anuncia tu Habitación en Ciudad de México
              </h3>
              <p className="mt-1 text-sm text-gray-500"></p>
            </div>

            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Título de tu publicación:
                </label>
                <input
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  type="text"
                  name="nombre"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  for="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Precio (MXN)
                </label>
                <input
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  type="number"
                  name="precio"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  for="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Imagen
                </label>
                <input
                  type="text"
                  name="imagen"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-6 lg:col-span-4">
                <label
                  for="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Descripción
                </label>
                <textarea
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  type="text"
                  name="descripcion"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Publicar Habitación
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
