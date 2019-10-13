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
	'lang1Yes': "Sim",
	'lang1No': "Não",
	'lang1OK': "OK",
	'lang1Add': "Add",
	'lang1Cancel': "Cancel",
	'lang1Send': "Enviar",
	'lang1Change': "Mudar",
	'lang1On': "Ligado",
	'lang1Off': "Desligado",
	'lang1ReloadList': "Recarregar Lista",
	'lang1IPAddress': "Endereço de IP",
	'lang1Player': "Jogador",
	'lang1Action': "Ação",
	'lang1User': "Utilizador",
	'lang1Password': "Palavra Chave",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "Sobre...",
	'langLogout': "Sair",
	'langChooseLanguage': "Choose a Language:",
	'langTranslate': "Translate to your language",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "Nova Versão Disponível",
	'langVersionAvailable': "milkAdmin v_VER_ is available", // milkAdmin v1.0 is available
	'langUpdateNow': "Queres fazer o update agora?",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "About milkAdmin",
	'langDesign': "Design and Programming:",
	'langUpdates': "Updates:",
	'langThanks': "Thanks to:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Opções de Ban",
	'langKickPlayer': "Expulsar Jogador",
	'langBanPlayerName': "Banir Nome de Jogador",
	'langBanIPAddress': "Banir endereço de IP",
	'langCause': "Causa",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "Reiniciar Servidor",
	'langReloadServer': "Recarregar Servidor",
	'langBackupStart': "Start Backup",
	'langSaveMap': "Guardar Mundo",
	'langStopServer': "Parar Servidor",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "Server",
	'langConsoleSM': "Console",
	'langPluginsSM': "Plugins",
	'langBackupsSM': "Backups",
	'langPlayersSM': "Players",
	'langBanListSM': "Banlist",
	'langWhitelistSM': "Whitelist",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "Última Reiniciação",
	'langAmountPlayersOnline': "Number of Players Online",
	'langFreeMemory': "Memória Disponível",
	'langUsedMemory': "Memória Usada",
	'langTotalMemory': "Memória Total",
	'langMaxMemory': "Memória Máxima",
	'langTitleMemory': "Memory Data - <b>Free Memory</b>: Show the amount of free memory in the Minecraft Server.<br><b>Used Memory</b>: Show the amount of used memory in the Minecraft Server.<br><b>Total Memory</b>: Show the total amount of memory that the Minecraft Server use right now.<br><b>Max Memory</b>: Show the maximum amount of memory that the Minecraft Server will attempt to use.",
	'langFreeSpace': "Free Space",
	'langUsedSpace': "Used Space",
	'langTotalSpace': "Total Space",
	'langTitleSpace': "Space Data - Based on &quot;Backup Folder&quot; directory.",
	'langServerVersion': "Versão do Servidor",
	'langCraftbukkitBuild': "Craftbukkit Build",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "Server Info",
	'langBroadcastMessage': "Broadcast Message",
	'langTitleBroadcastMessage': "Broadcast Message - Send a message to all players whitout tag.",
	'langLevelName': "Main Level Name",
	'langTitleLevelName': "The value will be used as world name and as folder name.<br>You may also copy your saved game folder here, and change the name to the same as that folder\'s to load it instead. ",
	'langMCIPPORT': "Minecraft Server IP and Port",
	'langTitleMCIPPORT': "<b>IP:</b> Set this if you want the server to bind to a particular IP. It is strongly recommended that you leave server-ip blank!<br><b>Port:</b> Changes the port the server is hosting on. This port must be forwarded if the server is going through a router.<br><b>Valid values:</b><ul><li><b>IP:</b> Blank, or the IP you want your server to run on.</li><li><b>Port:</b> A number between <b>1-65535</b>. Default: <b>25565</b><ul><li>Should be greater than 20000 to avoid conflicts with system reserved ports.</li></ul></li></ul>",
	'langMaxPlayers': "Max Players",
	'langTitleMaxPlayers': "The max numbers of players that can play on the server at the same time.<br><i>Note that if more players are on the server it will use more resources.</i><br><i>Note also, admin connections are not counted against the max players.</i><br><b>Valid values:</b><ul><li>A number between <b>0-255</b>.</li></ul>",
	'langViewDistance': "View Distance",
	'langTitleViewDistance': "The amount of chunks the server sends to the players.<br><b>Valid values:</b><ul><li>A number between <b>3-15</b>. Default: <b>10</b></li></ul>",
	'langHoldMessage': "Hold Message",
	'langTitleHoldMessage': "Message that MCSODRTK will display when Server is on Hold.<br><i>Needs MinecraftRemoteToolkit</i>",
	'langAllowNether': "Allow Nether",
	'langTitleAllowNether': "Allows players to travel to the Nether.<ul><li><b>true</b> = The server will allow Portals to send players to the Nether.</li><li><b>false</b> = Portals will not travel to the Nether.</li></ul>",
	'langSpawnMonsters': "Invocar Monstros",
	'langTitleSpawnMonsters': "Set true if you want monsters to be spawned at night, false if you don\'t.<br><i>Tip: if you have major lag, turn this off.</i><ul><li><b>true</b> = Monsters will appear at night and in the dark.</li><li><b>false</b> = No monsters.</li></ul>",
	'langSpawnAnimals': "Invocar Animais",
	'langTitleSpawnAnimals': "Animals will be able to spawn.<ul><li><b>true</b> = Animals spawn as normal.</li><li><b>false</b> = Animals will immediately vanish.</li></ul>",
	'langOnlineMode': "Modo Online (Verificar Nomes)",
	'langTitleOnlineMode': "Server checks connecting players against minecraft\'s account database.<br>Only set this to false if your server is not connected to the Internet.<ul><li><b>true</b> = The server will assume it has an Internet connection and check in minecraft.net every connecting player.</li><li><b>false</b> = The server will not attempt to check connecting players.</li></ul>",
	'langPVP': "Jogador contra Jogador (PvP)",
	'langTitlePVP': "Enable Player vs Player on the server.<br><i>Note: Hitting a player while having PvP set to false and having tamed wolfs will still cause the wolfs<br>attacking the attacked player.</i><ul><li><b>true</b> = Players will be able to kill each other.</li><li><b>false</b> = Players cannot kill other players.</li></ul>",
	'langAllowFlight': "Permitir Voar",
	'langTitleAllowFlight': "Will allow users to use flight/no-clip on your server, if they have an mod that provides flight/no-clip installed.<ul><li><b>true</b> = Flight/no clip is allowed, and used if the player have a no-clip mod installed.</li><li><b>false</b> = Flight/no-clip is not allowed.</li></ul>",
	'langWhitelist': "Whitelist",
	'langTitleWhitelist': "Enable a white list on the server. With a white list enabled, users not on the white list will be unable to connect.<ul><li><b>true</b> = The file white-list.txt is used to generate the white list.</li><li><b>false</b> = No white list is used.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "Whitelist",
	'langWLAddPlayer': "Add player",
	'langWLDeleteSelected': "Delete Selected",
	'langWLSaveChanges': "Save Changes",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "Ligar Plugin",
	'langEnable': "Ativar",
	'langPluginName': "Nome do Plugin",
	'langVersion': "Versão",
	'langReloadTheList': "Recarregar Lista",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "Escolhe o teu backup",
	'langRestoreBackup': "Restaurar Backup",
	'langDeleteBackup': "Apagar Backup",
	'langBackupClear': "Remove previous folders before restoring the backup",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "Gerir Utilizadores",
	'langIP': "Endereço de IP",
	'langPort': "Porta",
	'langKill': "Matar",
	'langKick': "Expulsar",
	'langBanName': "Banir",
	'langBanIP': "Banir endereço de IP",
	'langAmount': "Amount of Times",
	'langShootArrow': "Atirar seta",
	'langShootFireball': "Shoot Fireball",
	'langThrowEgg': "Atirar ovo",
	'langThrowSnowball': "Atirar Bola de Neve",
	'langTeleportToPlayer': "Teleporte para Jogador",
	'langTeleportToCoord': "Teleporte para Coordenadas",
	'langChangeName': "Mudar Nome",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Banir endereço de IP ou Nome",
	'langClearFilter': "Limpar Filtro",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "Registar um novo Administrador",
	'langCreateAdmin': "Criar um Administrador"
};

