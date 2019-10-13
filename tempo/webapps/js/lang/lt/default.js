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
	'lang1Yes': "Taip",
	'lang1No': "Ne",
	'lang1OK': "Gerai",
	'lang1Add': "Pridėti",
	'lang1Cancel': "Atšaukti",
	'lang1Send': "Siųsti ",
	'lang1Change': "Keisti",
	'lang1On': "Įjungtas",
	'lang1Off': "Išjungtas",
	'lang1ReloadList': "Perkrauti sarašą",
	'lang1IPAddress': "IP adresas",
	'lang1Player': "Žaidėjas",
	'lang1Action': "Veiksmas",
	'lang1User': "Vartotojo vardas",
	'lang1Password': "Slaptažodis",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "Apie...",
	'langLogout': "Atsijungti",
	'langChooseLanguage': "Pasirinkite Kalbą:",
	'langTranslate': "Išversti į savo kalbą",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "Galima nauja versija",
	'langVersionAvailable': "milkAdmin v_VER_ yra galimas", // milkAdmin v1.0 is available
	'langUpdateNow': "Ar noretumet atnaujinti dabar?",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "Apie programą",
	'langDesign': "DIzainas ir programavimas:",
	'langUpdates': "Atnaujinimai",
	'langThanks': "Dekojame",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Ban pasirinkimai",
	'langKickPlayer': "Išspirti",
	'langBanPlayerName': "Baninti žaidėjo vardą",
	'langBanIPAddress': "Baninti IP Adresą",
	'langCause': "Priežastis",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "Restartuoti serverį",
	'langReloadServer': "Perkrauti serverį",
	'langBackupStart': "Pradėti Backup\'ą",
	'langSaveMap': "Išsaugot pasaulį",
	'langStopServer': "Stabdyti serverį",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "Serveris",
	'langConsoleSM': "Console",
	'langPluginsSM': "Pluginai",
	'langBackupsSM': "Backup\'ai",
	'langPlayersSM': "Žaidejai",
	'langBanListSM': "Ban\'ų sarašas",
	'langWhitelistSM': "Whitelistas",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "Paskutinis restartas",
	'langAmountPlayersOnline': "Hello",
	'langFreeMemory': "Laisva atmintis",
	'langUsedMemory': "Užimta atmintis",
	'langTotalMemory': "Visa atmintis",
	'langMaxMemory': "Didžiausia galima atmintis",
	'langTitleMemory': "Vieta - <b> Laisva atmintis</b>:Rodyti laisva atminti minecraft serverije.<br><b>Panaudota atmintis</b>:Parodyti užimtos atminties kiekį serveryje.<br><b>Visa atmintis</b>:Parodyti visą atmintį serveryje.<br><b>Maksimali talpa</b>:Parodyti maksimalią talpą serveryje.",
	'langFreeSpace': "Laisva atmintis",
	'langUsedSpace': "Panaudota atmintis",
	'langTotalSpace': "Bendra talpa",
	'langTitleSpace': "Vietos informacija-Remiantis \'\'Backup Folder\'\' direktorija",
	'langServerVersion': "Serverio versija",
	'langCraftbukkitBuild': "Craftbukkit buil\'das",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "Serverio informacija",
	'langBroadcastMessage': "Parašyti žinutę",
	'langTitleBroadcastMessage': "PArašyti žinutę viesiems žaidėjams be nicko.",
	'langLevelName': "Pagrindinio levelio vardas",
	'langTitleLevelName': "The value will be used as world name and as folder name.<br>You may also copy your saved game folder here, and change the name to the same as that folder\'s to load it instead. ",
	'langMCIPPORT': "Serverio Ip ir portas",
	'langTitleMCIPPORT': "<b>IP:</b> Set this if you want the server to bind to a particular IP. It is strongly recommended that you leave server-ip blank!<br><b>Port:</b> Changes the port the server is hosting on. This port must be forwarded if the server is going through a router.<br><b>Valid values:</b><ul><li><b>IP:</b> Blank, or the IP you want your server to run on.</li><li><b>Port:</b> A number between <b>1-65535</b>. Default: <b>25565</b><ul><li>Should be greater than 20000 to avoid conflicts with system reserved ports.</li></ul></li></ul>",
	'langMaxPlayers': "Maksimalus žaidėjų kiekis",
	'langTitleMaxPlayers': "The max numbers of players that can play on the server at the same time.<br><i>Note that if more players are on the server it will use more resources.</i><br><i>Note also, admin connections are not counted against the max players.</i><br><b>Valid values:</b><ul><li>A number between <b>0-255</b>.</li></ul>",
	'langViewDistance': "Žiūrėti distancija",
	'langTitleViewDistance': "The amount of chunks the server sends to the players.<br><b>Valid values:</b><ul><li>A number between <b>3-15</b>. Default: <b>10</b></li></ul>",
	'langHoldMessage': "Užlaikyti žinutę",
	'langTitleHoldMessage': "Message that MCSODRTK will display when Server is on Hold.<br><i>Needs MinecraftRemoteToolkit</i>",
	'langAllowNether': "Leisti Nether teleportą",
	'langTitleAllowNether': "Allows players to travel to the Nether.<ul><li><b>true</b> = The server will allow Portals to send players to the Nether.</li><li><b>false</b> = Portals will not travel to the Nether.</li></ul>",
	'langSpawnMonsters': "Spawninti monstrus",
	'langTitleSpawnMonsters': "Set true if you want monsters to be spawned at night, false if you don\'t.<br><i>Tip: if you have major lag, turn this off.</i><ul><li><b>true</b> = Monsters will appear at night and in the dark.</li><li><b>false</b> = No monsters.</li></ul>",
	'langSpawnAnimals': "Spawninti gyvūnus",
	'langTitleSpawnAnimals': "Animals will be able to spawn.<ul><li><b>true</b> = Animals spawn as normal.</li><li><b>false</b> = Animals will immediately vanish.</li></ul>",
	'langOnlineMode': "Online režimas (Tikrinti vardus)",
	'langTitleOnlineMode': "Server checks connecting players against minecraft\'s account database.<br>Only set this to false if your server is not connected to the Internet.<ul><li><b>true</b> = The server will assume it has an Internet connection and check in minecraft.net every connecting player.</li><li><b>false</b> = The server will not attempt to check connecting players.</li></ul>",
	'langPVP': "Žaidėjas prieš Žaidėją (PvP)",
	'langTitlePVP': "Enable Player vs Player on the server.<br><i>Note: Hitting a player while having PvP set to false and having tamed wolfs will still cause the wolfs<br>attacking the attacked player.</i><ul><li><b>true</b> = Players will be able to kill each other.</li><li><b>false</b> = Players cannot kill other players.</li></ul>",
	'langAllowFlight': "Leisti skrydi",
	'langTitleAllowFlight': "Will allow users to use flight/no-clip on your server, if they have an mod that provides flight/no-clip installed.<ul><li><b>true</b> = Flight/no clip is allowed, and used if the player have a no-clip mod installed.</li><li><b>false</b> = Flight/no-clip is not allowed.</li></ul>",
	'langWhitelist': "Whitelistas",
	'langTitleWhitelist': "Enable a white list on the server. With a white list enabled, users not on the white list will be unable to connect.<ul><li><b>true</b> = The file white-list.txt is used to generate the white list.</li><li><b>false</b> = No white list is used.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "Whitelistas",
	'langWLAddPlayer': "Pridėti žaidėja",
	'langWLDeleteSelected': "Ištrinti pasirinktus",
	'langWLSaveChanges': "Išsaugoti pakeitimus",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "Ijungti pluginą",
	'langEnable': "Įjungti",
	'langPluginName': "Plugino pavadinimas",
	'langVersion': "Versija",
	'langReloadTheList': "Perkauti sarašą",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "Pasirinkti backup\'ą",
	'langRestoreBackup': "Atstatyti backup\'ą",
	'langDeleteBackup': "Ištrinti backup\'ą",
	'langBackupClear': "Hello",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "Vartotojo valdymas",
	'langIP': "IP",
	'langPort': "Portas",
	'langKill': "Žudyti",
	'langKick': "Išspirti",
	'langBanName': "Išbaninti",
	'langBanIP': "Baninti Ip adresą",
	'langAmount': "Laiko kiekis",
	'langShootArrow': "Šauti strėlę",
	'langShootFireball': "Šauti Ugnies Kamuolį",
	'langThrowEgg': "Mesti kiaušinį",
	'langThrowSnowball': "Mesti sniego gniūžtę",
	'langTeleportToPlayer': "Nuteleportuoti pas žaidėja",
	'langTeleportToCoord': "Nuteleportuoti į koordinate",
	'langChangeName': "Keisti vardą",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Užbaninti IP adresą arba Vartotojo Vardą",
	'langClearFilter': "Išvalyti filtrą",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "Užregistruoti naują administratorių",
	'langCreateAdmin': "Sukurti Administratorių"
};

