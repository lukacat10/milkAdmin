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
	'lang1No': "Nee",
	'lang1OK': "Ok",
	'lang1Add': "Voegtoe",
	'lang1Cancel': "Annuleren",
	'lang1Send': "Versturen",
	'lang1Change': "Veranderen",
	'lang1On': "Aan",
	'lang1Off': "Uit",
	'lang1ReloadList': "Lijst herladen",
	'lang1IPAddress': "IP Adres",
	'lang1Player': "Speler",
	'lang1Action': "Actie",
	'lang1User': "Gebruikersnaam",
	'lang1Password': "Wachtwoord",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "Over",
	'langLogout': "Utloggen",
	'langChooseLanguage': "Kies een taal",
	'langTranslate': "Vertaalt naar uw taal",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "Nieuwe versie verkrijgbaar",
	'langVersionAvailable': "MilkAdmin v_VER_ is beschikbaar", // milkAdmin v1.0 is available
	'langUpdateNow': "Wil je nu updaten?",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "Over MilkAdmin",
	'langDesign': "Ontwerp en Programmering:",
	'langUpdates': "Update",
	'langThanks': "Met Dank aan:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Ban opties",
	'langKickPlayer': "Kick Speler",
	'langBanPlayerName': "Ban Speler Naam",
	'langBanIPAddress': "Ban IP Adres",
	'langCause': "Oorzaak/omdat",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "Server herstarten",
	'langReloadServer': "Server herladen",
	'langBackupStart': "Start Back-up",
	'langSaveMap': "Wereld saven",
	'langStopServer': "Server stoppen",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "Server",
	'langConsoleSM': "Console",
	'langPluginsSM': "Plugins",
	'langBackupsSM': "Backups",
	'langPlayersSM': "Spelers",
	'langBanListSM': "Zwartelijst",
	'langWhitelistSM': "Witlijst",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "Laatste Herstart",
	'langAmountPlayersOnline': "Nummers van de players online",
	'langFreeMemory': "Beschikbaar geheugen",
	'langUsedMemory': "Gebruikt Geheugen",
	'langTotalMemory': "Totaal Geheugen",
	'langMaxMemory': "Maximaal Geheugen",
	'langTitleMemory': "Geheugen Gegevens- <b>Beschikbare Geheugen</b>: laat de overige beschikbare geheugen zien die over is voor de Minecraft Server.<br><b>Gebruikte Geheugen</b>: Laat de gebruikte geheugen zien Minecraft Server.<br><b>Totaal Geheugen</b>: Laat de totaal geheugen van de server zien.<br><b>Maximale Geheugen</b>: Laat zien wat de maximale geheugen is wat de minecraft server kan gebruiken.",
	'langFreeSpace': "Beschikbare Ruimte",
	'langUsedSpace': "Gebruikte Ruimte",
	'langTotalSpace': "Totaal gebruikte ruimte",
	'langTitleSpace': "Schijf Data - Gebaseerd op de \"Backup Folder\" folder.",
	'langServerVersion': "Server Versie",
	'langCraftbukkitBuild': "CraftBukkit Versie",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "Server Informatie",
	'langBroadcastMessage': "Uitgezonden Bericht",
	'langTitleBroadcastMessage': "Uitgezonden Bericht - Verzonden naar alle spelers zonder tag",
	'langLevelName': "Standaard Level Name",
	'langTitleLevelName': "De waarde zal gebruikt worden als de werel naam en als de folder naam.<br> Je mag je opgeslagen werelden hier ook kopieren, verander die naam naar dezelfde naam als die folder om deze dan te laden. ",
	'langMCIPPORT': "Minecraft Server IP en Poort",
	'langTitleMCIPPORT': "<b>IP:</b> vul dit in als je je server met een speciaal ip wilt binden. Het wordt aangeraden om dit leeg te laten!<br><b>Poort:</b> Als je de poort veranderd zal hij over een andere poort je minecraft starten!.<br><b>Geldige variable:</b><ul><li><b>IP:</b> Leeg, of het ip waar je de server op wilt laten lopen.</li><li><b>Poort:</b> Een nummer tussen de <b>1-65535</b>. Normaal: <b>25565</b><ul><li>Zou boven de 20000 moeten liggen om problemen met andere programmas te voorkomen.</li></ul></li></ul>",
	'langMaxPlayers': "Maximale spelers",
	'langTitleMaxPlayers': "Het maximale aantal spelers dat op de server kunnen <br><i> Pas op, hoe meer mensen hoe meer resources de server gebruikt</i><br><i> Opmerking: admins gelden niet als spelers (en worden dus ook niet meegeteld bij het maximale aantal speelers) </i><br><b> Geldige variabelen:</b><ul><li> Een nummer tussen <b>0-255</b>.</li></ul>",
	'langViewDistance': "Bekijk afstand",
	'langTitleViewDistance': "De hoeveelheid wereld delen (chunks) die de server stuurt naar de speler <br> <b> </b><ul><li> <b> ( 3 - 15 ) normaal: </b> <b> 10 </b></li></ul>",
	'langHoldMessage': "Hou bericht",
	'langTitleHoldMessage': "Bericht dat MCSODRTK laatzien als de server op pause staat <br><i>vereist MinecraftRemoteToolkit</i>",
	'langAllowNether': "Laat mensen de Hell / nether in gaan",
	'langTitleAllowNether': "Activeer Nether <ul><li><b>Waar</b> = Spelers kunnen portalen naar de Nether maken </li><li><b>Niet waar</b> = Portalen zullen niet naar de nether gaan.</li></ul>",
	'langSpawnMonsters': "Spawn monsters",
	'langTitleSpawnMonsters': "Zet op waar als je wilt dat de monsters spawnen in de avond, zet op niet waar als je het niet wilt.<br> <i>Tip: als je veel lag heb zet dit dan op niet waar</i><ul><li><b>waar</b> =monsters komen in de avond en in het donker.</li><b>niet waar</b> = geen monsters</li></ul>",
	'langSpawnAnimals': "Spawn Dieren",
	'langTitleSpawnAnimals': "Dieren kunnen spawnen <ul><li><b>waar</b> = Dieren spawnen normaal.</li><li><b>niet waar</b> = Dieren verdwijnen gelijk.</li></ul>",
	'langOnlineMode': "Online modus",
	'langTitleOnlineMode': "Server checks connecting players against minecraft\'s account database.<br>Only set this to false if your server is not connected to the Internet.<ul><li><b>true</b> = The server will assume it has an Internet connection and check in minecraft.net every connecting player.</li><li><b>false</b> = The server will not attempt to check connecting players.</li></ul>",
	'langPVP': "Speler vs Speler (SvS)",
	'langTitlePVP': "Enable Player vs Player on the server.<br><i>Note: Hitting a player while having PvP set to false and having tamed wolfs will still cause the wolfs<br>attacking the attacked player.</i><ul><li><b>true</b> = Players will be able to kill each other.</li><li><b>false</b> = Players cannot kill other players.</li></ul>",
	'langAllowFlight': "Vlucht Toestaan",
	'langTitleAllowFlight': "Will allow users to use flight/no-clip on your server, if they have an mod that provides flight/no-clip installed.<ul><li><b>true</b> = Flight/no clip is allowed, and used if the player have a no-clip mod installed.</li><li><b>false</b> = Flight/no-clip is not allowed.</li></ul>",
	'langWhitelist': "Witlijst",
	'langTitleWhitelist': "Enable a white list on the server. With a white list enabled, users not on the white list will be unable to connect.<ul><li><b>true</b> = The file white-list.txt is used to generate the white list.</li><li><b>false</b> = No white list is used.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "Witlijst",
	'langWLAddPlayer': "Voeg speler toe",
	'langWLDeleteSelected': "Verwijder geslecteerde",
	'langWLSaveChanges': "Sla Verandering op",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "Zet plugin aan",
	'langEnable': "Zet aan",
	'langPluginName': "Plugin naam",
	'langVersion': "Versie",
	'langReloadTheList': "Herlaad de lijst",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "Kies je backup",
	'langRestoreBackup': "Zet Backup terug",
	'langDeleteBackup': "Verwijder Backup",
	'langBackupClear': "Verwijder vorige mappen voordat je een backup terug zet",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "Gebruikers managment",
	'langIP': "IP",
	'langPort': "Poort",
	'langKill': "Moord",
	'langKick': "Kick",
	'langBanName': "Ban",
	'langBanIP': "Ban IP",
	'langAmount': "Hoeveelheden of Keer",
	'langShootArrow': "Schiet pijl",
	'langShootFireball': "Schiet Vuurbal",
	'langThrowEgg': "Gooi ei",
	'langThrowSnowball': "Gooi een sneeuwbal",
	'langTeleportToPlayer': "Telepoort naar speler",
	'langTeleportToCoord': "Telepoort naar Coord",
	'langChangeName': "Verander Naam",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Ban IP adress of naam",
	'langClearFilter': "Maak Filte schoon",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "Registreer een nieuwe admin",
	'langCreateAdmin': "Kreeeer admin"
};

