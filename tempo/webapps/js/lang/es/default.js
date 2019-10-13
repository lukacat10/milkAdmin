/**
	milkAdmin - WebAdministrator of Minecraft Server for Bukkit
    Copyright (C) 2010-2011  Alejandro Barreiro (Sharkiller)
**/
/*	
    This file is part of milkAdmin.

    This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
	To view a copy of this license, visit http'://creativecommons.org/licenses/by-nc-sa/3.0/ or send a letter to
	Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
*/

///////////////////////////////////////////////
//
//   Language for index.html
//
///////////////////////////////////////////////

var langIndex = {
	///////////////////
	//	Common
	///////////////////
	'lang1Yes': "Si",
	'lang1No': "No",
	'lang1OK': "Aceptar",
	'lang1Add': "Añadir",
	'lang1Cancel': "Cancelar",
	'lang1Send': "Enviar",
	'lang1Change': "Cambiar",
	'lang1On': "Encendido",
	'lang1Off': "Apagado",
	'lang1ReloadList': "Recargar Lista",
	'lang1IPAddress': "Direccion IP",
	'lang1Player': "Jugador",
	'lang1Action': "Accion",
	'lang1User': "Usuario",
	'lang1Password': "Contraseña",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "Sobre...",
	'langLogout': "Salir",
	'langChooseLanguage': "Elige un idioma:",
	'langTranslate': "Traducir a tu idioma",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "Nueva Version Disponible",
	'langVersionAvailable': "milkAdmin v_VER_ esta disponible", // milkAdmin v1.0 is available
	'langUpdateNow': "¿Deseas Actualizar Ahora?",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "Acerca de milkAdmin",
	'langDesign': "Diseño y programacion:",
	'langUpdates': "Actualizaciones:",
	'langThanks': "Gracias a:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Opciones de Bloqueo",
	'langKickPlayer': "Expulsar Jugador",
	'langBanPlayerName': "Bloquear el Nombre del Jugador",
	'langBanIPAddress': "Bloquear Direccion IP",
	'langCause': "Causa",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "Reiniciar Servidor",
	'langReloadServer': "Recargar Servidor",
	'langBackupStart': "Iniciar respaldo",
	'langSaveMap': "Guardar Mundo",
	'langStopServer': "Detener Servidor",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "Servidor",
	'langConsoleSM': "Consola",
	'langPluginsSM': "Plugins",
	'langBackupsSM': "Respaldos",
	'langPlayersSM': "Jugadores",
	'langBanListSM': "Lista de Jugadores Baneados",
	'langWhitelistSM': "Lista de Aceptados(Whitelist)",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "Ultimo Reinicio",
	'langAmountPlayersOnline': "Numero de Jugadores Online",
	'langFreeMemory': "Memoria Libre",
	'langUsedMemory': "Memoria Usada",
	'langTotalMemory': "Memoria Total",
	'langMaxMemory': "Limite maximo de memoria",
	'langTitleMemory': "Informacion de la memoria - <b>Memoria disponible</b>: Mostrar la cantidad de memoria disponible en el servidor.<br><b>Memoria en Uso</b>: Mostrar la cantidad de memoria usada en el servidor.<br><b>Memoria Total</b>: Mostrar la cantidad total de memoria que el servidor esta usando.<br><b>Memoria Total</b>: Mostrar la cantidad total de memoria que el servidor intentara usar.",
	'langFreeSpace': "Espacio disponible",
	'langUsedSpace': "Espacio Usado",
	'langTotalSpace': "Espacio total",
	'langTitleSpace': "Informacion del espacio - Basado en &quot;Carpeta de respaldo&quot; direccion.",
	'langServerVersion': "Version del Servidor",
	'langCraftbukkitBuild': "Craftbukkit build",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "Informacion del servidor",
	'langBroadcastMessage': "Mensaje global",
	'langTitleBroadcastMessage': "Mensaje global - Envia un mensaje a todos los jugadores sin etiqueta",
	'langLevelName': "Nombre del nivel principal",
	'langTitleLevelName': "Este valor sera utilizado como Nombre del mundo y Nombre de la Carpeta. <br> Deberas guardar los datos de tu Directorio de Salvado aqui, y cambiar el nombre a la misma que la carpeta que copiaste previamente en su viejo directorio.",
	'langMCIPPORT': "Direcion IP del servidor y Puerto",
	'langTitleMCIPPORT': "<b>IP:</b> Fija esto si quieres que el servidor se adjunte a una IP en particular. Es altamente recomendable dejar la IP del servidor en blanco.<br><b>Puerto:</b> Cambia el puerto en el que se ejecuta el servidor. Este puesto debe estar abierto si el servidor pasa por un router.<br><b>Valores válidos:</b><ul><li><b>IP:</b> En blanco o la IP en la que quieres que se ejecute tu servidor.</li><li><b>Puerto:</b> Un número entre <b>1-65535</b>. Predeterminado: <b>25565</b><ul><li>Debería ser mayor a 20000 para evitar conflictos con los puertos reservados.</li></ul></li></ul>",
	'langMaxPlayers': "Limite de Usuarios",
	'langTitleMaxPlayers': "El maximo de usarios que se permitiran jugar al mismo tiempo.<br><i>Recuerda que mientras mas usuarios puedan jugar, absorbe mas recursos y puede bajar el Rendimiento.</i><br><i>Recuerda tambien, que las conexiones realizadas por admins, no se contaran en el Limite de Usuarios.</i><br><b>Valores validos:</b><ul><li>Un numero entre <b>0-255</b>.</li></ul>",
	'langViewDistance': "Distancia de visibilidad",
	'langTitleViewDistance': "La cantidad de datos del mapa que el servidor enviara a los jugadores.<br><b>Valores validos:</b><ul><li>Un numero entre<b>3-15</b>. Predeterminado: <b>10</b></li></ul>",
	'langHoldMessage': "Esperando Mensaje",
	'langTitleHoldMessage': "Mensaje que MCSODRTK mostrará cuando el servidor está en suspenso.<br><i>Necesita MinecraftRemoteToolkit</i>",
	'langAllowNether': "1= Permitir Nether 2= Habilitar Nether",
	'langTitleAllowNether': "Permitir que los jugadores viajen al Nether.<ul><li><b>true</b> = El servidor permitira Portales para enviar jugadores al Nether.</li><li><b>false</b> = Los portales no viajaran al Nether.</li></ul>",
	'langSpawnMonsters': "Generar Monstruos",
	'langTitleSpawnMonsters': "Establece true si tu quieres que los monstruos aparezcan en la noche, false si no quieres.<br><i>Consejo: Si llegas a tener mucho lag, deshabilita esta opcion.</i><ul><li><b>true</b> = Los monstruos podran aparecer de noche y en la oscuridad.</li><li><b>false</b> = Los monstruos no podran aparecer.</li></ul>",
	'langSpawnAnimals': "Generar Animales",
	'langTitleSpawnAnimals': "Los animales estaran permitidos a aparecer.<ul><li><b>true</b> = Los Animales aparecen normalmente.</li><li><b>false</b> = Los animales se desvaneceran inmediatamente.</li></ul>",
	'langOnlineMode': "Modo En Línea (Verificar Nombres)",
	'langTitleOnlineMode': "El servidor comprueba la conexión de los jugadores con la base de datos de cuentas de Minecraft.<br>Solamente cambia el valor a \'false\' si tu servidor no usa una conexión a Internet.<ul><li><b>true</b> = El servidor asumirá que hay una conexión a Internet y comprobara en minecraft.net cada conexión de cada jugador. </li><li><b>false</b> = El servidor no comprobara la conexión de jugadores.</li></ul>",
	'langPVP': "Jugador vs Jugador (PVP)",
	'langTitlePVP': "Habilitar Jugador vs Jugador en el servidor. <br><i>Nota: Golpear a un jugador mientras tener PvP establecida en false y haber domado lobos<br>causará aún los lobos atacando el jugador atacado. </i><ul><li><b>true</b> = Jugadores será poder de matarse unos a otros. </li><li><b> false</b> = Jugadores no pueden matar a otros jugadores.</li></ul>",
	'langAllowFlight': "Permitir Volar",
	'langTitleAllowFlight': "Hhttp://{server ip}:{milkAdmin port}/Permitirá el uso de flight/no-clip en tu servidor, si ellos tienen un mod que permita flight/no-clip instalado<ul><li><b>true</b> = Flight/no clip esta permitido, y usado si el jugador tiene un no-clip mod instalado.</li><li><b>false</b> = Flight/no-clip no esta permitido.</li></ul>",
	'langWhitelist': "Whitelist",
	'langTitleWhitelist': "Habilitar una lista blanca en el servidor. Con una lista blanca habilitada, los usuarios no están en la lista blanca no podrá conectarse.<ul><li><b>True</b> = el archivo white-list.txt se utiliza para generar la lista blanca.</li><li><b> False</b> = No se utiliza la lista blanca.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "Lista de Aceptados(Whitelist)",
	'langWLAddPlayer': "Añadir Jugador",
	'langWLDeleteSelected': "Eliminar Seleccion",
	'langWLSaveChanges': "Guardar Cambios",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "Permitir Plug-in",
	'langEnable': "Activar",
	'langPluginName': "Nombre del Plug-in",
	'langVersion': "Version",
	'langReloadTheList': "Recargar la lista",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "Elige tu Copia de Seguridad",
	'langRestoreBackup': "Restaurar Copia de Seguridad",
	'langDeleteBackup': "Borrar Copia de Seguridad",
	'langBackupClear': "Recuerda eliminar directorios anteriores previamente a restablecer una copia de seguridad",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "Gestor de Usuarios",
	'langIP': "Direccion IP",
	'langPort': "Puerto",
	'langKill': "Asesinar",
	'langKick': "Echar",
	'langBanName': "Banear",
	'langBanIP': "Banear IP",
	'langAmount': "Cantidad de veces",
	'langShootArrow': "Disparar Flecha",
	'langShootFireball': "Disparar bola de fuego",
	'langThrowEgg': "Tirar Huevo",
	'langThrowSnowball': "Tirar Bola de Nieve",
	'langTeleportToPlayer': "Transportarte a un Jugador",
	'langTeleportToCoord': "Transportar a coordenadas",
	'langChangeName': "Cambiar nombre",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Banear direccion IP o Nombre",
	'langClearFilter': "Eliminar Filtro",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "Registrar a un nuevo administrador",
	'langCreateAdmin': "Crear administrador"
};

