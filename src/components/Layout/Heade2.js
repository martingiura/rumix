// ./client/src/Layout/Header.js
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/User/UserContext";
import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Header() {
  const ctx = useContext(UserContext);

  const { currentUser, verifyingToken } = ctx;

  useEffect(() => {
    verifyingToken();
  }, []);

  const user = {
    name: currentUser.name,
    email: currentUser.email,
    imageUrl: currentUser.imageUrl,
  };
  const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Calendar", href: "#", current: false },
    { name: "Teams", href: "#", current: false },
    { name: "Directory", href: "#", current: false },
  ];
  const userNavigation = [
    { name: "Tu Perfil", href: "/profile" },
    { name: "Cerrar Sesión", href: "/logout" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (<>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "bg-white shadow-sm lg:static lg:overflow-y-visible"
          )
        }
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center">
                    <a href="#">
                      <img
                        className="block h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                        alt="Workflow"
                      />
                    </a>
                  </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                    <div className="w-full">
                      <label htmlFor="search" className="sr-only">
                        Buscar
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                          <SearchIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Search"
                          type="search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Abrir Menú</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                  <a
                    href="#"
                    className="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">Ver notificaciones</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </a>

                  {/* Profile dropdown */}
                  {currentUser.nombre ? (<>
                  <Menu as="div" className="hidden flex-shrink-0 relative ml-5">
                    
                      <div>
                        <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <span className="sr-only">Abrir menú del usuario</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={currentUser.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block py-2 px-4 text-sm text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    
                    </Menu>

                  <a
                    href="#"
                    className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Agregar Habitación
                  </a>

                </div>
                
              </div>
              
            </div>
           
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
            )
            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "hover:bg-gray-50",
                      "block rounded-md py-2 px-3 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {user.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">Ver notificaciones</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </>
          
        )}
      </Popover>
    </>
    
  );
})

{/* // <header className="bg-black">
//   <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
//     <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
//       <div className="flex items-center">
//         <Link to="/">
//           <img */}
{/* //             className="h-10 w-auto"
//             src="https://cdn.worldvectorlogo.com/logos/ironhack-1.svg"
//             alt=""
//           />
//         </Link>
//         <div className="ml-10 space-x-8 lg:block">
//           <Link */}
{/* //             to="/guitarras"
//             className="text-base font-medium text-white hover:text-indigo-50"
//           >
//             Guitarras
//           </Link>
//           <Link
//             to="/tiendas"
//             className="text-base font-medium text-white hover:text-indigo-50"
//           >
//             Tiendas
//           </Link>
//           <Link
//             to="/sobre-nosotros"
//             className="text-base font-medium text-white hover:text-indigo-50"
//           >
//             Sobre nosotros
//           </Link>
//         </div>
//       </div>
//       <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
//         {currentUser.nombre ? (
//           <Link
//             to="/profile"
//             className="text-base font-medium text-white hover:text-indigo-50"
//           >
//             Tu perfil
//           </Link>
//         ) : (
//           <>
//             <Link
//               to="/registro"
//               class="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
//             >
//               Crear cuenta
//             </Link>
//             <Link
//               to="/iniciar-sesion"
//               class="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
//             >
//               Iniciar sesión
//             </Link>
//           </>
//         )}
//       </div>
//     </div>
//   </nav>
// </header>
//   );
