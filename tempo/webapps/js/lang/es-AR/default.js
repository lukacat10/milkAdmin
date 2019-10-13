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
	'lang1Add': "Agregar",
	'lang1Cancel': "Cancelar",
	'lang1Send': "Enviar",
	'lang1Change': "Cambiar",
	'lang1On': "Encendido",
	'lang1Off': "Apagado",
	'lang1ReloadList': "Recargar Lista",
	'lang1IPAddress': "Dirección IP",
	'lang1Player': "Jugador",
	'lang1Action': "Acción",
	'lang1User': "Usuario",
	'lang1Password': "Contraseña",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "Acerca de...",
	'langLogout': "Salir",
	'langChooseLanguage': "Elige un Idioma:",
	'langTranslate': "Traduzca a su idioma",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "Nueva Versión Disponible",
	'langVersionAvailable': "milkAdmin v_VER_ está disponible", // milkAdmin v1.0 is available
	'langUpdateNow': "¿Quieres actualizar ahora?",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "Acerca de milkAdmin",
	'langDesign': "Diseño y Programación:",
	'langUpdates': "Actualizaciones:",
	'langThanks': "Gracias a:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Opciones de Baneo",
	'langKickPlayer': "Kickear Jugador",
	'langBanPlayerName': "Banear Nombre de Jugador",
	'langBanIPAddress': "Banear Dirección de IP",
	'langCause': "Causa",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "Reiniciar Server",
	'langReloadServer': "Recargar Server",
	'langBackupStart': "Iniciar Backup",
	'langSaveMap': "Guardar Mapa",
	'langStopServer': "Detener Server",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "Servidor",
	'langConsoleSM': "Consola",
	'langPluginsSM': "Plugins",
	'langBackupsSM': "Backups",
	'langPlayersSM': "Jugadores",
	'langBanListSM': "Baneados",
	'langWhitelistSM': "Lista Blanca",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "Último Reinicio",
	'langAmountPlayersOnline': "Cantidad de Jugadores Conectados",
	'langFreeMemory': "Memoria Libre",
	'langUsedMemory': "Memoria Usada",
	'langTotalMemory': "Memoria Total",
	'langMaxMemory': "Memoria Máxima",
	'langTitleMemory': "Datos de Memoria - <b>Memoria Libre</b>: Muestra la cantidad de memoria libre que tiene el servidor de Minecraft.<br><b>Memoria Usada</b>: Muestra la cantidad de memoria usada por el servidor de Minecraft.<br><b>Memoria Total</b>: Muestra la cantidad de memoria que el servidor de Minecraft tiene reservada.<br><b>Memoria Máxima</b>: Muestra la cantidad de memoria máxima que el servidor de Minecraft podría llegar a usar.",
	'langFreeSpace': "Espacio Libre",
	'langUsedSpace': "Espacio Usado",
	'langTotalSpace': "Espacio Total",
	'langTitleSpace': "Datos de Espacio - Se basa en la ubicación de la carpeta de Backups.",
	'langServerVersion': "Versión del Servidor",
	'langCraftbukkitBuild': "Craftbukkit Build",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "Información del Servidor",
	'langBroadcastMessage': "Transmitir Mensaje",
	'langTitleBroadcastMessage': "Transmitir Mensaje",
	'langLevelName': "Nombre del Mapa Principal",
	'langTitleLevelName': "El valor se utilizará como nombre de mundo y como nombre de la carpeta.<br>También puede copiar la carpeta de juego guardado aquí, y cambiar el nombre a la misma que la carpeta a la carga en su lugar.",
	'langMCIPPORT': "IP y Puerto de Minecraft",
	'langTitleMCIPPORT': "<b>IP:</b>Active esto si desea que el servidor se enlace a una IP determinada. Se recomienda encarecidamente que deje server-ip en blanco <br> <b> Puerto:</b> Cambia el puerto del servidor donde esta alojado. Este puerto debe ser desbloqueado si el servidor está pasando por un router.<br><b>Valores válidos:</b><ul><li><b>IP:</b> En blanco, o la IP que desea que su servidor utlice.</li><li><b>Puerto:</b> Un número entre <b>1-65535</b>. Por defecto: <b>25565</b><ul><li>Debe ser superior a 20.000 para evitar conflictos con los puertos reservados del sistema.</li></ul></li></ul>",
	'langMaxPlayers': "Cantidad Máxima de Jugadores",
	'langTitleMaxPlayers': "El número de máximo de jugadores que pueden jugar en el servidor al mismo tiempo.<br><i>Tenga en cuenta que si hay más jugadores en el servidor se utilizarán más recursos.</i><br><i>Tenga en cuenta también, que las conexiones de administradores no se deducirán como máximo jugador.</i><br><b>Valores válidos:</b><ul><li>Un número entre <b>0-255</b>.</li></ul>",
	'langViewDistance': "Vista a Distancia",
	'langTitleViewDistance': "La cantidad de chunks a la redonda que el server le enviará al jugador.<br><b>Valores válidos:</b><ul><li>Un número entre <b>3-15</b>. Default: <b>10</b></li></ul>",
	'langHoldMessage': "Mensaje de Espera",
	'langTitleHoldMessage': "Mensaje que MCSODRTK mostrará cuando el servidor este en espera (Hold).<br><i>Necesita MinecraftRemoteToolkit</i>",
	'langAllowNether': "Permitir Nether",
	'langTitleAllowNether': "Permitir a los jugadores viajar a la Nether.<ul><li><b>Encendido</b> = El servidor permite usar los Portales para enviar a los jugadores a la Nether.</li><li><b>Apagado</b> = Los Portales se desactivan.</li></ul>",
	'langSpawnMonsters': "Generar Monstruos",
	'langTitleSpawnMonsters': "Enciendalo para que los monstruos aparezcan por la noche, o apaguelo si no quiere.<br><i>Consejo: si experimenta mucho lag, apaguelo.</i><ul><li><b>Encendido</b> = Monstruos aparecen en la noche y en la oscuridad.</li><li><b>Apagado</b> = Sin monstruos.</li></ul>",
	'langSpawnAnimals': "Generar Animales",
	'langTitleSpawnAnimals': "Permiso para que aparezcan animales.<ul><li><b>Encendido</b> = Los animales aparecen normalmente.</li><li><b>Apagado</b> = Los animales desaparecen inmediatamente.</li></ul>",
	'langOnlineMode': "Modo Online (Verificar Nicks)",
	'langTitleOnlineMode': "El servidor comprueba las conexiones de los jugadores con la base de datos de cuentas de Minecraft.<br>Sólo debe apagarlo si su servidor no está conectado a Internet.<ul><li><b>Encendido</b> =El servidor supone que tiene una conexión a Internet y comprueba en minecraft.net la conexión de cada jugador.</li><li><b>Apagado</b> = El servidor no tratará de verificar las cuentas de los jugadores.</li></ul>",
	'langPVP': "Jugador vs Jugador (PVP)",
	'langTitlePVP': "Habilitar Jugador contra Jugador (PVP) en el servidor.<br><i>Nota: Golpear a un jugador que tiene lobos domesticados, mientras que el PvP está apagado, provocará que el lobo<br>ataque al agresor.</i><ul><li><b>Encendido</b> = Los jugador pueden matar a otros jugadores.</li><li><b>Apagado</b> = Los jugadores no pueden matar a otros jugadores.</li></ul>",
	'langAllowFlight': "Permitir Vuelo",
	'langTitleAllowFlight': "Permitirá a los usuarios el uso de vuelo/no-clip en su servidor, si tienen un mod que proporciona vuelos/no-clip instalado.<ul><li><b>Encendido</b> = Se permite vuelo/no-clip, y se utiliza si el jugador tiene un mod no-clip instalado.</li><li><b>Apagado</b> = Se expulsará a los jugadores que usen vuelo/no-clip.</li></ul>",
	'langWhitelist': "Lista Blanca",
	'langTitleWhitelist': "Activar la lista blanca en el servidor. Con la lista blanca encendida, solo se podrán conectar los jugadores que estén en ella.<ul><li><b>Encendido</b> = El archivo white-list.txt será usado para generar la lista blanca.</li><li><b>false</b> = No se utiliza lista blanca.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "Lista Blanca",
	'langWLAddPlayer': "Agregar jugador",
	'langWLDeleteSelected': "Eliminar Seleccionados",
	'langWLSaveChanges': "Guardar Cambios",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "Activar plugin",
	'langEnable': "Activar",
	'langPluginName': "Nombre del Plugin",
	'langVersion': "1.1",
	'langReloadTheList': "Recargue la lista",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "Elige tu Backup",
	'langRestoreBackup': "Restaurar Backup",
	'langDeleteBackup': "Borrar Backup",
	'langBackupClear': "Eliminar previamente las carpetas antes restaurar (recomendado)",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "Administración de Usuarios",
	'langIP': "IP",
	'langPort': "Puerto",
	'langKill': "Matar",
	'langKick': "Kickear",
	'langBanName': "Banear",
	'langBanIP': "Banear IP",
	'langAmount': "Cantidad de Veces",
	'langShootArrow': "Disparar Flecha",
	'langShootFireball': "Disparar Bola de Fuego",
	'langThrowEgg': "Tirar Huevo",
	'langThrowSnowball': "Tirar Bola de Nieve",
	'langTeleportToPlayer': "Teletransportar al jugador",
	'langTeleportToCoord': "Teletransportar a las coordenadas",
	'langChangeName': "Cambiar Nombre",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Banear Dirección de IP ó un Nombre",
	'langClearFilter': "Borrar Filtro",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "Registrar un nuevo administrador",
	'langCreateAdmin': "Crear Administrador"
};

