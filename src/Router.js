// ./client/src/Router.js

// 1. IMPORTACIONES
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import Layout from "./components/Layout";
import UserState from "./context/User/UserState";
import Auth from "./routes/Auth";
import Profile from "./components/User/Profile";
import Private from "./routes/Private";
import Users from "./components/Users";
import SingleUser from "./components/Users/Single";
import EditProfile from "./components/Profile/EditProfile";
import RoomState from "./context/Room/RoomState";
import Rooms from "./components/Rooms";
import CreateRoom from "./components/Rooms/Create";
import SingleRoom from "./components/Rooms/Single";
import EditRoom from "./components/Rooms/Single/Edit";

// 2. FUNCIÓN
const Router = () => {
  return (
    <>
      <UserState>
        <RoomState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* localhost:3000/ */}
                <Route index element={<Home />} />
                {/* localhost:3000/registro */}
                <Route
                  path="registro"
                  element={<Auth component={Register} />}
                />
                {/* localhost:3000/iniciar-sesion */}
                <Route
                  path="iniciar-sesion"
                  element={<Auth component={Login} />}
                />
                {/* localhost:3000/guitarras */}
                {/* <Route path="guitarras" element={<Public component={Guitars} />} /> */}
                <Route path="rooms" element={<Private component={Rooms} />} />

                {/* localhost:3000/guitarras/crear */}
                <Route
                  path="rooms/crear"
                  element={<Private component={CreateRoom} />}
                />
                {/* localhost:3000/guitarras/:id */}
                <Route
                  path="rooms/:id"
                  element={<Private component={SingleRoom} />}
                />
                <Route
                  path="rooms/:id/editar"
                  element={<Private component={EditRoom} />}
                />
                <Route path="users" element={<Private component={Users} />} />
                <Route
                  path="users/:id"
                  element={<Private component={SingleUser} />}
                />
                <Route
                  path="users/:id/editar"
                  element={<Private component={EditProfile} />}
                />
                {/* localhost:3000/guitarras/:id/editar */}

                {/* localhost:3000/profile */}
                <Route
                  path="profile"
                  element={<Private component={Profile} />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </RoomState>
      </UserState>
    </>
  );
};

// 3. EXPORTACIÓN
export default Router;