var jsIndex = {
	'sProcessing': "A processar...",
	'sLengthMenu': "Mostrar _MENU_ plugins", // Show 10 plugins
	'sZeroRecords': "Nenhum plugin encontrado.",
	'sInfo': "Mostrar_START_->_END_ de_TOTAL_ plugins", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "Nenhum plugin para mostrar",
	'sInfoFiltered': "(filtrar de _MAX_ plugins)", // (filter of 17 plugins)
	'sSearch': "Procurar Plugin:",
	'sFirst': "Primeiro",
	'sPrevious': "Anterior",
	'sNext': "Próximo",
	'sLast': "Último",
	'ReloadServer': "Recarregando o servidor!",
	'RestartServer': "Reiniciando o servidor!",
	'StopServer': "Stoping Server!",
	'EnablePlugin': "Plugin Ativado!",
	'StartBackup': "Starting Backup!",
	'RTKNeeded': "You need the RemoteToolkit to use this function!",
	'NoUsersOnline': "Nenhum Jogador Online",
	'NoBackups': "There are no backups!",
	'activate': "Ativar",
	'deactivate': "Desativar",
	'unban': "Desbanir",
	'MustLogin': "You must login!",
	'UnknownError': "Unknown Error! Try again!",
	'NotResponse': "Server not responding! Try again",
	'InvalidIP': "Endereço de IP invalido",
	'UpdateNow': "Actualizar agora",
	'later': "Mais tarde"
};