var jsIndex = {
	'sProcessing': "Vygdoma...",
	'sLengthMenu': "Rodyti_MENU_pluginus", // Show 10 plugins
	'sZeroRecords': "Neaptikta jokių pluginų",
	'sInfo': "Rodomi_START_->_END_TOTAL_pluginai", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "Nerasta pluginų",
	'sInfoFiltered': "_MAX_pluginų filtras", // (filter of 17 plugins)
	'sSearch': "Ieškoti pluginą",
	'sFirst': "Pirmas",
	'sPrevious': "Praeitas",
	'sNext': "Kitas",
	'sLast': "Paskutinis",
	'ReloadServer': "Perkraunamas serveris",
	'RestartServer': "Restartuojamas serveris",
	'StopServer': "Serveris išjungiamas",
	'EnablePlugin': "Pluginas įjungtas",
	'StartBackup': "Pradedamas Backup\'as",
	'RTKNeeded': "Tau reikia pašalinti RemoteToolkit, kad naudoti šią funkciją.",
	'NoUsersOnline': "Nėra prisjungusių žaidėjų",
	'NoBackups': "Nerasta backup\'ų",
	'activate': "Aktivuoti",
	'deactivate': "Išjungti",
	'unban': "Atbaninti",
	'MustLogin': "Tau reikia prisijungti",
	'UnknownError': "Nežinoma klaida! Prašome pabandyti dar kartą!",
	'NotResponse': "Serveris neatsako! Pabandykite dar kartą",
	'InvalidIP': "Neteisingas IP adresas",
	'UpdateNow': "Atnaujinti dabar",
	'later': "Vėliau"
};

