// ./client/src/context/StoreReducer.js

const StoreReducer = (globalState, action) => {
  switch (action.type) {
    case "CHANGE_TEXT":
      return {
        ...globalState,
        hola: action.payload,
      };
    case "GET_STORES":
      return {
        ...globalState,
        stores: action.payload,
      };
    case "GET_STORE":
      return {
        ...globalState,
        singleStore: action.payload,
      };
    case "UPDATE_STORE":
      return {
        ...globalState,
        singleStore: action.payload,
      };

    default:
      return globalState;
  }
};

export default StoreReducer;
