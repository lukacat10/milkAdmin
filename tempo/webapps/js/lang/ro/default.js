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
	'lang1Yes': "Da",
	'lang1No': "Nu",
	'lang1OK': "OK",
	'lang1Add': "Adauga",
	'lang1Cancel': "Anulează",
	'lang1Send': "Trimite",
	'lang1Change': "Schimba",
	'lang1On': "Activat",
	'lang1Off': "Dezactivat",
	'lang1ReloadList': "Reincarca Lista",
	'lang1IPAddress': "Adresa IP",
	'lang1Player': "Jucator",
	'lang1Action': "Actiune",
	'lang1User': "Utilizator",
	'lang1Password': "Parolă",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "Despre...",
	'langLogout': "Iesi din cont",
	'langChooseLanguage': "Alege o Limba:",
	'langTranslate': "Traduce in limba ta",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "O noua versiune este disponibila",
	'langVersionAvailable': "milkAdmin v_VER_este disponibil", // milkAdmin v1.0 is available
	'langUpdateNow': "Doresti sa actualizezi acum?",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "Despre milkAdmin",
	'langDesign': "Design si Programare:",
	'langUpdates': "Update-uri:",
	'langThanks': "Multumiri:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Optiuni Ban",
	'langKickPlayer': "Da afara Jucator",
	'langBanPlayerName': "Baneaza nume jucator",
	'langBanIPAddress': "Baneaza Adresa IP",
	'langCause': "Motiv",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "Restarteaza Server",
	'langReloadServer': "Reincarca Serverul",
	'langBackupStart': "Porneste Backup",
	'langSaveMap': "Salveaza Lume",
	'langStopServer': "Opreste serverul",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "Server",
	'langConsoleSM': "Consola",
	'langPluginsSM': "Pluginuri",
	'langBackupsSM': "Backup-uri",
	'langPlayersSM': "Jucatori",
	'langBanListSM': "Lista Ban",
	'langWhitelistSM': "Lista Alba",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "Ultimul Restart",
	'langAmountPlayersOnline': "Numar de Jucatori Online",
	'langFreeMemory': "Memorie Libera",
	'langUsedMemory': "Memorie Folosita",
	'langTotalMemory': "Memorie Totala",
	'langMaxMemory': "Memorie Maxima",
	'langTitleMemory': "Date despre Memorie- <b>Memorie Libera</b>: Arata memoria libera in serverul de Minecrat.<br><b>Memorie Folosita</b>:Arata memoria folosita de serverul de Minecraft.<br><b>Memorie Totala</b>:Arata memoria totala pe care serverul o foloseste acum.<br><b>Memorie Maxima</b>:Arata limita de memorie pe care serverul va incerca sa o foloseasca.",
	'langFreeSpace': "Spaţiu liber",
	'langUsedSpace': "Spaţiu folosit",
	'langTotalSpace': "Spaţiu total",
	'langTitleSpace': "Date despre spaţiu - Bazate pe directorul \"Backup Folder\"",
	'langServerVersion': "Versiune Server",
	'langCraftbukkitBuild': "Constructia Craftbukkit",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "Info Server",
	'langBroadcastMessage': "Difuzează mesaj",
	'langTitleBroadcastMessage': "Difuzeaza Mesaj - Trimite un mesaj tuturor jucătorilor,neavând nume.",
	'langLevelName': "Numele Lumii Principale",
	'langTitleLevelName': "Această valoare va fi folosită ca numele lumii si ca nume al fisierului.<br>Poti desigur sa copiezi jocurile salvate aici,si sa schimbi numele fisierului in acelasi nume ca al lumii pentru a o incarca.",
	'langMCIPPORT': "IP si port Server",
	'langTitleMCIPPORT': "<b>IP:</b> Introdu un IP aici daca vrei sa ramai la un singur IP. Este recomandat sa lasi server-ip gol!<br><b>Port</b> Schimba portul pe care serverul il foloseste. Acest port trebuie sa fie deschis daca folosesti un router.<br><b>Exemple valide</b><ul><li><b>IP:</b> Gol sau IP-ul pe care vrei sa il folosesti.</li><li><b>Port</b> Un numar intre <b>1-65535</b>. Implicit: <b>25565</b><ul><li>Ar trebui sa fie mai mare decat 2000 pentru a evita conflictele cu porturile rezervate de sistem.</li></ul></li></ul>",
	'langMaxPlayers': "Limita de jucatori",
	'langTitleMaxPlayers': "Limita de jucatori care pot juca toti pe server,in acelasi timp.<br><i>Daca mai multi jucatori sunt pe server,va folosi mai multe resurse.</i><br><i>Inca ceva,conexiunea adminilor nu sunt puse la socoteala.</i><br><b>Termeni valizi:</b><ul><li>Un numar intre <b>0-255</b>.</li></ul>",
	'langViewDistance': "Distanta Vizualizare",
	'langTitleViewDistance': "Cantitatea de informatii pe care serverul le trimite fiecarui jucator.<br><b>Valori valide:</b><ul><li>Un numar intre <b>3-15</b>. Implicit: <b>10</b></li></ul>",
	'langHoldMessage': "Mesaj de Pauza",
	'langTitleHoldMessage': "Mesajul MCSODRTK va fi afisat cand serverul este pus pe Pauza.<br><i>Necesita MinecraftRemoteToolkit</i>",
	'langAllowNether': "Permite intrarea in Nether",
	'langTitleAllowNether': "Permite jucatorilor sa calatoreasca in Nether.<ul><li><b>adevarat</b>=Serverul permite Portalelor sa trimita jucatori in Nether.</li><li><b>fals</b>=Portalele nu vor trimite jucatori in Nether.</li></ul>",
	'langSpawnMonsters': "Invie Monstrii",
	'langTitleSpawnMonsters': "Seteaza pe pornit daca vrei ca monstrii sa invie noaptea,oprit daca nu.<br><i>Atentie:daca ai lag,opreste aceasta optiune.</i><ul><li><b>pornit</b>=Monstrii invie noaptea si in intuneric.</li><li><b>oprit</b>=Niciun monstru.</li></ul>",
	'langSpawnAnimals': "Invie Animale",
	'langTitleSpawnAnimals': "Animalele pot sa invie.<ul><li><b>pornit</b>=Animalele invie ca in general.</li><li><b>fals</b>=Animalele vor muri imediat.</li></ul>",
	'langOnlineMode': "Mod Online (Verifica Numele)",
	'langTitleOnlineMode': "Serverul verifica daca jucatorii care se conecteaza au cumparat jocul.<br>Seteaza aceasta optiune pe oprit numai daca serverul nu este conectat la Internet.<ul><li><b>pornit</b>= Serverul verifica conturile de pe minecraft.net ale fiecarui jucator.</li><li><b>oprit</b>= Serverul nu va incerca sa verifice jucatorii</li></ul>",
	'langPVP': "Jucator vs Jucator (PVP)",
	'langTitlePVP': "Activeaza Jucator vs Jucator pe server.<br><i>Nota: Daca lovesti un jucator in timp ce PvP este dezactivat,<br>lupii tot te vor ataca.</i><ul><li><b>activat</b>= Jucatorii se pot omori intre ei.</li><li><b>dezactivat</b>=Jucatorii nu se pot ataca,omori.</li></ul>",
	'langAllowFlight': "Permite Zborul",
	'langTitleAllowFlight': "Va permite jucatorilor sa zboara si sa foloseasca no-clip pe server,daca au un mod care ii permite sa zboare/foloseasca no-clip.<ul><li><b>activat</b>= Zbor/no-clip este permis.</li><li><b>dezactivat</b>=Zbor/no-clip nu este permis.</li></ul>",
	'langWhitelist': "Lista Alba",
	'langTitleWhitelist': "Activeaza lista alba pe server. Cu lista alba activata,userii care nu sunt pe lista nu se pot conecta.<ul><li><b>true</b> = Fisierul white-list.txt este folosit pentru a genera lista alba.</li><li><b>false</b> = Nicio lista alba este folosita.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "Lista Alba",
	'langWLAddPlayer': "Adauga Jucator",
	'langWLDeleteSelected': "Sterge Selectate",
	'langWLSaveChanges': "Salveaza Schimbari",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "Activeaza Plugin",
	'langEnable': "Activează",
	'langPluginName': "Nume Plugin",
	'langVersion': "Versiune",
	'langReloadTheList': "Reincarca Lista",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "Alege Backup",
	'langRestoreBackup': "Restabileste Backup",
	'langDeleteBackup': "Sterge Backup",
	'langBackupClear': "Sterge vechile directoare inainte de backup",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "Administrare Useri",
	'langIP': "Adresa IP",
	'langPort': "Port",
	'langKill': "Omoara",
	'langKick': "Kick",
	'langBanName': "Ban",
	'langBanIP': "Baneaza Adresa IP",
	'langAmount': "De cate ori",
	'langShootArrow': "Trage Sageata",
	'langShootFireball': "Trage Bila de Foc",
	'langThrowEgg': "Arunca Ou",
	'langThrowSnowball': "Arunca Bulgar de Zapada",
	'langTeleportToPlayer': "Teleportare la Jucator",
	'langTeleportToCoord': "Teleportare la Coordonate",
	'langChangeName': "Schimba Numele",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Baneaza Adresa IP sau Nume",
	'langClearFilter': "Sterge Filtru",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "Inregistreaza Admin nou",
	'langCreateAdmin': "Creeaza Admin"
};

