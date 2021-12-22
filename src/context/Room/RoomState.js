// ./client/src/context/Guitar/GuitarState.js

// ESTADO GLOBAL - STORE

// LA ARQUITECTURA QUE SE UTILIZA PARA GENERAR EL ESTADO GLOBAL SE LE CONOCE COMO FLUX.

import { useReducer } from "react";
import RoomContext from "./RoomContext";
import RoomReducer from "./RoomReducer";

import axiosClient from "../../config/axios";

const RoomState = (props) => {
  // 1. INITIAL STATE (ESTADO INICIAL)
  const initialState = {
    rooms: [],
    singleRoom: {
      _id: "",
      nombre: "",
      descripcion: "",
      precio: "",
      imagen: "",
    },
  };

  // 2. CONFIGURACIÓN DE REDUCER Y CREACIÓN DE ESTADO GLOBAL
  // REDUCERS SON FUNCIONES QUE ALTERAN EL ESTADO GLOBAL
  const [globalState, dispatch] = useReducer(RoomReducer, initialState);

  // 3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL

  const getRooms = async () => {
    const res = await axiosClient.get("rooms/readall");

    console.log("Obteniendo rooms...");

    const list = res.data.data;

    dispatch({
      type: "GET_ROOMS",
      payload: list,
    });
  };

  const getRoom = async (roomId) => {
    console.log(roomId);

    const res = await axiosClient.get(`rooms/readone/${roomId}`);

    console.log(res);

    const selectedRoom = res.data.data;

    dispatch({
      type: "GET_ROOM",
      payload: selectedRoom,
    });
  };

  const createRoom = async (form) => {
    const res = await axiosClient.post("rooms/create", form);

    console.log(res);
  };

  const updateRoom = async (form, idRoom) => {
    const res = await axiosClient.put(`rooms/edit/${idRoom}`, form);

    const updatedRoom = res.data.data;

    dispatch({
      type: "UPDATE_ROOM",
      payload: updatedRoom,
    });
  };

  const deleteRoom = async (idUser) => {
    const res = await axiosClient.delete(`rooms/delete/${idUser}`);
  };

  // 4. RETORNO
  return (
    <RoomContext.Provider
      value={{
        rooms: globalState.rooms,
        singleRoom: globalState.singleRoom,
        getRooms,
        getRoom,
        createRoom,
        updateRoom,
        deleteRoom,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
};

export default RoomState;
