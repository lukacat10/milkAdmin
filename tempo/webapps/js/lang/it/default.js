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
	'lang1Yes': "Sì",
	'lang1No': "No",
	'lang1OK': "OK",
	'lang1Add': "Aggiungi",
	'lang1Cancel': "Annulla",
	'lang1Send': "Invia",
	'lang1Change': "Cambia",
	'lang1On': "Acceso",
	'lang1Off': "Spento",
	'lang1ReloadList': "Ricarica la Lista",
	'lang1IPAddress': "Indirizzo IP",
	'lang1Player': "Giocatore",
	'lang1Action': "Azione",
	'lang1User': "Username",
	'lang1Password': "Password",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "Informazioni su...",
	'langLogout': "Disconnetti",
	'langChooseLanguage': "Seleziona una lingua:",
	'langTranslate': "Traduci nella tua Lingua",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "Nuova versione disponibile",
	'langVersionAvailable': "milkAdmin v_VER_ disponibile", // milkAdmin v1.0 is available
	'langUpdateNow': "Vuoi aggiornare ora?",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "Info Su MilkAdmin",
	'langDesign': "Grafica e Programmazione:",
	'langUpdates': "Aggiornamenti:",
	'langThanks': "Grazie a:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Opzioni di Ban",
	'langKickPlayer': "Kick Giocatore",
	'langBanPlayerName': "Ban Nome Giocatore",
	'langBanIPAddress': "Ban Indirizzo IP",
	'langCause': "Motivo",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "Riavvia Server",
	'langReloadServer': "Ricarica Server",
	'langBackupStart': "Inizio Backup",
	'langSaveMap': "Salva il Mondo",
	'langStopServer': "Ferma il Server",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "Server",
	'langConsoleSM': "Console",
	'langPluginsSM': "Plugins",
	'langBackupsSM': "Backups",
	'langPlayersSM': "Giocatori",
	'langBanListSM': "Banlist",
	'langWhitelistSM': "Whitelist",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "Ultimo Riavvio",
	'langAmountPlayersOnline': "Nessun giocatore online",
	'langFreeMemory': "Memoria Libera",
	'langUsedMemory': "Memoria Utilizzata",
	'langTotalMemory': "Memoria Complessiva",
	'langMaxMemory': "Memoria Massima",
	'langTitleMemory': "Memory Data - <b>Free Memory</b>: Show the amount of free memory in the Minecraft Server.<br><b>Used Memory</b>: Show the amount of used memory in the Minecraft Server.<br><b>Total Memory</b>: Show the total amount of memory that the Minecraft Server use right now.<br><b>Max Memory</b>: Show the maximum amount of memory that the Minecraft Server will attempt to use.",
	'langFreeSpace': "Spazio Disponibile",
	'langUsedSpace': "Spazio Usato",
	'langTotalSpace': "Spazio Totale",
	'langTitleSpace': "Space Data - Based on &quot;Backup Folder&quot; directory.",
	'langServerVersion': "Versione del Server",
	'langCraftbukkitBuild': "Versione di CraftBukkit",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "Informazioni Server",
	'langBroadcastMessage': "Trasmetti Messaggio",
	'langTitleBroadcastMessage': "Trasmetti Messaggio - Invio un messaggio a tutti i giocatori senza tag",
	'langLevelName': "Nome del Livello Principale",
	'langTitleLevelName': "The value will be used as world name and as folder name.<br>You may also copy your saved game folder here, and change the name to the same as that folder\'s to load it instead. ",
	'langMCIPPORT': "IP e Porta del Server Minecraft",
	'langTitleMCIPPORT': "<b>IP:</b> Set this if you want the server to bind to a particular IP. It is strongly recommended that you leave server-ip blank!<br><b>Port:</b> Changes the port the server is hosting on. This port must be forwarded if the server is going through a router.<br><b>Valid values:</b><ul><li><b>IP:</b> Blank, or the IP you want your server to run on.</li><li><b>Port:</b> A number between <b>1-65535</b>. Default: <b>25565</b><ul><li>Should be greater than 20000 to avoid conflicts with system reserved ports.</li></ul></li></ul>",
	'langMaxPlayers': "Giocatori Massimi",
	'langTitleMaxPlayers': "The max numbers of players that can play on the server at the same time.<br><i>Note that if more players are on the server it will use more resources.</i><br><i>Note also, admin connections are not counted against the max players.</i><br><b>Valid values:</b><ul><li>A number between <b>0-255</b>.</li></ul>",
	'langViewDistance': "Visualizza Distanza",
	'langTitleViewDistance': "The amount of chunks the server sends to the players.<br><b>Valid values:</b><ul><li>A number between <b>3-15</b>. Default: <b>10</b></li></ul>",
	'langHoldMessage': "Tieni messaggio\n",
	'langTitleHoldMessage': "Message that MCSODRTK will display when Server is on Hold.<br><i>Needs MinecraftRemoteToolkit</i>",
	'langAllowNether': "Permetti il nether",
	'langTitleAllowNether': "Allows players to travel to the Nether.<ul><li><b>true</b> = The server will allow Portals to send players to the Nether.</li><li><b>false</b> = Portals will not travel to the Nether.</li></ul>",
	'langSpawnMonsters': "Spawn Mostri",
	'langTitleSpawnMonsters': "Set true if you want monsters to be spawned at night, false if you don\'t.<br><i>Tip: if you have major lag, turn this off.</i><ul><li><b>true</b> = Monsters will appear at night and in the dark.</li><li><b>false</b> = No monsters.</li></ul>",
	'langSpawnAnimals': "Spawn Animali",
	'langTitleSpawnAnimals': "Animals will be able to spawn.<ul><li><b>true</b> = Animals spawn as normal.</li><li><b>false</b> = Animals will immediately vanish.</li></ul>",
	'langOnlineMode': "Modalità Online (Controllo degli Username)",
	'langTitleOnlineMode': "Server checks connecting players against minecraft\'s account database.<br>Only set this to false if your server is not connected to the Internet.<ul><li><b>true</b> = The server will assume it has an Internet connection and check in minecraft.net every connecting player.</li><li><b>false</b> = The server will not attempt to check connecting players.</li></ul>",
	'langPVP': "Giocatore vs Giocatore (PVP)",
	'langTitlePVP': "Enable Player vs Player on the server.<br><i>Note: Hitting a player while having PvP set to false and having tamed wolfs will still cause the wolfs<br>attacking the attacked player.</i><ul><li><b>true</b> = Players will be able to kill each other.</li><li><b>false</b> = Players cannot kill other players.</li></ul>",
	'langAllowFlight': "Abilita il Volo",
	'langTitleAllowFlight': "Will allow users to use flight/no-clip on your server, if they have an mod that provides flight/no-clip installed.<ul><li><b>true</b> = Flight/no clip is allowed, and used if the player have a no-clip mod installed.</li><li><b>false</b> = Flight/no-clip is not allowed.</li></ul>",
	'langWhitelist': "Whitelist",
	'langTitleWhitelist': "Enable a white list on the server. With a white list enabled, users not on the white list will be unable to connect.<ul><li><b>true</b> = The file white-list.txt is used to generate the white list.</li><li><b>false</b> = No white list is used.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "Whitelist",
	'langWLAddPlayer': "Aggiungi giocatore",
	'langWLDeleteSelected': "Elimina selezionato",
	'langWLSaveChanges': "Salva modifiche",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "Abilita Plugin",
	'langEnable': "Abilita",
	'langPluginName': "Nome del Plugin",
	'langVersion': "Versione",
	'langReloadTheList': "Ricarica la Lista",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "Scegli il Backup",
	'langRestoreBackup': "Ripristina il Backup",
	'langDeleteBackup': "Elimina il Backup",
	'langBackupClear': "Rimuovere le cartelle precedenti prima di ripristinare il backup",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "Gestione degli Utenti",
	'langIP': "IP",
	'langPort': "Porta",
	'langKill': "Uccidi",
	'langKick': "Kick",
	'langBanName': "Ban",
	'langBanIP': "Ban IP",
	'langAmount': "Quante volte",
	'langShootArrow': "Spara freccia",
	'langShootFireball': "Colpisci le palle di fuoco",
	'langThrowEgg': "Spara Uovo",
	'langThrowSnowball': "Spara Palla di Neve",
	'langTeleportToPlayer': "Teletrasporta al Giocatore",
	'langTeleportToCoord': "Teletrasporta allle Coordinate",
	'langChangeName': "Cambia Nome",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Ban Indirizzo IP o Nome",
	'langClearFilter': "Pulisci il Filtro",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "Registra un Nuovo Admin",
	'langCreateAdmin': "Crea Admin"
};