var jsIndex = {
	'sProcessing': "Procesando...",
	'sLengthMenu': "Mostrar_menu_plugins", // Show 10 plugins
	'sZeroRecords': "No se encontraron Plug-ins",
	'sInfo': "Mostrando_INICIO_->_FINAL_de_TOTAL_plugins", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "No hay plug-ins para mostrar",
	'sInfoFiltered': "(filtro de_MAXIMOS_plugins)", // (filter of 17 plugins)
	'sSearch': "Buscar plug-in",
	'sFirst': "Primero",
	'sPrevious': "Previo",
	'sNext': "Siguiente",
	'sLast': "Ultimo",
	'ReloadServer': "Recargando Servidor!",
	'RestartServer': "Reiniciando Servidor!",
	'StopServer': "Terminando Servidor!",
	'EnablePlugin': "Plug-in Habilitado!",
	'StartBackup': "Iniciando respaldo!",
	'RTKNeeded': "Necesitas el Plugin RemoteToolkit para usar esta Opcion!",
	'NoUsersOnline': "No hay jugadores En Linea",
	'NoBackups': "No hay respaldos!",
	'activate': "Activar",
	'deactivate': "Desactivar",
	'unban': "Desbanear",
	'MustLogin': "Necesitas iniciar Sesion!",
	'UnknownError': "Error Desconocido! Prueba de nuevo",
	'NotResponse': "El servidor no responde! Intentalo Nuevamente",
	'InvalidIP': "Direccion IP Invalida",
	'UpdateNow': "Actualizar ahora",
	'later': "Despues"
};

