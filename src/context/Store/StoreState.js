// ./client/src/context/Store/StoreState.js

// ESTADO GLOBAL - STORE

// LA ARQUITECTURA QUE SE UTILIZA PARA GENERAR EL ESTADO GLOBAL SE LE CONOCE COMO FLUX.

import { useReducer } from "react";
import StoreContext from "./StoreContext";
import StoreReducer from "./StoreReducer";
import axiosClient from "../../config/axios";

const StoreState = (props) => {
  // 1. INITIAL STATE (ESTADO INICIAL)
  const initialState = {
    stores: [],
    hola: "hola",
    singleStore: {
      _id: "",
      nombre: "",
      domicilio: "",
      telefono: "",
      descripcion: "",
      imagen: "",
    },
  };

  // 2. CONFIGURACIÓN DE REDUCER Y CREACIÓN DE ESTADO GLOBAL
  const [globalState, dispatch] = useReducer(StoreReducer, initialState);
  // 3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
  const changeText = () => {
    dispatch({
      // ESTE OBJETO SE LE CONOCE COMO ACTION
      type: "CHANGE_TEXT",
      payload: "Estoy aprendiendo Context sin morir.",
    });
  };

  const getStores = async () => {
    const res = await axiosClient.get("stores/readall");

    console.log("Obteniendo stores...");

    const list = res.data.data;

    dispatch({
      type: "GET_STORES",
      payload: list,
    });
  };

  const getStore = async (storeId) => {
    const res = await axiosClient.get(`stores/readone/${storeId}`);

    const singleStore = res.data.data;

    dispatch({
      type: "GET_STORE",
      payload: singleStore,
    });
  };
  const createStore = async (form) => {
    const res = await axiosClient.post("stores/create", form);

    console.log(res);
  };

  const updateStore = async (form, idStore) => {
    const res = await axiosClient.put(`stores/edit/${idStore}`, form);

    const updatedStore = res.data.data;

    dispatch({
      type: "UPDATE_STORE",
      payload: updatedStore,
    });
  };
  // 4. RETORNO
  return (
    <StoreContext.Provider
      value={{
        stores: globalState.stores,
        hola: globalState.hola,
        singleStore: globalState.singleStore,
        changeText,
        getStores,
        getStore,
        createStore,
        updateStore,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreState;
