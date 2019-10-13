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
	'lang1No': "Nej",
	'lang1OK': "OK",
	'lang1Add': "Tilføj",
	'lang1Cancel': "Annuller",
	'lang1Send': "Send",
	'lang1Change': "Skift",
	'lang1On': "Tændt",
	'lang1Off': "Slukket",
	'lang1ReloadList': "Genåben listen",
	'lang1IPAddress': "IP addresse",
	'lang1Player': "Spiller",
	'lang1Action': "Handling",
	'lang1User': "Brugernavn",
	'lang1Password': "Adgangskode",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "Om...",
	'langLogout': "Log af",
	'langChooseLanguage': "Vælg et sprog:",
	'langTranslate': "Oversæt til dit sprog",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "Ny version tilgængelig",
	'langVersionAvailable': "milkAdmin v_VER_ er tilgængelig", // milkAdmin v1.0 is available
	'langUpdateNow': "Vil du opdatere nu?",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "Om milkAdmin",
	'langDesign': "Design og programmering:",
	'langUpdates': "Updateringer:",
	'langThanks': "Tak til:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Udelukkelses muligheder",
	'langKickPlayer': "Spark spiller ud af serveren",
	'langBanPlayerName': "Udeluk brugernavn",
	'langBanIPAddress': "Udeluk IP addresse",
	'langCause': "Begrundelse",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "Genstart serveren",
	'langReloadServer': "Genindlæs serveren",
	'langBackupStart': "Start Backup",
	'langSaveMap': "Gem verdenen",
	'langStopServer': "Stop serveren",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "Server",
	'langConsoleSM': "Konsol",
	'langPluginsSM': "Tilføjelser",
	'langBackupsSM': "Backups",
	'langPlayersSM': "Spillere",
	'langBanListSM': "Banliste",
	'langWhitelistSM': "Whitelist",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "Seneste genstart",
	'langAmountPlayersOnline': "Antal af Spillere Online",
	'langFreeMemory': "Fri hukommelse",
	'langUsedMemory': "Brugt hukommelse",
	'langTotalMemory': "Total hukommelse",
	'langMaxMemory': "Maksimum hukommelse",
	'langTitleMemory': "Hukommelses data - <b>Fri hukommelse</b>: Vis mængden af ​​ledig hukommelse på Minecraft serveren.<br><b>Brugt hukommelse</b>: Vis mængden af ​​brugt hukommelse på Minecraft serveren.<br><b>Total hukommelse</b>: Vis den totale mængde hukommelse Minecraft serveren bruger lige nu.<br><b>Max hukommelse</b>: Vis maximum mængde hukommelse som Minecraft serveren vil prøve at bruge.",
	'langFreeSpace': "Ledig plads",
	'langUsedSpace': "Brugt plads",
	'langTotalSpace': "Total plads",
	'langTitleSpace': "Space Data - Based on &quot;Backup Folder&quot; directory.",
	'langServerVersion': "Server version",
	'langCraftbukkitBuild': "Craftbukkit version",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "Server Information",
	'langBroadcastMessage': "Udsend Besked",
	'langTitleBroadcastMessage': "Udsend Besked - Send en besked til alle spillere uden et tag.",
	'langLevelName': "Hoved verdenens navn",
	'langTitleLevelName': "Denne værdi vil blive brugt som navn på verdenen og som mappe navn. <br>Du kan også kopiere din gente bane her i stedet, og ændre navnet til navnet på den bane i stedet for at bruge den,",
	'langMCIPPORT': "Minecraft Server IP og Port",
	'langTitleMCIPPORT': "<b>IP:</b> Sæt dette hvis du vil have serveren bundet til en speciel IP. Det er stærkt anbefalet at du efterlader server-ip blank.<br><b>Port:</b> Skifter porten serveren kører på. Denne port skal forwardes hvis serveren går igennem en router.<br><b>Gyldige værdier:</b><ul><li><b>IP:</b> Blank, eller den IP du vil have serveren til at køre på.</li><li><b>Port:</b> Et nummer imellem <b>1-65535</b>. Standard: <b>25565</b><ul><li>Skal være højere end 20000 for at undgå problemer med system reserverede porte.</li></ul></li></ul>",
	'langMaxPlayers': "Max Antal Spillere",
	'langTitleMaxPlayers': "Det maksimale antal spillere der kan være på serveren på samme tid.<br><i>Læg mærke til at jo flere der er på serveren, jo flere resourcer kræver det.</i><br><i>Læg også mærke til at, admin forbindelser ikke tæller imod maks spillere.</i><br><b>Valide værdier:</b><ul><li>Et tal imellem <b>0-255</b>.</li></ul>",
	'langViewDistance': "Syns afstand",
	'langTitleViewDistance': "Antallet af chunks serveren sender til spillerne.<br><b>Gyldige værdier:</b><ul><li>Et nummer imellem <b>3-15</b>. Standard: <b>10</b></li></ul>",
	'langHoldMessage': "Hold bedsked",
	'langTitleHoldMessage': "Message that MCSODRTK will display when Server is on Hold.<br><i>Needs MinecraftRemoteToolkit</i>",
	'langAllowNether': "Tillad Nether",
	'langTitleAllowNether': "Tillader spillere at tage til Nether.<ul><li><b>true</b> = Serveren vil tillade portaller til at sende spillere til Nether.</li><li><b>false</b> = Portaller vil ikke sende spillere til Nether.</li></ul>",
	'langSpawnMonsters': "Tillad monstre",
	'langTitleSpawnMonsters': "Set true if you want monsters to be spawned at night, false if you don\'t.<br><i>Tip: if you have major lag, turn this off.</i><ul><li><b>true</b> = Monsters will appear at night and in the dark.</li><li><b>false</b> = No monsters.</li></ul>",
	'langSpawnAnimals': "Tillad dyr",
	'langTitleSpawnAnimals': "Du vil kunne fremkomme.<ul><li><b>true</b> = Dyr fremkommer som normalt.</li><li><b>false</b> = Dyr vil forsvinde øjeblikkeligt.</li></ul>",
	'langOnlineMode': "Online tilstand(Verificer navne)",
	'langTitleOnlineMode': "Server tjekker forbindende spillere imod minecraft\'s bruger database.<br>Sæt kun denne til false, hvis din server ikke har forbindelse til internettet.<ul><li><b>true</b> = Serveren vil regne med at den har internet forbindelse og tjekker minecraft.net for hver forbindende spiller.</li><li><b>false</b> = Serveren vil ikke forsøge at tjekke forbindende spillere.</li></ul>",
	'langPVP': "Spiller mod Spiller (PVP)",
	'langTitlePVP': "Enable Player vs Player on the server.<br><i>Note: Hitting a player while having PvP set to false and having tamed wolfs will still cause the wolfs<br>attacking the attacked player.</i><ul><li><b>true</b> = Players will be able to kill each other.</li><li><b>false</b> = Players cannot kill other players.</li></ul>",
	'langAllowFlight': "Tillad flyvning",
	'langTitleAllowFlight': "Vil tillade brugere at flyve/no-clip på din server, hvis de har en tilføjelse som giver evnen til at flyve/no-clip installeret. <ul><li><b>sand</b> = Flyvning/no-clip er tilladt, og kan blive brugt hvis spilleren har det installeret. </li><li><b>falsk</b> = Flyvning/no-clip er ikke tilladt. </li></ul>",
	'langWhitelist': "Whitelist",
	'langTitleWhitelist': "Enable a white list on the server. With a white list enabled, users not on the white list will be unable to connect.<ul><li><b>true</b> = The file white-list.txt is used to generate the white list.</li><li><b>false</b> = No white list is used.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "Whitelist",
	'langWLAddPlayer': "Tilføj Spiller",
	'langWLDeleteSelected': "Slet Valgte",
	'langWLSaveChanges': "Gem Ændringer",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "Aktiver Tilføjelse",
	'langEnable': "Aktiver",
	'langPluginName': "Tilføjelsens navn",
	'langVersion': "Version",
	'langReloadTheList': "Genåben listen",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "Vælg en backup",
	'langRestoreBackup': "Brug denne backup",
	'langDeleteBackup': "Fjern denne backup",
	'langBackupClear': "Fjern tidligere mappe før du genopretter backup!",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "Bruger kontrol",
	'langIP': "IP",
	'langPort': "Port",
	'langKill': "Dræb",
	'langKick': "Kick",
	'langBanName': "Udeluk",
	'langBanIP': "Udeluk IP",
	'langAmount': "Antal gange",
	'langShootArrow': "Skyd en pil",
	'langShootFireball': "Skyd ildkugle",
	'langThrowEgg': "Kast et æg",
	'langThrowSnowball': "Kast en snebold",
	'langTeleportToPlayer': "Teleporter til spiller",
	'langTeleportToCoord': "Teleportér til koordinater",
	'langChangeName': "Skift navn",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Udeluk IP addresse eller brugenavn",
	'langClearFilter': "Ryd filter",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "Opret en ny adminstrator",
	'langCreateAdmin': "Lav adminstration"
};