var jsIndex = {
	'sProcessing': "Prelucrez....",
	'sLengthMenu': "Arata _MENU_ pluginuri", // Show 10 plugins
	'sZeroRecords': "Niciun Plugin Gasit",
	'sInfo': "Arat_START_->_END_din_TOTAL_pluginuri", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "Niciun plugin de aratat",
	'sInfoFiltered': "(filtrez din_MAX_pluginuri)", // (filter of 17 plugins)
	'sSearch': "Cauta Plugin:",
	'sFirst': "Prima pagina",
	'sPrevious': "Pagina precedenta",
	'sNext': "Pagina urmatoare",
	'sLast': "Ultima Pagina",
	'ReloadServer': "Reincarc Serverul",
	'RestartServer': "Reincep Serverul!",
	'StopServer': "Opresc Serverul!",
	'EnablePlugin': "Plugin Activat!",
	'StartBackup': "Pornesc Backup!",
	'RTKNeeded': "Ai nevoie de Remote Toolkit ca sa folosesti aceasta functie!",
	'NoUsersOnline': "Niciun Jucator pe server",
	'NoBackups': "Nu exista backup-uri!",
	'activate': "Activeaza",
	'deactivate': "Dezactiveaza",
	'unban': "Unban",
	'MustLogin': "Trebuie sa te loghezi!",
	'UnknownError': "Eroare necunoscuta! Incearca iar!",
	'NotResponse': "Serverul nu raspunde! Incearca iar",
	'InvalidIP': "Adresa IP Invalida",
	'UpdateNow': "Actualizeaza acum",
	'later': "Mai tarziu"
};

