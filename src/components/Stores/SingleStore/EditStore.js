//./src/components/Guitars/Single/Edit.js

import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import StoreContext from "../../../context/Store/StoreContext";

export default function Edit() {
  // 1. ESTADO GLOBAL
  const params = useParams();
  const idStore = params.id;

  const ctx = useContext(StoreContext);

  const { singleStore, getStore, updateStore } = ctx;

  // 2. ESTADO LOCAL
  const [storeData, setStoreData] = useState({
    nombre: "",
    domiciliio: "",
    telefono: "",
  });

  // 3. FUNCIONES

  useEffect(() => {
    // 1. DESCARGAR LOS DATOS DE LA GUITARRA DE LA PÁGINA
    getStore(idStore);
  }, []);

  // 2. CAMBIAR EL ESTADO CON ESTOS NUEVOS CAMBIOS DEL GLOBAL AL LOCAL
  useEffect(() => {
    const { nombre, domicilio, telefono } = ctx.singleStore;

    setStoreData({
      nombre,
      domicilio,
      telefono,
    });
  }, [singleStore]);

  const handleChange = (e) => {
    e.preventDefault();

    setStoreData({
      ...storeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateStore(storeData, idStore);
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Editar Store
              </h3>
              <p class="mt-1 text-sm text-gray-500"></p>
            </div>

            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="first-name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Nombre
                </label>
                <input
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  type="text"
                  name="nombre"
                  value={storeData.nombre}
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="last-name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Domicilio
                </label>
                <input
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  type="text"
                  name="domicilio"
                  value={storeData.domicilio}
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="email-address"
                  class="block text-sm font-medium text-gray-700"
                >
                  Telefono
                </label>
                <input
                  type="text"
                  name="telefono"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  value={storeData.telefono}
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Guardar Tienda
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