var jsIndex = {
	'sProcessing': "Arbejder...",
	'sLengthMenu': "Vis _MENU_ tilføjelser", // Show 10 plugins
	'sZeroRecords': "Ingen tilføjelser fundet",
	'sInfo': "Viser _START_->_END_ af _TOTAL_ tilføjelser", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "Ingen tilføjelser at vise",
	'sInfoFiltered': "(Filtre af _MAX_ tilføjelser)", // (filter of 17 plugins)
	'sSearch': "Søg efter tilføjelse",
	'sFirst': "Første",
	'sPrevious': "Forrige",
	'sNext': "Næste",
	'sLast': "Sidste",
	'ReloadServer': "Genindlæser serveren",
	'RestartServer': "Genstarter server!",
	'StopServer': "Stopper server!",
	'EnablePlugin': "Tilføjelse aktiveret",
	'StartBackup': "Begynder Backup!",
	'RTKNeeded': "Du skal have RemoteToolkit for at bruge denne funktion!",
	'NoUsersOnline': "Ingen spillere online",
	'NoBackups': "Der er ingen backups!",
	'activate': "Aktiver",
	'deactivate': "Deaktiver",
	'unban': "Fjern udelukkelse",
	'MustLogin': "Du skal logge ind!",
	'UnknownError': "Ukendt Fejl! Prøv igen!",
	'NotResponse': "Serveren svare ikke! Prøv igen",
	'InvalidIP': "Ugyldig IP addresse",
	'UpdateNow': "Updater nu",
	'later': "Senere"
};