var jsAjax = {
	'accountcreated': "Conta criada!",
	'worldsaved': "Salvar o mundo!",
	'messagesent': "Mensagem enviada",
	'broadcastedmessage': "Broadcasted Message",
	'forcestop': "Forçar Stop",
	'plugindisabled': "_NAME_\'s plugin disabled", // PluginX's plugin disabled.
	'pluginenabled': "_NAME_\'s plugin enabled", // PluginX's plugin enabled.
	'editedproperty': "Propriedade editada",
	'worldbackedup': "Backed up World",
	'deletebackup': "Backup eliminado",
	'kickplayer': "_NAME_ kickado pelo servidor", // Sharkiller kicked from the server
	'itemsgiven': "_NAME_ deu _AMOUNT_ unidades de_ITEM_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "_NAME_ removed _AMOUNT_ units of _ITEM_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ morto", // Sharkiller killed
	'healthchanged': "Vida de _NAME_ mudado para _AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_ foi banido!", // Sharkiller was banned!
	'playerunbanned': "_NAME_ foi perdoado!", // Sharkiller was unbanned!
	'ipbanned': "_IP_ foi banido!", // 19.64.84.24 was banned!
	'ipunbanned': "_IP_ foi desculpado!", // 19.64.84.24 was unbanned!
	'arrowshooted': "Arrow Shot!", 
	'fireballshooted': "Fireball Shooted!", 
	'throwsnowball': "Bola de neve atirada!",
	'throwegg': "Egg thrown!",
	'changename': "_OLD_\'s name changed to _NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "Player Teleported",
	'langchanged': "Language Changed! Reloading Page...",
	'wlloaded': "Whitelist loaded!",
	'wladded': "Added to Whitelist!",
	'wlsaved': "Whitelist has been saved successfully!",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "Bad Parameters",
	'messageempty': "Empty Message",
	'wladdfail': "Failed to add player to Whitelist!",
	'wlsavefail': "Failed to save Whitelist! Try again!",
	'playernotconnected': "Player not connected",
	'playernotbanned': "Player not banned",
	'ipnotbanned': "IP not banned",
	'langnotfound': "Language not found!"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "Login in milkAdmin",
	'langUsername': "Username",
	'langPassword': "Password",
	'langLogin': "Login"
};

var jsLogin = {
	'welcome': "Welcome! Loading page...",
	'UnknownError': "Unknown Error! Try again!",
	'NotResponse': "Server not responding! Try again",
	'invalidlogin': "Invalid Username and Password!"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "Create an Account",
	'langUsername': "Username",
	'langPassword': "Password",
	'langCreateAccount': "Create Account"
};

var jsRegister = {
	'created': "Account Created! Loading page...",
	'notadmin': "You can not use \"admin\" as username",
	'baduser': "Please enter a valid username and password",
	'UnknownError': "Unknown Error! Try again!",
	'NotResponse': "Server not responding! Try again",
	'error': "Invalid Username and Password!"
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "Start Server"
};

///////////////////////////////////////////////
//
//   Language for wait.html
//
///////////////////////////////////////////////

var langWait = {
	'langPleaseWait20Seconds': "Please wait 20 seconds"
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "Backing up"
};

var jsBackup = {
	'Complete': "Backup Complete! Starting Server...",
	'UnknownError': "Unknown Error! Try again!",
	'NotResponse': "Server not responding! Try again"
};