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
	'lang1Yes': "Ja",
	'lang1No': "Nei",
	'lang1OK': "OK",
	'lang1Add': "Legg til",
	'lang1Cancel': "Avbryt",
	'lang1Send': "Send",
	'lang1Change': "Bytt",
	'lang1On': "På",
	'lang1Off': "Av",
	'lang1ReloadList': "Forny liste",
	'lang1IPAddress': "IP Adresse",
	'lang1Player': "Spiller",
	'lang1Action': "Handling",
	'lang1User': "Brukernavn",
	'lang1Password': "Passord",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "langOm",
	'langLogout': "langLoggUt",
	'langChooseLanguage': "Velg språk:",
	'langTranslate': "Oversett til ditt språk",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "Ny Version Tilgjengelig",
	'langVersionAvailable': "MilkAdmin v_VER_ er tilgjenglig", // milkAdmin v1.0 is available
	'langUpdateNow': "Vil du oppdatere nå?",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "Om milkAdmin",
	'langDesign': "Design og Programmering:",
	'langUpdates': "Oppdateringer:",
	'langThanks': "Takk til:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Ban Alternativer",
	'langKickPlayer': "Spark Spiller",
	'langBanPlayerName': "Forby spillernavn",
	'langBanIPAddress': "Ban IP Adresse",
	'langCause': "Grunn",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "Restart Serveren",
	'langReloadServer': "Last serveren på nytt",
	'langBackupStart': "Start sikkerhetskopiering",
	'langSaveMap': "Lagre Verden",
	'langStopServer': "Stopp Serveren",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "Server",
	'langConsoleSM': "Konsoll",
	'langPluginsSM': "Plugins",
	'langBackupsSM': "Sikkerhetskopier",
	'langPlayersSM': "Spillere",
	'langBanListSM': "Utstengels liste",
	'langWhitelistSM': "Hviteliste",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "Forrige restart",
	'langAmountPlayersOnline': "Antall spillere pålogget",
	'langFreeMemory': "Ledig minne",
	'langUsedMemory': "Brukt Minne",
	'langTotalMemory': "Totalt Minne",
	'langMaxMemory': "Maks Minne",
	'langTitleMemory': "Minneinformasjon - <b>Ledig Hurtigminne</b>: Vis mengden ledig hurtigminne i Minecraftserveren.<br><b>Brukt Hurtigminne</b>: Vis mengden oppbrukt hurtigminne i Minecraftserveren.<br><b>Totalt Hurtigminne</b>: Vis den totale mengden hurtigminne i Minecraftserveren.<br><b>Maks Hurtigminne</b>: Vis mengden hurtigminne som Minecraftserveren er tillatt å bruke.",
	'langFreeSpace': "Ledig lagringsplass",
	'langUsedSpace': "Brukt lagringsplass",
	'langTotalSpace': "Total lagringsplass",
	'langTitleSpace': "Informasjon om lagringsplass - Basert på \"Sikkerhetskopi\" mappen.",
	'langServerVersion': "Server Versjon",
	'langCraftbukkitBuild': "Craftbukkit Versjon",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "Serverinformasjon",
	'langBroadcastMessage': "Kringkast melding",
	'langTitleBroadcastMessage': "Kringkast melding - Send en melding til alle spillere uten merke.",
	'langLevelName': "Navn på hovednivå.",
	'langTitleLevelName': "Verdien vil bli brukt som verdensnavn og som mappenavn.<br>Du kan også kopiere dine lagrede spillmapper her, og endre navn til det samme som mappen for å laste seg selv.",
	'langMCIPPORT': "Minecraft server IP og port ",
	'langTitleMCIPPORT': "<b>IP:</b> Set this if you want the server to bind to a particular IP. It is strongly recommended that you leave server-ip blank!<br><b>Port:</b> Changes the port the server is hosting on. This port must be forwarded if the server is going through a router.<br><b>Valid values:</b><ul><li><b>IP:</b> Blank, or the IP you want your server to run on.</li><li><b>Port:</b> A number between <b>1-65535</b>. Default: <b>25565</b><ul><li>Should be greater than 20000 to avoid conflicts with system reserved ports.</li></ul></li></ul>",
	'langMaxPlayers': "Maks spelara",
	'langTitleMaxPlayers': "The max numbers of players that can play on the server at the same time.<br><i>Note that if more players are on the server it will use more resources.</i><br><i>Note also, admin connections are not counted against the max players.</i><br><b>Valid values:</b><ul><li>A number between <b>0-255</b>.</li></ul>",
	'langViewDistance': "Syns distanse",
	'langTitleViewDistance': "The amount of chunks the server sends to the players.<br><b>Valid values:</b><ul><li>A number between <b>3-15</b>. Default: <b>10</b></li></ul>",
	'langHoldMessage': "Hold Message",
	'langTitleHoldMessage': "Message that MCSODRTK will display when Server is on Hold.<br><i>Needs MinecraftRemoteToolkit</i>",
	'langAllowNether': "Tillat Nether",
	'langTitleAllowNether': "Tillat spelara og reise til \"the Nether\". <ul><li><b>true</b> = serveren vil godta portala som sender spelara til \"the Nether\". </li><li><b>false</b> = portalar vill ikkje reise til \"the Nether\". </li></ul>",
	'langSpawnMonsters': "Skap monstre",
	'langTitleSpawnMonsters': "Set til \"true\" om du vil at monster skal spawne om natta, \"false\" om du ikkje vill dette. <br><i>Tips: om du har stor \"lagg\", skru dette av. </i><ul><li><b>true</b> = monster vil komme til syne om natta og i mørke område. </li><li><b>false</b> = ingen monster. </li></ul>",
	'langSpawnAnimals': "Skap dyr",
	'langTitleSpawnAnimals': "Dyr vil ha mulighet til å spawne. <ul><li><b>true</b> = Dyr spawnar som normalt. </li><li><b>false</b> = dyra vil forsvinne med ein gong. </li></ul>",
	'langOnlineMode': "Online-modus (Verifiser navn)",
	'langTitleOnlineMode': "Server checks connecting players against minecraft\'s account database.<br>Only set this to false if your server is not connected to the Internet.<ul><li><b>true</b> = The server will assume it has an Internet connection and check in minecraft.net every connecting player.</li><li><b>false</b> = The server will not attempt to check connecting players.</li></ul>",
	'langPVP': "Spiller mot Spiller (PvP)",
	'langTitlePVP': "Enable Player vs Player on the server.<br><i>Note: Hitting a player while having PvP set to false and having tamed wolfs will still cause the wolfs<br>attacking the attacked player.</i><ul><li><b>true</b> = Players will be able to kill each other.</li><li><b>false</b> = Players cannot kill other players.</li></ul>",
	'langAllowFlight': "Tillat Flyvning",
	'langTitleAllowFlight': "Will allow users to use flight/no-clip on your server, if they have an mod that provides flight/no-clip installed.<ul><li><b>true</b> = Flight/no clip is allowed, and used if the player have a no-clip mod installed.</li><li><b>false</b> = Flight/no-clip is not allowed.</li></ul>",
	'langWhitelist': "Hviteliste",
	'langTitleWhitelist': "Enable a white list on the server. With a white list enabled, users not on the white list will be unable to connect.<ul><li><b>true</b> = The file white-list.txt is used to generate the white list.</li><li><b>false</b> = No white list is used.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "Hviteliste",
	'langWLAddPlayer': "Legg til spiller",
	'langWLDeleteSelected': "Slett valgdte",
	'langWLSaveChanges': "Lagre forandringer",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "Tillat Tilleggsmodul",
	'langEnable': "Aktiver",
	'langPluginName': "Navn på Tilleggsmodul",
	'langVersion': "Versjon",
	'langReloadTheList': "Forny listen",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "Velg sikkerhetskopi",
	'langRestoreBackup': "Gjenopprett Sikkerhetskopi",
	'langDeleteBackup': "Slett Sikkerhetskopi",
	'langBackupClear': "Remove previous folders before restoring the backup",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "Brukeradministrasjon",
	'langIP': "IP",
	'langPort': "Port",
	'langKill': "Drep",
	'langKick': "Spark",
	'langBanName': "Forby",
	'langBanIP': "Forby IP ",
	'langAmount': "Antall ganger",
	'langShootArrow': "Skyt Pil",
	'langShootFireball': "Skyt Flammeball",
	'langThrowEgg': "Kast Egg",
	'langThrowSnowball': "Kast Snøball",
	'langTeleportToPlayer': "Teleporter til Spiller",
	'langTeleportToCoord': "Teleporter til Koordinater",
	'langChangeName': "Bytt Navn",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Forby IP Adresse eller Navn",
	'langClearFilter': "Tøm Filteret",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "Registrer en ny administrator",
	'langCreateAdmin': "Lag Administrator"
};

