// ./client/src/components/Home.js
import React, { useContext } from "react";
import UserContext from "../context/User/UserContext";

export default function Home() {
  const ctx = useContext(UserContext);

  const { verifyingToken } = ctx;

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">Este es el Home</div>
  );
}