var jsAjax = {
	'accountcreated': "Cuenta Creada!",
	'worldsaved': "Mundo Guardado!",
	'messagesent': "Mensaje Enviado",
	'broadcastedmessage': "Emitir Mensaje",
	'forcestop': "Forzar a que se Detenga",
	'plugindisabled': "_NOMBRE_del plugin desactivado", // PluginX's plugin disabled.
	'pluginenabled': "_NOMBRE_del plugin habilitado", // PluginX's plugin enabled.
	'editedproperty': "Propiedad editada",
	'worldbackedup': "Mundo respaldado",
	'deletebackup': "Respaldo borrado",
	'kickplayer': "_NAME_ expulsado del servidor", // Sharkiller kicked from the server
	'itemsgiven': "_NAME_le fueron dados_AMOUNT_ unidades de _ITEM_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "_NAME_ le han sido quitadas _AMOUNT_ unidades de _ITEM", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ murio", // Sharkiller killed
	'healthchanged': "La vida de _NAME_ ha cambiado a _AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_ ha sido baneado!", // Sharkiller was banned!
	'playerunbanned': "_NAME_ ha sido desbaneado!", // Sharkiller was unbanned!
	'ipbanned': "La ip _IP_ ha sido Bloqueada con exito!", // 19.64.84.24 was banned!
	'ipunbanned': "La ip _IP_ ha sido desbaneada!", // 19.64.84.24 was unbanned!
	'arrowshooted': "Flecha Lanzada!", 
	'fireballshooted': "Bola de fuego disparada!", 
	'throwsnowball': "Bola de nieve lanzada!",
	'throwegg': "Huevo Lanzado!",
	'changename': "_OLD_ ha cambiado su nombre a _NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "Jugador Transportado",
	'langchanged': "Idioma Cambiado! Actualizando pagina...",
	'wlloaded': "Lista de Aceptados cargada!",
	'wladded': "Añadido a la Lista de Aceptados!",
	'wlsaved': "La Lista de Aceptados a sido guardada con exito!",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "Parametros incorrectos",
	'messageempty': "Mensaje vacio",
	'wladdfail': "Error al añadir el Jugador a la Lista Blanca",
	'wlsavefail': "No se ha podido guardar la Lista de Aceptados! Intenta Nuevamente",
	'playernotconnected': "Jugador desconectado",
	'playernotbanned': "Jugador no baneado",
	'ipnotbanned': "IP no baneada",
	'langnotfound': "Idioma no encontrado!"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "Iniciar Seccion en milkAdmin",
	'langUsername': "Usuario",
	'langPassword': "Contraseña",
	'langLogin': "Iniciar sesión"
};

