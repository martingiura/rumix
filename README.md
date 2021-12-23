**_Inicio de la app_**

Rumix es la aplicación para encontrar un compañero de piso confiable y compartir gastos en esa ciudad que tu quieres vivir.

En Rumix se encuentran dos modelos. Los USERS que son aquellos que se crean una cuenta para buscar un roomie y el modelo de los ROOMS que son las habitaciones disponibles en tu ciudad.

Actualmente la aplicacion esta disponible solo para Ciudad de Mexico, pero las ciudades iran aumentando a medida que nos expandimos. (23 de Dic 2021)

Rutas

**USUARIOS**

Variables en usuario para consultar.

    nombre,
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
    acceptedConnections

**//.1 Crear Usuario**
https://rumix-backend.herokuapp.com/users/create

{
"nombre": "Dulce",
"apellido": "Fabiola",
"pais": "México",
"direccion": "450",
"email": "correoejemplo@gmail.com",
"password": "",
"prefferedLocation": "Ciudad de Mexico",
"imageUrl": "https://i.ibb.co/XF1wSqX/dulce-fabiola.jpg",
"profileSummary": "Senior Web Developer",
"age": 26

}

**//.2 Leer Usuarios**
https://rumix-backend.herokuapp.com/users/readall

**//.3 Editar Usuarios**
https://rumix-backend.herokuapp.com/users/edit/:id

**ROOMS (Habitaciones)**

Variables de Rooms para consultar:

nombre,
descripcion,
precio,
imagen

**//.4 Crear una habitacion**
https://rumix-backend.herokuapp.com/rooms/create

**//.2 Leer una habitacion**
https://rumix-backend.herokuapp.com/rooms/readall

**//.5 Editar una habitacion**
https://rumix-backend.herokuapp.com/rooms/edit/:id
