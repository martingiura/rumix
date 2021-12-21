// ./new-client/src/components/Guitars/Create.js

import React, { useState, useContext } from "react";
import GuitarContext from "./../../context/Guitar/GuitarContext";

export default function Create() {
  // 1. ESTADO GLOBAL
  const ctx = useContext(GuitarContext);
  const { createGuitar } = ctx;

  // 2. ESTADO LOCAL
  const [newGuitar, setNewGuitar] = useState({
    nombre: "",
    precio: "",
    color: "",
    imagen: "",
    descripcion: "",
  });

  // 3. FUNCIONES
  const handleChange = (e) => {
    e.preventDefault();

    setNewGuitar({
      ...newGuitar,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createGuitar(newGuitar);
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
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Use a permanent address where you can recieve mail.
              </p>
            </div>

            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
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

              <div className="col-span-6 sm:col-span-4">
                <label
                  for="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Color
                </label>
                <select
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  name="color"
                  className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value={""}>---</option>
                  <option value={"Blanco con negro"}>Blanco con Negro</option>
                  <option value={"Rojo con blanco"}>Rojo con Blanco</option>
                </select>
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
              className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Guardar guitarra
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