var jsIndex = {
	'sProcessing': "Behandler...",
	'sLengthMenu': "Vis_Meny_Tillegsmoduler", // Show 10 plugins
	'sZeroRecords': "Ingen tilleggsmoduler funnet.",
	'sInfo': "Viser_START_->_SLUTT_av_SAMLEDE_tillegsmoduler", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "Ingen tilleggsmoduler å vise",
	'sInfoFiltered': "(filter av _MAX_ tilleggsmoduler)", // (filter of 17 plugins)
	'sSearch': "Søk etter tilleggsmodul:",
	'sFirst': "Første",
	'sPrevious': "Forrige",
	'sNext': "Neste",
	'sLast': "Forrige",
	'ReloadServer': "Laster Server På Nytt!",
	'RestartServer': "Restarter Serveren!",
	'StopServer': "Stopper Serveren!",
	'EnablePlugin': "Sikkerhetsmodul aktivert!",
	'StartBackup': "Starter sikkerhetskopiering!",
	'RTKNeeded': "You need the RemoteToolkit to use this function!",
	'NoUsersOnline': "Ingen spillere pålogget",
	'NoBackups': "Det er ingen Sikkerhetskopier",
	'activate': "Aktivér",
	'deactivate': "Deaktivér",
	'unban': "Tilgi",
	'MustLogin': "Du må logge inn!",
	'UnknownError': "Ukjent feil! Prøv igjen!",
	'NotResponse': "Server not responding! Try again",
	'InvalidIP': "Ugyldig IP-adresse.",
	'UpdateNow': "Oppdatér nå",
	'later': "Senere"
};