var jsAjax = {
	'accountcreated': "Bruger oprettet",
	'worldsaved': "Verden er gemt!",
	'messagesent': "Besked sendt",
	'broadcastedmessage': "Sendte bedsked",
	'forcestop': "Tving nedlukning",
	'plugindisabled': "_NAME_\'s tilføjelse frakoblet", // PluginX's plugin disabled.
	'pluginenabled': "_NAME_\'s tilføjelse tilkoblet", // PluginX's plugin enabled.
	'editedproperty': "Ændrede engenskab",
	'worldbackedup': "Backup af verden fuldført",
	'deletebackup': "Backup fjernet",
	'kickplayer': "_NAME_ sparket ud af serveren", // Sharkiller kicked from the server
	'itemsgiven': "_NAME_ fik _AMOUNT_ af  _ITEM_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "_NAME_ fjernede _AMOUNT_ af  _ITEM_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ blev dræbt", // Sharkiller killed
	'healthchanged': "_NAME_ antal liv blev ændret til _AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_ er nu udelukket", // Sharkiller was banned!
	'playerunbanned': "_NAME_ fik fjernet sin udelukkelse", // Sharkiller was unbanned!
	'ipbanned': "_IP_ er nu udelukket", // 19.64.84.24 was banned!
	'ipunbanned': "_IP_ fik fjernet sin udelukkelse", // 19.64.84.24 was unbanned!
	'arrowshooted': "Pil skudt!", 
	'fireballshooted': "Ildkugle affyret!", 
	'throwsnowball': "Snebold kastet",
	'throwegg': "Æg kastet!",
	'changename': "_OLD_\'s navn blev ændret til _NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "Spiller blev teleporteret",
	'langchanged': "Sprog ændret! Opdaterer siden...",
	'wlloaded': "Whitelist indlæst!",
	'wladded': "Tilføjet til hvidlisten!",
	'wlsaved': "Hvidlisten er gemt sucessfuldt!",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "Forkerte parametre",
	'messageempty': "Tom besked",
	'wladdfail': "Kunne ikke tilføje spiller til Whitelist!",
	'wlsavefail': "Kunne ikke gemme Whitelist! Prøv igen!",
	'playernotconnected': "Spilleren er ikke tilslutet",
	'playernotbanned': "Spilleren er ikke udelukket",
	'ipnotbanned': "IPen er ikke udelukket",
	'langnotfound': "Sprog ikke fundet!"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "Få adgang til milkAdmin",
	'langUsername': "Brugernavn",
	'langPassword': "Adgangskode",
	'langLogin': "Log ind"
};

var jsLogin = {
	'welcome': "Velkommen! Loader siden...",
	'UnknownError': "Ukendt Fejl! Prøv igen!",
	'NotResponse': "Serveren svare ikke! Prøv igen",
	'invalidlogin': "Ugyldigt brugernavn eller adgangskode"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "Opret en bruger",
	'langUsername': "Brugernavn",
	'langPassword': "Adgangskode",
	'langCreateAccount': "Opret bruger"
};

var jsRegister = {
	'created': "Bruger oprettet! Indlæser siden...",
	'notadmin': "Du kan ikke bruge \"admin\" som brugernavn",
	'baduser': "Indtast venligst et gyldigt brugernavn og adgangskode",
	'UnknownError': "Ukendt Fejl! Prøv igen!",
	'NotResponse': "Serveren svare ikke! Prøv igen",
	'error': "Ugyldigt brugernavn eller adgangskode"
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "Start server"
};

///////////////////////////////////////////////
//
//   Language for wait.html
//
///////////////////////////////////////////////

var langWait = {
	'langPleaseWait20Seconds': "Vent venligst 20 sekunder"
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "Laver backup"
};

var jsBackup = {
	'Complete': "Backup udført! Starter server...",
	'UnknownError': "Ukendt Fejl! Prøv igen!",
	'NotResponse': "Serveren svare ikke! Prøv igen"
};