var jsIndex = {
	'sProcessing': "Procesando...",
	'sLengthMenu': "Mostrar _MENU_ plugins", // Show 10 plugins
	'sZeroRecords': "No se encontraron resultados.",
	'sInfo': "Mostrando _START_->_END_ de _TOTAL_ plugins", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "No hay plugins para mostrar",
	'sInfoFiltered': "(filtrado de _MAX_ plugins)", // (filter of 17 plugins)
	'sSearch': "Buscar Plugin:",
	'sFirst': "Primero",
	'sPrevious': "Anterior",
	'sNext': "Siguiente",
	'sLast': "Último",
	'ReloadServer': "¡Servidor Recargado!",
	'RestartServer': "¡Servidor Reiniciado!",
	'StopServer': "¡Servidor Apagado!",
	'EnablePlugin': "¡Plugin Activado!",
	'StartBackup': "¡Iniciando Copia de Seguridad!",
	'RTKNeeded': "¡Necesitas RemoteToolkit para usar está función!",
	'NoUsersOnline': "No hay jugadores conectados",
	'NoBackups': "¡No hay copias de seguridad!",
	'activate': "Activar",
	'deactivate': "Desactivar",
	'unban': "Desbanear",
	'MustLogin': "¡Debes iniciar sesión!",
	'UnknownError': "¡Error desconocido! Prueba de nuevo",
	'NotResponse': "¡El servidor no responde! Prueba de nuevo",
	'InvalidIP': "La Dirección de IP es inválida.",
	'UpdateNow': "Actualizar Ahora",
	'later': "Después"
};

