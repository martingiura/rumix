// ./client/src/context/Store/StoreContext.js
// StoreCONTEXT
// INICIALIZACIÓN DEL CONTEXT, ESTO SIGNIFICA QUE EMPIEZA CON UN VALOR INICIAL DE NULL, PERO, CONFORME VAYAMOS AGREGANDO NUEVOS VALORES, ESE NULL VA A CAMBIAR A UN OBJETO
import { createContext } from "react";

const StoreContext = createContext(null);

export default StoreContext;
