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
	'lang1Yes': "Jā",
	'lang1No': "Nē",
	'lang1OK': "Labi",
	'lang1Add': "Pievienot",
	'lang1Cancel': "Atcelt",
	'lang1Send': "Sūtīt",
	'lang1Change': "Mainīt",
	'lang1On': "Ieslēgts",
	'lang1Off': "Izslēgts",
	'lang1ReloadList': "Pārlādēt sarakstu",
	'lang1IPAddress': "IP Adrese",
	'lang1Player': "Spēlētājs",
	'lang1Action': "Darbība",
	'lang1User': "Lietotājvārds",
	'lang1Password': "Parole",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "Par...",
	'langLogout': "Iziet",
	'langChooseLanguage': "Izvēlies valodu:",
	'langTranslate': "Tulkot savā valodā",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "Jauna versija pieejama",
	'langVersionAvailable': "milkAdmin v_VER_ ir pieejams", // milkAdmin v1.0 is available
	'langUpdateNow': "Vai tu vēlies atjaunināt tagad?",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "Par milkAdmin",
	'langDesign': "Dizains un kodēšana:",
	'langUpdates': "Atjauninājumi:",
	'langThanks': "Paldies:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Bana Iespējas",
	'langKickPlayer': "Izmest spēlētāju",
	'langBanPlayerName': "Banot spēlētāja vārdu",
	'langBanIPAddress': "Banot IP Adresi",
	'langCause': "Iemesls",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "Restartēt serveri",
	'langReloadServer': "Pārlādēt serveri",
	'langBackupStart': "Sākt veidot rezerves kopiju",
	'langSaveMap': "Saglabāt karti",
	'langStopServer': "Izslēgt serveri",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "Serveris",
	'langConsoleSM': "Konsole",
	'langPluginsSM': "Plugini",
	'langBackupsSM': "Rezervers kopijas",
	'langPlayersSM': "Spēlētāji",
	'langBanListSM': "Banu saraksts",
	'langWhitelistSM': "Baltais saraksts",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "Pēdējais restarts",
	'langAmountPlayersOnline': "Spēlētāju skaits",
	'langFreeMemory': "Brivā atmiņa",
	'langUsedMemory': "Lietotā admiņa",
	'langTotalMemory': "Kopējā atmiņa",
	'langMaxMemory': "Maks. atmiņa",
	'langTitleMemory': "Atmiņas dati - <b>Brīvā atmiņa</b>: Parāda servera brīvo atmiņas daudzumu.<br><b>Lietotā admiņa</b>: Parāda servera lietoto atmiņas daudzumu.<br><b>Kopējā atmiņa</b>: Parāda servera kopējo atmiņas daudzumu.<br><b>Maks. atmina</b>: Parāda serverim pieejamo atmiņas daudzumu.",
	'langFreeSpace': "Brīvā vieta",
	'langUsedSpace': "Lietotā vieta",
	'langTotalSpace': "Kopējā vieta",
	'langTitleSpace': "Vietas dati - Uzskaita &quot;Backup mapes&quot; svaru.",
	'langServerVersion': "Servera versija",
	'langCraftbukkitBuild': "Craftbukkit versija",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "Servera info",
	'langBroadcastMessage': "Pārraidīt ziņu",
	'langTitleBroadcastMessage': "Pārraidīt ziņu - Sūtīt ziņu visiem spēlētājiem.",
	'langLevelName': "Kartes nosaukums",
	'langTitleLevelName': "Šis vārds tiks lietots, kā kartes un kartes mapītes nosaukums.<br>Šeit var arī iekopēt jau gatavu pasauli.",
	'langMCIPPORT': "Minecraft servera IP un Ports",
	'langTitleMCIPPORT': "<b>IP:</b> Ievadi IP, kurai vēlies piesaistīt serveri. Ieteicams atstāt tukšu!<br><b>Ports:</b> Nomaina servera portu!<br><b>Derīgi:</b><ul><li><b>IP:</b> Tukšs vai IP uz kuras vēlies serveri.</li><li><b>Ports:</b> Skaitlis starp <b>1-65535</b>. Orģināli: <b>25565</b><ul><li>Vajadzētu būt lielākam par 20000, lai neizraisītu konfliktus ar OS.</li></ul></li></ul>",
	'langMaxPlayers': "Maks. spēlētāji",
	'langTitleMaxPlayers': "Maksimālais spēlētāju skaits, kas var spēlēt uz servera viena brīdī.<br><i>Jo vairāk vietas, jo vairāk resursu tiek lietots.</i><br><i>Adminu vietas netiek pieskaitītas.</i><br><b>Derīgi:</b><ul><li>Skaitlis starp <b>0-255</b>.</li></ul>",
	'langViewDistance': "Skata tālums",
	'langTitleViewDistance': "Chunku skaits, ko nusūta spēlētājam.<br><b>Derīgi:</b><ul><li>Skaitlis starp <b>3-15</b>. Orģināli: <b>10</b></li></ul>",
	'langHoldMessage': "Aiztures ziņa",
	'langTitleHoldMessage': "Ziņa, ko MCSODRTK parādīs, kad serveris ir aizturē.<br><i>Nepieciešams MinecraftRemoteToolkit</i>",
	'langAllowNether': "Atļaut elli",
	'langTitleAllowNether': "Atļauj spēlētājiem tikt uz elli.<ul><li><b>true</b> = Serveris atļaus caur portāliem tikt uz elli.</li><li><b>false</b> = Portāli nedarbosies.</li></ul>",
	'langSpawnMonsters': "Briesmoņi",
	'langTitleSpawnMonsters': "Briesmonu spawnošanās.<br><i>Tip: Ja ir lagi, tad šo labāk izslēgt.</i><ul><li><b>true</b> = Briesmoņi parādīsies naktī un/vai tumsā.</li><li><b>false</b> = Nebūs neviena briesmoņa.</li></ul>",
	'langSpawnAnimals': "Dzīvnieki",
	'langTitleSpawnAnimals': "Dzīvnieku spawnošanās.<ul><li><b>true</b> = Dzīvnieki parādīsies normāli.</li><li><b>false</b> = Dzīvnieku nebūs.</li></ul>",
	'langOnlineMode': "Tiešsaites veids (Niku pārbaude)",
	'langTitleOnlineMode': "Serveris pārbauda spēlētājus no minecraft.net datubāzes<br>Likt false tikai tad ja serveris nav pieslēgts internetam.<ul><li><b>true</b> = Serveris pieslēgts pie interneta un pārbaudīs nikus.</li><li><b>false</b> = Serveris nepārbaudīs nikus.</li></ul>",
	'langPVP': "Spēlētājs pret spēlētāju (PvP)",
	'langTitlePVP': "Atļauj PvP serverī.<br><i>Tip: Iesitītot spēlētājam ar izslēgtu PvP vilki tāpat<br> uzbruks uzbrucējam.</i><ul><li><b>true</b> = Spēlētāji vares viens otru nogalināt.</li><li><b>false</b> = Spēlētāji nevarēs nogalināt viens otru.</li></ul>",
	'langAllowFlight': "Atļaut lidot",
	'langTitleAllowFlight': "Atļaus spēlētājiem izmanot klienta modifikāciju, lai lidotu<ul><li><b>true</b> = Visi var lidot.</li><li><b>false</b> = Neviens nevarēs lidot.</li></ul>",
	'langWhitelist': "Baltais saraksts",
	'langTitleWhitelist': "Ieslēgt balto sarakstu uz servera. Ar balto sarakstu ieslēgtu, lietotāji, kas nav baltajā sarakstā nevarēs pieslēgties.<ul><li><b>true</b> = Tiks izmanots whitelist.txt fails.</li><li><b>false</b> = Visi varēs pieslēgties serverim.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "Baltais saraksts",
	'langWLAddPlayer': "Pievienot spēlētāju",
	'langWLDeleteSelected': "Izdzēst iezīmēto",
	'langWLSaveChanges': "Saglabāt izmaiņas",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "Ieslēgt pluginu",
	'langEnable': "Ieslēgt",
	'langPluginName': "Plugina nosaukums",
	'langVersion': "Versija",
	'langReloadTheList': "Pārlādēt sarakstu",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "Izvēlies rezerves kopiju",
	'langRestoreBackup': "Atjaunot rezerves kopiju",
	'langDeleteBackup': "Izdzēst rezerves kopiju",
	'langBackupClear': "Izdzēs vecās mapes pirms atjauno rezerves kopiju",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "Lietotāju administrācija",
	'langIP': "IP",
	'langPort': "Ports",
	'langKill': "Nogalināt",
	'langKick': "Izmest",
	'langBanName': "Banot",
	'langBanIP': "Banot IP",
	'langAmount': "Reizes",
	'langShootArrow': "Izšaut bultas",
	'langShootFireball': "Šaut ugunsbumbu",
	'langThrowEgg': "Mest ar olu",
	'langThrowSnowball': "Mest piku",
	'langTeleportToPlayer': "Iet pie spēlētāja",
	'langTeleportToCoord': "Iet uz koordinātēm",
	'langChangeName': "Mainīt vārdu",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Banot IP vai vārdu",
	'langClearFilter': "Iztīrīt filtru",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "Reģistrēt jaunu adminu",
	'langCreateAdmin': "Izveidot adminu"
};