var jsIndex = {
	'sProcessing': "Elaborazione...",
	'sLengthMenu': "Mostro _MENU_ plugins", // Show 10 plugins
	'sZeroRecords': "Nessuno plugin trovato.",
	'sInfo': "Mostrando _START_->_END_ di _TOTAL_ plugins", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "Nessun plugin da visualizzare.",
	'sInfoFiltered': "(filtro di _MAX_ plugins)", // (filter of 17 plugins)
	'sSearch': "Ricarca Plugin:",
	'sFirst': "Primo",
	'sPrevious': "Precedente",
	'sNext': "Prossimo",
	'sLast': "Ultimo",
	'ReloadServer': "Ricarico il Server!",
	'RestartServer': "Riavvio il Server!",
	'StopServer': "Fermo il Server!",
	'EnablePlugin': "Plugin Abilitato!",
	'StartBackup': "Inizio Backup!",
	'RTKNeeded': "È necessario RemoteToolkit per utilizzare questa funzione!",
	'NoUsersOnline': "Nessun Giocatore Online",
	'NoBackups': "Non ci sono Backup!",
	'activate': "Attiva",
	'deactivate': "Disattiva",
	'unban': "Sbanna",
	'MustLogin': "Devi effettuare il login!",
	'UnknownError': "Errore Sconosciuto! Riprova",
	'NotResponse': "Il server non risponde ! Riprova",
	'InvalidIP': "Indirizzo IP non Valido.",
	'UpdateNow': "Aggiorna Ora",
	'later': "Più Tardi"
};

