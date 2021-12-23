import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserContext from "../../context/User/UserContext";

export default function EditProfile() {
  // 1. ESTADO GLOBAL
  const params = useParams();
  const idUser = params.id;

  const ctx = useContext(UserContext);

  const { singleUser, getUser, updateUser, currentUser } = ctx;

  // 2. ESTADO LOCAL
  const [userData, setUserData] = useState({
    _id: "",
    nombre: "",
    apellido: "",
    pais: "",
    direccion: "",
    email: "",
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
  });

  // 3. FUNCIONES

  // USEEFFECT PARA ACTUALIZAR DATOS EN EL ESTADO GLOBAL
  useEffect(() => {
    getUser(idUser);
  }, []);

  // USEEFFECT PARA ACTUALIZAR LOS DATOS DEL ESTADO GLOBAL AL ESTADO LOCAL
  useEffect(() => {
    const {
      nombre,
      _id,
      apellido,
      pais,
      direccion,
      email,
      imageUrl,
      telefono,
      rol,
      roomatesWishList,
      profileIsPublic,
      verifiedStatus,
      genre,
      age,
      favoriteRooms,
      profileSummary,
      profileDescription,
      prefferedLocation,
      movingDate,
      budget,
      frequencyCleaningRoom,
      smokingPreferences,
      petsPreferences,
      visitPreferences,
      acceptedConnections,
    } = ctx.singleUser;

    setUserData({
      _id: _id,
      nombre: nombre,
      apellido: apellido,
      pais: pais,
      direccion: direccion,
      email: email,
      imageUrl: imageUrl,
      telefono: telefono,
      rol: rol,
      roomatesWishList: roomatesWishList,
      profileIsPublic: profileIsPublic,
      verifiedStatus: verifiedStatus,
      genre: genre,
      age: age,
      favoriteRooms: favoriteRooms,
      profileSummary: profileSummary,
      profileDescription: profileDescription,
      prefferedLocation: prefferedLocation,
      movingDate: movingDate,
      budget: budget,
      frequencyCleaningRoom: frequencyCleaningRoom,
      smokingPreferences: smokingPreferences,
      petsPreferences: petsPreferences,
      visitPreferences: visitPreferences,
      acceptedConnections: acceptedConnections,
    });
  }, [singleUser]);

  const handleChange = (e) => {
    e.preventDefault();

    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUser(userData, idUser);
    navigate("/profile/");
  };

  return (
    <>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-12 mb-12 ml-12">
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
          className="space-y-8 divide-y divide-gray-200"
        >
          <div className="space-y-8 divide-y divide-gray-200">
            <div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Tu Perfil Público
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Parte de esta información será compartida con la comunidad de
                  Rumix. Asegurate de cumplir nuestras políticas de contenido y
                  lenguaje.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="profileDescription"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Acerca de Ti
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <textarea
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="text"
                      name="profileDescription"
                      id="profileDescription"
                      rows={3}
                      value={userData.profileDescription}
                      autoComplete="Cuentanos algo acerca de ti"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="profileSummary"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ¿Cómo te definirías profesionalmente?
                  </label>
                  <div className="mt-1">
                    <textarea
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      id="profileSummary"
                      name="profileSummary"
                      value={userData.profileSummary}
                      rows={3}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    En máximo 5 palabras.
                  </p>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="imageUrl"
                    className="block text-sm font-medium text-gray-700"
                  >
                    URL de Imagen de Perfil
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="text"
                      name="imageUrl"
                      id="imageUrl"
                      value={userData.imageUrl}
                      autoComplete="https://"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Foto de Perfil
                  </label>
                  <div className="mt-1 flex items-center">
                    <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    <button
                      type="button"
                      className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Cambiar Foto
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Preferencias de Compañero de Cuarto
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Incluye tu dirección permanente donde resides actualmente
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="frequencyCleaningRoom" className="block mt-4">
                    ¿Con qué frecuencia limpias tu departamento?
                    <span className="text-gray-700"></span>
                    <select
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="text"
                      name="frequencyCleaningRoom"
                      id="frequencyCleaningRoom"
                      value={userData.frequencyCleaningRoom}
                      className="form-select mt-1 block w-full"
                    >
                      <option>1 vez por semana</option>
                      <option>2 veces por semana</option>
                      <option>+ de 4 veces a la semana</option>
                      <option>Todos los días</option>
                    </select>
                  </label>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="smokingPreferences" className="block mt-4">
                    ¿Fumas?
                    <span className="text-gray-700"></span>
                    <select
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="text"
                      name="smokingPreferences"
                      id="smokingPreferences"
                      value={userData.smokingPreferences}
                      className="form-select mt-1 block w-full"
                    >
                      <option>No soporto el cigarro</option>
                      <option>Me es indiferente el cigarrillo</option>
                      <option>Fumo</option>
                    </select>
                  </label>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="petsPreferences" className="block mt-4">
                    ¿Cuál es tu opinión sobre las mascotas?
                    <span className="text-gray-700"></span>
                    <select
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      id="petsPreferences"
                      name="petsPreferences"
                      type="petsPreferences"
                      autoComplete="email"
                      value={userData.petsPreferences}
                      className="form-select mt-1 block w-full"
                    >
                      <option>Me encantan las mascotas</option>
                      <option>Tengo Perro</option>
                      <option>Tengo un Gato</option>
                      <option>No me gustan los animales</option>
                      <option>Me son indiferentes los animales</option>
                      <option>
                        Los animales no deberían existir en este mundo
                      </option>
                    </select>
                  </label>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="smokingPreferences" className="block mt-4">
                    ¿Cuál es tu opinión sobre las visitas?
                    <span className="text-gray-700"></span>
                    <select
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      id="visitPreferences"
                      name="visitPreferences"
                      type="visitPreferences"
                      autoComplete="--"
                      value={userData.visitPreferences}
                      className="form-select mt-1 block w-full"
                    >
                      <option>Recibo visitas con frecuencia</option>
                      <option>Recibo visitas de forma esporádica</option>
                      <option>No me gusta recibir visitas</option>
                      <option>
                        Las recibo con frecuencia y no me molestan
                      </option>
                      <option>
                        Prefiero vivir con alguien que no reciba visitas
                      </option>
                    </select>
                  </label>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="prefferedLocation" className="block mt-4">
                    Ciudad preferida para mudarte
                    <span className="text-gray-700"></span>
                    <select
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      id="prefferedLocation"
                      name="prefferedLocation"
                      type="prefferedLocation"
                      autoComplete="--"
                      value={userData.prefferedLocation}
                      className="form-select mt-1 block w-full"
                    >
                      <option>Ciudad de México</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Información Personal
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Incluye tu dirección permanente donde resides actualmente
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Edad
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="number"
                      name="age"
                      id="age"
                      value={userData.age}
                      autoComplete="18"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Primer Nombre
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="text"
                      name="nombre"
                      id="nombre"
                      value={userData.nombre}
                      autoComplete="Juan Perez"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={userData.email}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    País
                  </label>
                  <div className="mt-1">
                    <select
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      id="Pais"
                      name="pais"
                      autoComplete="pais"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    >
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="direccion"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Direccion
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="text"
                      name="direccion"
                      id="direccion"
                      autoComplete="Tu direccion"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-400 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