var jsAjax = {
	'accountcreated': "Bruker opprettet!",
	'worldsaved': "Verden lagret!",
	'messagesent': "Melding Sendt",
	'broadcastedmessage': "Kringkastet melding",
	'forcestop': "Tving stans",
	'plugindisabled': "_NAME_s tilleggsmodul deaktivért", // PluginX's plugin disabled.
	'pluginenabled': "_NAME_s tilleggsmodul aktivert", // PluginX's plugin enabled.
	'editedproperty': "Endret eiendom",
	'worldbackedup': "Kartet Er Sikkerhetskopiert",
	'deletebackup': "Sikkerhetskopi Slettet",
	'kickplayer': "_NAME_ ble sparket fra serveren", // Sharkiller kicked from the server
	'itemsgiven': "_NAME_ ble gitt _AMOUNT_ stykk _ITEM_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "_NAME_ fjernet _AMOUNT_ stykk av _ITEM_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ ble drept", // Sharkiller killed
	'healthchanged': "_NAME_s helse ble endret til _AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_ utestengt!", // Sharkiller was banned!
	'playerunbanned': "_NAME_ er tilgitt!", // Sharkiller was unbanned!
	'ipbanned': "_IP_ ble bannet!", // 19.64.84.24 was banned!
	'ipunbanned': "_IP_ ble tilgitt!", // 19.64.84.24 was unbanned!
	'arrowshooted': "Arrow Shot!", 
	'fireballshooted': "Flammeballen har blitt avfyrt!", 
	'throwsnowball': "Snøball kastet!",
	'throwegg': "Kastet egg!",
	'changename': "_OLD_s navn endret til _NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "Spiller teleportert",
	'langchanged': "Språket er endret! Laster om siden...",
	'wlloaded': "Whitelist loaded!",
	'wladded': "Added to Whitelist!",
	'wlsaved': "Whitelist has been saved successfully!",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "Dårlige parametre",
	'messageempty': "Tom melding",
	'wladdfail': "Failed to add player to Whitelist!",
	'wlsavefail': "Failed to save Whitelist! Try again!",
	'playernotconnected': "Spiller frakoblet",
	'playernotbanned': "Spiller ikke utestengt",
	'ipnotbanned': "IP er ikke bannet",
	'langnotfound': "Språket ble ikke funnet!"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "Logg inn i milkAdmin",
	'langUsername': "Brukernavn",
	'langPassword': "Passord",
	'langLogin': "Logg inn"
};

var jsLogin = {
	'welcome': "Velkommen! Lagrer side...",
	'UnknownError': "Ukjent feil! Prøv igjen!",
	'NotResponse': "Server not responding! Try again",
	'invalidlogin': "Feil brukernavn og passord!"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "Lag en Bruker",
	'langUsername': "Brukernavn",
	'langPassword': "Passord",
	'langCreateAccount': "Lag Bruker"
};

var jsRegister = {
	'created': "Bruker Opprettet! Laster side...",
	'notadmin': "Du kan ikke bruke \"admin\" som brukernavn",
	'baduser': "Vennligst skriv inn et gyldig brukernavn og passord",
	'UnknownError': "Ukjent feil! Prøv igjen!",
	'NotResponse': "Server not responding! Try again",
	'error': "Feil Brukernavn og Passord!"
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
	'langPleaseWait20Seconds': "Vennligst vent 20 sekunder"
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "Sikkerets kopierer"
};

var jsBackup = {
	'Complete': "Sikkerhetskopiering ferdig! Starter server...",
	'UnknownError': "Ukjent feil! Prøv igjen!",
	'NotResponse': "Server not responding! Try again"
};