var jsAjax = {
	'accountcreated': "Account Creato!",
	'worldsaved': "Mondo Salvato!",
	'messagesent': "Messaggio Inviato",
	'broadcastedmessage': "Messaggio Trasmesso",
	'forcestop': "Forza lo Stop",
	'plugindisabled': "_NAME_ disabilitato", // PluginX's plugin disabled.
	'pluginenabled': "_NAME_ abilitato", // PluginX's plugin enabled.
	'editedproperty': "Proprietà modificate",
	'worldbackedup': "Backup del Mondo Eseguito",
	'deletebackup': "Backup Cancellato",
	'kickplayer': "_NAME_ espulso dal server", // Sharkiller kicked from the server
	'itemsgiven': "A _NAME_ sono stati dati _AMOUNT_ di _ITEMS_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "A _NAME_ sono stati rimossi _AMOUNT_ di _ITEMS_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ Ucciso", // Sharkiller killed
	'healthchanged': "La Salute di _NAME_ è ora _AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_ è stato bannato!", // Sharkiller was banned!
	'playerunbanned': "_NAME_ è stato sbannato!", // Sharkiller was unbanned!
	'ipbanned': "_IP_ è stato bannato!", // 19.64.84.24 was banned!
	'ipunbanned': "_IP_ è stato sbannato!", // 19.64.84.24 was unbanned!
	'arrowshooted': "Arrow Shot!", 
	'fireballshooted': "Palla di Fuoco Lanciata!", 
	'throwsnowball': "Palla di Neve Lanciata!",
	'throwegg': "Egg thrown!",
	'changename': "_OLD_ è stato modificato in _NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "Giocatore Teletrasportato",
	'langchanged': "Lingua cambiata! Sto ricaricando la pagina..",
	'wlloaded': "Whitelist",
	'wladded': "Aggiunto in Whitelist",
	'wlsaved': "La Whitelist è stata salvata con successo !",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "Parametri Scorretti",
	'messageempty': "Messaggio Vuoto",
	'wladdfail': "Impossibile aggiungere il giocatore alla Whitelist!",
	'wlsavefail': "Impossibile salvare la Whitelist! Prova di nuovo!",
	'playernotconnected': "Giocatore non Connesso",
	'playernotbanned': "Giocatore non Bannato",
	'ipnotbanned': "IP non Bannato",
	'langnotfound': "Non conosco questo linguaggio."
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "Entra in milkAdmin",
	'langUsername': "Username",
	'langPassword': "Password",
	'langLogin': "Entra"
};

var jsLogin = {
	'welcome': "Benvenuto! Caricamento della pagina ...",
	'UnknownError': "Errore Sconosciuto! Riprova",
	'NotResponse': "Il server non risponde ! Riprova",
	'invalidlogin': "Username e Password Invalidi!"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "Crea un Account",
	'langUsername': "Username",
	'langPassword': "Password",
	'langCreateAccount': "Crea Account"
};

var jsRegister = {
	'created': "Account Creato! Caricamento...",
	'notadmin': "Non puoi usare \"admin\" come username",
	'baduser': "Per favore inserisci un username e una password validi",
	'UnknownError': "Errore Sconosciuto! Riprova",
	'NotResponse': "Il server non risponde ! Riprova",
	'error': "Username e Password Invalidi!"
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "Avvia Server"
};

///////////////////////////////////////////////
//
//   Language for wait.html
//
///////////////////////////////////////////////

var langWait = {
	'langPleaseWait20Seconds': "Per favore attendi 20 secondi"
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "Eseguo il Backup"
};

var jsBackup = {
	'Complete': "Backup Completo! Avvio Server...",
	'UnknownError': "Errore Sconosciuto! Riprova",
	'NotResponse': "Il server non risponde ! Riprova"
};