var jsIndex = {
	'sProcessing': "Verwerken",
	'sLengthMenu': "Laat Menu plugins zien", // Show 10 plugins
	'sZeroRecords': "Geen plugins gevonden",
	'sInfo': "Weergeven_START_->_EINDE_of_TOTAAL_plugins", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "Geen plugins beschikbaar",
	'sInfoFiltered': "(Filter van  _MAX_  plugins)", // (filter of 17 plugins)
	'sSearch': "Zoek Plugin",
	'sFirst': "Eerst",
	'sPrevious': "Vorige",
	'sNext': "Volgende",
	'sLast': "Laatste",
	'ReloadServer': "Server opnieuw aan het herladen",
	'RestartServer': "Server aan het herstarten",
	'StopServer': "Server aan het Stoppen",
	'EnablePlugin': "Plugin Geactiveerd!",
	'StartBackup': "Maakt Backup",
	'RTKNeeded': "Je hebt de \"RemoteToolkit \" nodig om dit te kunnen doen!",
	'NoUsersOnline': "Geen spelers online",
	'NoBackups': "Er is geen backup",
	'activate': "Geactiveerd",
	'deactivate': "Deactiveerd",
	'unban': "Unbannen",
	'MustLogin': "Je moet ingelogd zijn!",
	'UnknownError': "Er is iets fout gegaan! probeer opniew!",
	'NotResponse': "De server reageert niet! probeer opnieuw!",
	'InvalidIP': "Ongeldige IP Adres",
	'UpdateNow': "Update Nu",
	'later': "Later"
};

