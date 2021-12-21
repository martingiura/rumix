// ./src/context/User/UserReducer.js

const reducer = (globalState, action) => {
  switch (action.type) {
    case "REGISTRO_EXITOSO":
    case "LOGIN_EXITOSO":
      localStorage.setItem("token", action.payload);

      return {
        ...globalState,
        authStatus: true,
      };

    case "GET_DATA_USER":
      return {
        ...globalState,
        authStatus: true,
        currentUser: action.payload,
      };
    case "LOGOUT_USUARIO":
      localStorage.removeItem("token");
      return {
        ...globalState,
        user: null,
        authStatus: null,
        msg: action.payload,
      };

    case "GET_USERS":
      return {
        ...globalState,
        users: action.payload,
      };

    case "GET_USER":
      return {
        ...globalState,
        singleUser: action.payload,
      };

    case "UPDATE_USER":
      return {
        ...globalState,
        singleUser: action.payload,
      };

    case "DELETE_USER":
      return {
        ...globalState,
        singleUser: [
          globalState.singleUser.filter((_id) => _id !== action.payload),
        ],
      };

    default:
      return globalState;
  }
};

export default reducer;