var jsAjax = {
	'accountcreated': "¡Cuenta Creada!",
	'worldsaved': "¡Mundo Guardado!",
	'messagesent': "Mensaje de Consola Enviado",
	'broadcastedmessage': "Mensaje Emitido",
	'forcestop': "Server Detenido Forzosamente",
	'plugindisabled': "Plugin _NAME_ desactivado", // PluginX's plugin disabled.
	'pluginenabled': "Plugin _NAME_ activado", // PluginX's plugin enabled.
	'editedproperty': "Propiedad Editada",
	'worldbackedup': "Mundo Respaldado",
	'deletebackup': "Respaldo Eliminado",
	'kickplayer': "_NAME_ fue expulsado de la partida", // Sharkiller kicked from the server
	'itemsgiven': "A _NAME_ le entregaron _AMOUNT_ unidades de _ITEM_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "A _NAME_ le sacaron _AMOUNT_ unidades de _ITEM_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ fue asesinado", // Sharkiller killed
	'healthchanged': "Se cambió la vida de _NAME_ a _AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "¡El jugador _NAME_ fue baneado!", // Sharkiller was banned!
	'playerunbanned': "¡El jugador _NAME_ fue desbaneado!", // Sharkiller was unbanned!
	'ipbanned': "¡La IP _IP_ fue baneada!", // 19.64.84.24 was banned!
	'ipunbanned': "¡La IP _IP_ fue desbaneada!", // 19.64.84.24 was unbanned!
	'arrowshooted': "¡Flecha disparada!", 
	'fireballshooted': "Bola de fuego disparada!", 
	'throwsnowball': "¡Bola de nieve lanzada!",
	'throwegg': "¡Huevo lanzado!",
	'changename': "A _OLD_ se le cambio el nombre a _NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "Jugador Teletransportado",
	'langchanged': "¡Lenguaje Cambiado! Recargando Página...",
	'wlloaded': "¡Lista blanca cargada!",
	'wladded': "¡Agregado a la lista blanca!",
	'wlsaved': "¡La lista blanca fue guardada exitosamente!",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "Parámetros Erróneos",
	'messageempty': "Mensaje Vacio",
	'wladdfail': "¡Falló al agregar jugador a la lista blanca!",
	'wlsavefail': "¡Error al guardar la lista blanca! Pruebe de nuevo",
	'playernotconnected': "El jugador no está conectado",
	'playernotbanned': "El jugador no está baneado",
	'ipnotbanned': "La IP no está baneada",
	'langnotfound': "¡Lenguaje no encontrado!"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "Ingresar en milkAdmin",
	'langUsername': "Usuario",
	'langPassword': "Contraseña",
	'langLogin': "Ingresar"
};

var jsLogin = {
	'welcome': "¡Bienvenido! Cargando página...",
	'UnknownError': "¡Error desconocido! Prueba de nuevo",
	'NotResponse': "¡El servidor no responde! Prueba de nuevo",
	'invalidlogin': "¡Usuario y Contraseña incorrectas!"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "Crear una Cuenta",
	'langUsername': "Usuario",
	'langPassword': "Contraseña",
	'langCreateAccount': "Crear Cuenta"
};

var jsRegister = {
	'created': "¡Cuenta Creada! Cargando página...",
	'notadmin': "¡No puedes usar \"admin\" como nombre de usuario!",
	'baduser': "¡Por favor ingrese un usuario y contraseña válidos!",
	'UnknownError': "¡Error desconocido! Prueba de nuevo",
	'NotResponse': "¡El servidor no responde! Prueba de nuevo",
	'error': "¡Usuario y Contraseña incorrectas!"
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "Iniciar Servidor"
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
	'langStatus': "Realizando copia de seguridad"
};

var jsBackup = {
	'Complete': "¡Copia de Seguridad Completa! Iniciando Servidor...",
	'UnknownError': "¡Error desconocido! Prueba de nuevo",
	'NotResponse': "¡El servidor no responde! Prueba de nuevo"
};