var jsIndex = {
	'sProcessing': "Darbojas...",
	'sLengthMenu': "Parādīt _MENU_ pluginus", // Show 10 plugins
	'sZeroRecords': "Nav neviena plugina.",
	'sInfo': "Rāda _START_->_END_ no _TOTAL_ pluginiem", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "Nav ko parādīt",
	'sInfoFiltered': "(filtrs no _MAX_ pluginiem)", // (filter of 17 plugins)
	'sSearch': "Meklēt pluginu:",
	'sFirst': "Pirmā",
	'sPrevious': "Otrā",
	'sNext': "Nākošā",
	'sLast': "Iepriekšējā",
	'ReloadServer': "Pārlādē serveri!",
	'RestartServer': "Restartē serveri!",
	'StopServer': "Izslēdz serveri!",
	'EnablePlugin': "Plugins ieslēgts!",
	'StartBackup': "Sāk atjaunot rezerves kopiju!",
	'RTKNeeded': "Tev vajag RemoteToolkit lai to izdarītu!",
	'NoUsersOnline': "Pašlaik nav neviena spēlētāja",
	'NoBackups': "Nav rezerves kopiju!",
	'activate': "Aktivizēt",
	'deactivate': "Deaktivizēt",
	'unban': "Unbanot",
	'MustLogin': "Tev jāielogojas sistēmā!",
	'UnknownError': "Nezināms errors! Mēģini vēlreiz!",
	'NotResponse': "Serveris neatbild! Mēģini vēlreiz!",
	'InvalidIP': "Nepareiza IP adrese",
	'UpdateNow': "Atjaunināt",
	'later': "Vēlāk"
};