var jsAjax = {
	'accountcreated': "Žaidėjas sukurtas",
	'worldsaved': "Pasaulis išsaugotas",
	'messagesent': "Žinutė išsiūsta",
	'broadcastedmessage': "Parašyta žinute",
	'forcestop': "Priverstinai sustabdyti",
	'plugindisabled': "_NAME_\'s pluginai išjungti", // PluginX's plugin disabled.
	'pluginenabled': "_NAME_\'s pluginai įjungti", // PluginX's plugin enabled.
	'editedproperty': "Atnaujinta nuosavybe",
	'worldbackedup': "Backup\'as išsaugotas",
	'deletebackup': "Backup\'as ištrintas",
	'kickplayer': "_NAME_ išspirtas iš serverio", // Sharkiller kicked from the server
	'itemsgiven': "_NAME_gavo_AMOUNT_vienetų_ITEM", // Sharkiller was given 64 units of IRON
	'itemsremoved': "_NAME_pašalino_AMOUNT_vienetą(ų, us)_ITEM", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ nužudytas", // Sharkiller killed
	'healthchanged': "_NAME_ Givybes pasikeitė į_AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_ Užblokuotas", // Sharkiller was banned!
	'playerunbanned': "_NAME_ Atblokuotas", // Sharkiller was unbanned!
	'ipbanned': "_IP_  buvo užbanintas", // 19.64.84.24 was banned!
	'ipunbanned': "_IP_  buvo atbanintas", // 19.64.84.24 was unbanned!
	'arrowshooted': "Strelės šūvis!", 
	'fireballshooted': "Ugnies kamuolis iššautas!", 
	'throwsnowball': "Sniego gniūžtė mesta",
	'throwegg': "Egg thrown!",
	'changename': "_OLD_\'s nickas buvo pakeistas į _NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "Žaidėjas buvo nuteleportuotas",
	'langchanged': "Kalba pakeista! Perkraunamas Puslapis...",
	'wlloaded': "Whitelist\'as užkrautas",
	'wladded': "Pridetas į whitelist\'ą",
	'wlsaved': "Whitelist\'as buvo išsaugotas sėkmingai.",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "Blogi nustatymai",
	'messageempty': "Tuščia žinutė",
	'wladdfail': "Nepavyko pridėti žaidėjo į Whitelist\'ą",
	'wlsavefail': "Nepavyko išsaugota whitelist\'o!Pabandykite dar kartą",
	'playernotconnected': "Žaidėjas neprisijungęs",
	'playernotbanned': "žaidėjas neužbanintas",
	'ipnotbanned': "IP neblokuotas",
	'langnotfound': "Nerasta kalba"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "Prisijungti prie MilkAdmin",
	'langUsername': "Nick\'as",
	'langPassword': "Slaptažodis",
	'langLogin': "Prisjungti"
};

var jsLogin = {
	'welcome': "Sveiki! Kraunamas puslapis...",
	'UnknownError': "Nežinoma klaida! Prašome pabandyti dar kartą!",
	'NotResponse': "Serveris neatsako! Pabandykite dar kartą",
	'invalidlogin': "Neatpažintas Nickas arba passwordas"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "Sukurti vartotoją",
	'langUsername': "Nick\'as",
	'langPassword': "Slaptažodis",
	'langCreateAccount': "Sukurti accounta"
};

var jsRegister = {
	'created': "Accountas sukurtas!Kraunamas tinklalapis",
	'notadmin': "Negalima naudoti ,,Admin\'\' kaip žaidėjo",
	'baduser': "Prašom įvesti teisingą nicką ir passworda",
	'UnknownError': "Nežinoma klaida! Prašome pabandyti dar kartą!",
	'NotResponse': "Serveris neatsako! Pabandykite dar kartą",
	'error': "Blogas nickas arba slaptažodis"
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "ĮJungti serverį"
};

///////////////////////////////////////////////
//
//   Language for wait.html
//
///////////////////////////////////////////////

var langWait = {
	'langPleaseWait20Seconds': "Prasome palaukti 20 sekundžių"
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "Išsaugojama"
};

var jsBackup = {
	'Complete': "BAckupas sekmingai atliktas,įjungiamas serveris",
	'UnknownError': "Nežinoma klaida! Prašome pabandyti dar kartą!",
	'NotResponse': "Serveris neatsako! Pabandykite dar kartą"
};