var jsAjax = {
	'accountcreated': "Cont Creeat!",
	'worldsaved': "Lume Salvata!",
	'messagesent': "Mesaj Trimis!",
	'broadcastedmessage': "Mesaj Difuzat!",
	'forcestop': "Oprire Fortata",
	'plugindisabled': "pluginul _NAME_ a fost dezactivat", // PluginX's plugin disabled.
	'pluginenabled': "pluginul _NAME_ a fost activat", // PluginX's plugin enabled.
	'editedproperty': "Proprietate editata",
	'worldbackedup': "Salvare de Siguranta a Lumii",
	'deletebackup': "Salvarea de Siguranta stearsa",
	'kickplayer': "_NAME_a fost dat afara de pe server", // Sharkiller kicked from the server
	'itemsgiven': "lui_NAME_i-a fost dat_AMOUNT_de_ITEM_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "lui_NAME_i-au fost eliminate_AMOUNT_de_ITEM_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_a fost omorat", // Sharkiller killed
	'healthchanged': "viata lui_NAME_ i-a fost in schimbata in _AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_a fost banat!", // Sharkiller was banned!
	'playerunbanned': "_NAME_a fost iertat!", // Sharkiller was unbanned!
	'ipbanned': "_IP_a fost banat!", // 19.64.84.24 was banned!
	'ipunbanned': "_IP_a fost iertat!", // 19.64.84.24 was unbanned!
	'arrowshooted': "Sageata Trasa!", 
	'fireballshooted': "Bila de Foc trasa", 
	'throwsnowball': "Bulgare de zapada aruncat!",
	'throwegg': "Ou aruncat!",
	'changename': "numele lui_OLD_ a fost schimbat in _NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "Jucator Teleportat",
	'langchanged': "¡Limba Schimbata! Pagina se incarca...",
	'wlloaded': "Lista alba incarcata!",
	'wladded': "Adaugat in Lista Alba!",
	'wlsaved': "Lista Alba a fost salvata cu succes!",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "Parametrii incorecti",
	'messageempty': "Mesaj Gol",
	'wladdfail': "Incercarea de a-l adauga pe Jucator a esuat!",
	'wlsavefail': "Incercarea de salvare a esuat! Incearca iar!",
	'playernotconnected': "Jucatorul nu este conectat",
	'playernotbanned': "Jucatorul nu este banat",
	'ipnotbanned': "IP-ul nu este banat",
	'langnotfound': "Limba nu a fost gasita!"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "Login in milkAdmin",
	'langUsername': "Nume Utilizator",
	'langPassword': "Parolă",
	'langLogin': "Login"
};

var jsLogin = {
	'welcome': "Bine ai venit! Incarc pagina...",
	'UnknownError': "Eroare necunoscuta! Incearca iar!",
	'NotResponse': "Serverul nu raspunde! Incearca iar",
	'invalidlogin': "Nume utilizator si parola incorecta!"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "Creeaza Cont",
	'langUsername': "Nume Utilizator",
	'langPassword': "Parolă",
	'langCreateAccount': "Creeaza Contul"
};

var jsRegister = {
	'created': "¡Cont Creeat! Pagina se incarca...",
	'notadmin': "Nu poti folosii \"admin\" ca Nume de utilizator",
	'baduser': "Te rugam sa introduci un nume de utiliz. si o parola corecta",
	'UnknownError': "Eroare necunoscuta! Incearca iar!",
	'NotResponse': "Serverul nu raspunde! Incearca iar",
	'error': "¡Nume de Utiliz. si parola Incorecte!"
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "Porneste Server"
};

///////////////////////////////////////////////
//
//   Language for wait.html
//
///////////////////////////////////////////////

var langWait = {
	'langPleaseWait20Seconds': "Te rugam sa astepti 20 de secunde"
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "Backup in curs de desfasurare"
};

var jsBackup = {
	'Complete': "Backup Finalizat! Pornesc Server...",
	'UnknownError': "Eroare necunoscuta! Incearca iar!",
	'NotResponse': "Serverul nu raspunde! Incearca iar"
};