var jsLogin = {
	'welcome': "Bienvenido! Cargando pagina....",
	'UnknownError': "Error Desconocido! Prueba de nuevo",
	'NotResponse': "El servidor no responde! Intentalo Nuevamente",
	'invalidlogin': "Usuario o contraseña incorrectos"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "Crear una cuenta",
	'langUsername': "Usuario",
	'langPassword': "Contraseña",
	'langCreateAccount': "Crear cuenta"
};

var jsRegister = {
	'created': "Cuenta creada! Cargando pagina...",
	'notadmin': "No se puede usar \"admin\" como usuario",
	'baduser': "Por favor ingresa un usuario y contraseña validos",
	'UnknownError': "Error Desconocido! Prueba de nuevo",
	'NotResponse': "El servidor no responde! Intentalo Nuevamente",
	'error': "Usuario y contraseña incorrectos"
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "Iniciar servidor"
};

///////////////////////////////////////////////
//
//   Language for wait.html
//
///////////////////////////////////////////////

var langWait = {
	'langPleaseWait20Seconds': "Por favor espere 20 segundos"
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "Realizando copia de Seguridad"
};

var jsBackup = {
	'Complete': "Copia de Segurida Completada! Iniciando servidor.",
	'UnknownError': "Error Desconocido! Prueba de nuevo",
	'NotResponse': "El servidor no responde! Intentalo Nuevamente"
};