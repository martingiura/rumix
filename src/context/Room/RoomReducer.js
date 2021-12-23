// ./client/src/context/RoomReducer.js

const reducer = (globalState, action) => {
  switch (action.type) {
    case "GET_ROOM":
    case "UPDATE_ROOM":
      return {
        ...globalState,
        singleRoom: action.payload,
      };

    case "GET_ROOMS":
      return {
        ...globalState,
        rooms: action.payload,
      };

    default:
      return globalState;
  }
};

export default reducer;
