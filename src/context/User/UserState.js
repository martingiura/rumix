// ./src/context/User/UserState.js
import { useReducer } from "react";

import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import axiosClient from "./../../config/axios";

const UserState = (props) => {
  // 1. INITIAL STATE
  const initialState = {
    users: [],
    currentUser: {
      _id: "",
      nombre: "",
      apellido: "",
      pais: "",
      domicilio: "",
      email: "",
      password: "",
      prefferedLocation: "Ciudad de Mexico",
    },
    singleUser: {
      _id: "",
      nombre: "",
      apellido: "",
      pais: "",
      direccion: "",
      email: "",
      password: "",
      imageUrl: "",
      telefono: "",
      rol: "",
      roomatesWishList: "",
      profileIsPublic: "",
      verifiedStatus: "",
      genre: "",
      age: "",
      favoriteRooms: "",
      profileSummary: "",
      profileDescription: "",
      prefferedLocation: "",
      movingDate: "",
      budget: "",
      frequencyCleaningRoom: "",
      smokingPreferences: "",
      petsPreferences: "",
      visitPreferences: "",
      acceptedConnections: "",
    },
    authStatus: false,
  };

  // 2. CONFIGURACIÓN DEL REDUCER
  const [globalState, dispatch] = useReducer(UserReducer, initialState);

  // 3. FUNCIONES
  const registerUser = async (form) => {
    const res = await axiosClient.post("users/create", form);

    console.log(res);

    const token = res.data.data;

    dispatch({
      type: "REGISTRO_EXITOSO",
      payload: token,
    });
  };

  const loginUser = async (form) => {
    console.log(form);

    const res = await axiosClient.post("users/login", form);

    console.log(res);

    const token = res.data.data;

    dispatch({
      type: "LOGIN_EXITOSO",
      payload: token,
    });
  };

  const verifyingToken = async () => {
    const token = localStorage.getItem("token");

    // ANEXAR TOKEN A LA SIGUIENTE PETICIÓN DE AXIOS
    if (token) {
      axiosClient.defaults.headers.common["x-auth-token"] = token;
    } else {
      delete axiosClient.defaults.headers.common["x-auth-token"];
    }

    try {
      const res = await axiosClient.get("users/verifytoken");

      console.log(res);

      const userData = res.data.data;

      dispatch({
        type: "GET_DATA_USER",
        payload: userData,
      });
    } catch (error) {
      // console.log(error);
    }
  };

  const logoutUser = async () => {
    dispatch({
      type: "LOGOUT_USUARIO",
    });
  };

  const getUser = async (userId) => {
    console.log(userId);

    const res = await axiosClient.get(`users/readone/${userId}`);

    console.log(res);

    const selectedUser = res.data.data;

    dispatch({
      type: "GET_USER",
      payload: selectedUser,
    });
  };

  const getUsers = async () => {
    const res = await axiosClient.get("users/readall");

    console.log("Obteniendo usuarios...");

    const list = res.data.data;

    dispatch({
      type: "GET_USERS",
      payload: list,
    });
  };

  const updateUser = async (form, idUser) => {
    const res = await axiosClient.put(`users/edit/${idUser}`, form);

    const updatedUser = res.data.data;

    dispatch({
      type: "UPDATE_USER",
      payload: updatedUser,
    });
  };

  const deleteUser = async (idUser) => {
    const res = await axiosClient.delete(`users/delete/${idUser}`);

    dispatch({
      type: "DELETE_USER",
    });

    res.redirect("/registro");
  };

  // 4. RETORNO
  return (
    <UserContext.Provider
      value={{
        users: globalState.users,
        singleUser: globalState.singleUser,
        currentUser: globalState.currentUser,
        authStatus: globalState.authStatus,
        registerUser,
        loginUser,
        verifyingToken,
        logoutUser,
        getUsers,
        getUser,
        updateUser,
        deleteUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
