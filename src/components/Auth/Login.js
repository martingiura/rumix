// ./client/src/Auth/Login.js
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/User/UserContext";

export default function Login() {
  const ctx = useContext(UserContext);

  const { loginUser } = ctx;

  // 1. ESTADO LOCAL
  const [logUser, setLogUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    setLogUser({
      ...logUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(logUser);
  };

  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md bg-blue-600">
        <img
          className="mx-auto h-12 w-auto bg-blue-600"
          src="https://i.ibb.co/yFgRYsh/Rumix-blanco.png"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Iniciar sesión
        </h2>
        <p className="mt-2 text-center text-sm text-white">
          ¿Aún sin cuenta?
          <Link to="/registro">
            <a className="font-medium text-yellow-500 hover:text-yellow-300 ml-2">
              Regístrate aquí.
            </a>
          </Link>
        </p>
      </div>

      <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-md ">
        <div className="bg-white py-8 px-4 shadow sm:px-10 bg-blue-600">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div>
              <label
                for="email"
                className="block text-sm font-medium text-orange-300"
              >
                Tu correo electrónico
              </label>
              <div className="mt-1">
                <input
                  onChange={(evt) => {
                    handleChange(evt);
                  }}
                  name="email"
                  type="email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for="password"
                className="block text-sm font-medium text-orange-300"
              >
                Tu contraseña
              </label>
              <div className="mt-1">
                <input
                  onChange={(evt) => {
                    handleChange(evt);
                  }}
                  name="password"
                  type="password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-400 hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Acceder a tu cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
