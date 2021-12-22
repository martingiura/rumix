// ./client/src/Layout/Header.js
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/User/UserContext";

export default function Header() {
  const ctx = useContext(UserContext);

  const { currentUser, verifyingToken, logoutUser } = ctx;

  useEffect(() => {
    verifyingToken();
  }, []);

  return (
    <header className="bg-blue-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link to="/">
              <img
                className="h-20 w-auto"
                src="https://i.ibb.co/yFgRYsh/Rumix-blanco.png"
                alt=""
              />
            </Link>
            <div className="ml-10 space-x-8 lg:block">
              <Link
                to="/users"
                className="text-base font-medium text-white hover:text-indigo-50 bg-orange-400"
              >
                Buscar Roomates
              </Link>
              <Link
                to="/rooms"
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                Buscar Habitaciones
              </Link>
              <Link
                to="/"
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                Descubrir
              </Link>
            </div>
          </div>
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {currentUser.nombre ? (
              <>
                <Link
                  to="/profile"
                  className="text-base font-medium text-white hover:text-indigo-50 mr-8"
                >
                  Tu perfil
                </Link>
                <a
                  onClick={() => logoutUser()}
                  href="/"
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  Cerrar sesión
                </a>
              </>
            ) : (
              <>
                <Link
                  to="/registro"
                  class="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
                >
                  Crear cuenta
                </Link>
                <Link
                  to="/iniciar-sesion"
                  class="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
                >
                  Iniciar sesión
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
