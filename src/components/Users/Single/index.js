import React, { useContext, useEffect } from "react";
import UserContext from "../../../context/User/UserContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function SingleUser() {
  const ctx = useContext(UserContext);
  const { getUser, singleUser } = ctx;
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    getUser(id);
  }, []);
  return (
    <>
      <div>
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:max-w-lg lg:self-end">
              <nav aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-2">
                  <li>
                    <div className="flex items-center text-sm">
                      <Link
                        to="/guitarras"
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        Roomates
                      </Link>
                      <svg
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-2 flex-shrink-0 h-5 w-5 text-gray-300"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center text-sm">
                      <Link
                        to="/users"
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        Roomates
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <div className="mt-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-blue-600 sm:text-4xl">
                  Nombre
                  <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {singleUser.nombre}
                  </h1>
                  <button
                    type="button"
                    class="mt-6 ml-0 mr-6 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-400 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Quiero conectar con {singleUser.nombre}
                  </button>
                </h1>
              </div>
              <section aria-labelledby="information-heading" className="mt-4">
                <h2 id="information-heading" className="sr-only">
                  Nombre
                </h2>
                <div className="flex items-center">
                  <p className="text-lg text-blue-600 sm:text-xl">
                    Perfil Profesional:
                    <p>{singleUser.profileSummary}</p>
                  </p>
                  <div className="ml-4 pl-4 border-l border-gray-300">
                    <h2 className="sr-only">Reviews</h2>
                    <div className="flex items-center">
                      <div>
                        <div className="flex items-center">
                          <svg
                            className="text-yellow-400 h-5 w-5 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            className="text-yellow-400 h-5 w-5 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            className="text-yellow-400 h-5 w-5 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            className="text-yellow-400 h-5 w-5 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            className="text-gray-300 h-5 w-5 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <p className="sr-only">4 out of 5 stars</p>
                      </div>
                      <p className="ml-2 text-sm text-gray-500">1624 reviews</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-6">
                  <p className="text-base text-gray-500">
                    Presupuesto mensual: $MNX {singleUser.budget}
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="text-3xl font-extrabold tracking-tight text-blue-600 sm:text-xl">
                    ¿Con qué frecuencia limpias tu cuarto?
                    <div className="mt-8 text-lg text-gray-900 sm:text-xl">
                      {singleUser.frequencyCleaningRoom}
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-3xl font-extrabold tracking-tight text-blue-600 sm:text-xl">
                  ¿Fumas?
                  <div className="mt-8 text-lg text-gray-900 sm:text-xl">
                    {singleUser.smokingPreferences}
                  </div>
                </div>

                <div className="mt-8 text-3xl font-extrabold tracking-tight text-blue-600 sm:text-xl">
                  ¿Que piensas acerca de las mascotas?
                  <div className="mt-8 text-lg text-gray-900 sm:text-xl">
                    {singleUser.petsPreferences}
                  </div>
                </div>

                <div className="mt-8 text-3xl font-extrabold tracking-tight text-blue-600 sm:text-xl">
                  ¿Que piensas acerca de las visitas a la casa o departamento?
                  <div className="mt-8 text-lg text-gray-900 sm:text-xl">
                    {singleUser.visitPreferences}
                  </div>
                </div>
              </section>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={singleUser.imageUrl}
                  alt={`Imagen de ${singleUser.nombre}`}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
            <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
              <section aria-labelledby="options-heading"></section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