var jsAjax = {
	'accountcreated': "Konts izveidots!",
	'worldsaved': "Karte saglabāta!",
	'messagesent': "Ziņa nosūtīta",
	'broadcastedmessage': "Ziņa pārraidīta",
	'forcestop': "Piespiedu izslēgšana",
	'plugindisabled': "_NAME_\'s plugins izslēgts", // PluginX's plugin disabled.
	'pluginenabled': "_NAME_\'s plugins ieslēgts", // PluginX's plugin enabled.
	'editedproperty': "Editēti iestatijumi",
	'worldbackedup': "Izveidota rezerves kopija kartei",
	'deletebackup': "Rezerves kopija izdzēsta",
	'kickplayer': "_NAME_ izmests no servera", // Sharkiller kicked from the server
	'itemsgiven': "_NAME_ tika iedots _AMOUNT_ _ITEM_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "_NAME_ noņēma _AMOUNT_ _ITEM_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ nogalināts", // Sharkiller killed
	'healthchanged': "_NAME_\' s dzīvība nomainīta uz _AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_ izbanots!", // Sharkiller was banned!
	'playerunbanned': "_NAME_ unbanots!", // Sharkiller was unbanned!
	'ipbanned': "_IP_ banots!", // 19.64.84.24 was banned!
	'ipunbanned': "_IP_ unbanots!", // 19.64.84.24 was unbanned!
	'arrowshooted': "Bulta izšauta!", 
	'fireballshooted': "Ugunsbumba izšauta!", 
	'throwsnowball': "Pika izmesta!",
	'throwegg': "Ola aizmesta!",
	'changename': "_OLD_\' s vārds nomainīts uz _NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "Spēlētājs teleportēts",
	'langchanged': "Valoda nomainīta! Pārlādē lapu...",
	'wlloaded': "Baltais saraksts ielādēts!",
	'wladded': "Pievienots baltajam sarakstam!",
	'wlsaved': "Baltais saraksts saglabāts!",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "Nepareizs parametrs",
	'messageempty': "Tukša ziņa",
	'wladdfail': "Neizdevās pievienot spēlētāju!",
	'wlsavefail': "Neizdevās saglabāt balto sarakstu! Mēģini vēlreiz!",
	'playernotconnected': "Spēlētājs nav pieslēdzies",
	'playernotbanned': "Spēlētājs nav banots",
	'ipnotbanned': "IP nav banota",
	'langnotfound': "Valoda nav atrasta!"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "Ieiet milkAdmin",
	'langUsername': "Lietotājvārds",
	'langPassword': "Parole",
	'langLogin': "Ieiet"
};

var jsLogin = {
	'welcome': "Sveicināts! Ielādē lapu...",
	'UnknownError': "Nezināms errors! Mēģini vēlreiz!",
	'NotResponse': "Serveris neatbild! Mēģini vēlreiz!",
	'invalidlogin': "Nepareizs vārds un parole!"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "Izveidot kontu",
	'langUsername': "Lietotājvārds",
	'langPassword': "Parole",
	'langCreateAccount': "Izveidot kontu"
};

var jsRegister = {
	'created': "Konts izveidots! Ielādē lapu...",
	'notadmin': "Nevar lietot \"admin\", kā vārdu",
	'baduser': "Lūdzu ievadi derīgu vārdu un paroli",
	'UnknownError': "Nezināms errors! Mēģini vēlreiz!",
	'NotResponse': "Serveris neatbild! Mēģini vēlreiz!",
	'error': "Nepareizs vārds un parole!"
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "Ieslēgt serveri"
};

///////////////////////////////////////////////
//
//   Language for wait.html
//
///////////////////////////////////////////////

var langWait = {
	'langPleaseWait20Seconds': "Lūdzu uzgaidi 20 sekundes"
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "Veido rezerves kopiju"
};

var jsBackup = {
	'Complete': "Rezerves kopija uzlikta! Startē serveri...",
	'UnknownError': "Nezināms errors! Mēģini vēlreiz!",
	'NotResponse': "Serveris neatbild! Mēģini vēlreiz!"
};