var jsAjax = {
	'accountcreated': "Account Gemaakt!",
	'worldsaved': "Wereld Opgeslagen!",
	'messagesent': "Bericht Verzonden",
	'broadcastedmessage': "Uitgezonden Bericht",
	'forcestop': "Snelle Stop",
	'plugindisabled': "_NAAM_\'s plugin uitgezet", // PluginX's plugin disabled.
	'pluginenabled': "_NAAM_\'s plugin geactiveerd", // PluginX's plugin enabled.
	'editedproperty': "Bewerk Goed",
	'worldbackedup': "Back-up Wereld",
	'deletebackup': "Back-up Verwijderd",
	'kickplayer': "_NAAM_ is van de server verstoten", // Sharkiller kicked from the server
	'itemsgiven': "_NAME_ is gegeven _amount_ getal of _item_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "_NAME_verwijderde_AMOUNT_keer_ITEM_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ is vermoord", // Sharkiller killed
	'healthchanged': "_NAME_\'s hp is veranderd naar _AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_ is gebanned!", // Sharkiller was banned!
	'playerunbanned': "_NAME_ is geunbanned!", // Sharkiller was unbanned!
	'ipbanned': "_IP_ is verbannen", // 19.64.84.24 was banned!
	'ipunbanned': "_IP_ is ongebannen", // 19.64.84.24 was unbanned!
	'arrowshooted': "Boog schot", 
	'fireballshooted': "Vuurbal Geschoten", 
	'throwsnowball': "Sneeuwball gegooit",
	'throwegg': "Ei gooien",
	'changename': "_OLD_\'s naam veranderd naar _NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "Speler is getransporteerd ",
	'langchanged': "Taal veranderd! Herladen Pagina ",
	'wlloaded': "Toegangslijst geladen",
	'wladded': "Toegevoegt aan de Whitelist",
	'wlsaved': "Whitelist Is sucsessvol opgeslagen",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "Verkeerde Parameters",
	'messageempty': "Lege Bericht",
	'wladdfail': "Het is mislukt om de persoon toe tevoegen aan de spelers lijst",
	'wlsavefail': "Het opslaan van de spelers lijst is misluk! probeer opnieuw !",
	'playernotconnected': "Speler is niet verbonden",
	'playernotbanned': "Speler is niet verbannen",
	'ipnotbanned': "IP is niet verbannen",
	'langnotfound': "Taal niet gevonden!"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "Login in milkAdmin",
	'langUsername': "Gebruikersnaam",
	'langPassword': "Wachtwoord",
	'langLogin': "Login"
};

var jsLogin = {
	'welcome': "Welkom! Pagina aan het Laden...",
	'UnknownError': "Er is iets fout gegaan! probeer opniew!",
	'NotResponse': "De server reageert niet! probeer opnieuw!",
	'invalidlogin': "Ongeldige Gebruikersnaam of Password!"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "Maak een Account",
	'langUsername': "Gebruikersnaam",
	'langPassword': "Wachtwoord",
	'langCreateAccount': "Maak account"
};

var jsRegister = {
	'created': "Account Gemaakt! Pagina Laden",
	'notadmin': "Je kan niet \"admin\" als gebruikersnaam gebruiken",
	'baduser': "A.U.B voer een geldige gebruikersnaam en password in",
	'UnknownError': "Er is iets fout gegaan! probeer opniew!",
	'NotResponse': "De server reageert niet! probeer opnieuw!",
	'error': "Ongeldige Gebruikersnaam en/of Password"
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "Start de Server"
};

///////////////////////////////////////////////
//
//   Language for wait.html
//
///////////////////////////////////////////////

var langWait = {
	'langPleaseWait20Seconds': "A.U.B Wacht 20 Seconden"
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "Aan het backuppen"
};

var jsBackup = {
	'Complete': "Backuppen Compleet! Server aan het Starten",
	'UnknownError': "Er is iets fout gegaan! probeer opniew!",
	'NotResponse': "De server reageert niet! probeer opnieuw!"
};