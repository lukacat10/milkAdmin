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
	'lang1Add': "Lägg till",
	'lang1Cancel': "Avbryt",
	'lang1Send': "Skicka",
	'lang1Change': "Ändra",
	'lang1On': "På",
	'lang1Off': "Av",
	'lang1ReloadList': "Ladda om listan",
	'lang1IPAddress': "IP-adress",
	'lang1Player': "Spelare",
	'lang1Action': "Åtgärd",
	'lang1User': "Användarnamn",
	'lang1Password': "Lösenord",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "Om...",
	'langLogout': "Logga ut",
	'langChooseLanguage': "Välj språk",
	'langTranslate': "Översätt till ditt språk",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "Ny version tillgänglig",
	'langVersionAvailable': "milkAdmin v_VER_ är tillgänglig", // milkAdmin v1.0 is available
	'langUpdateNow': "Vill du uppdatera nu?",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "Om milkAdmin",
	'langDesign': "Design och Programmering:",
	'langUpdates': "Uppdateringar:",
	'langThanks': "Tack till:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Bannlysningsalternativ",
	'langKickPlayer': "Sparka ut spelare",
	'langBanPlayerName': "Bannlys spelarnamn",
	'langBanIPAddress': "Bannlys IP-adress",
	'langCause': "Anledning",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "Starta om servern",
	'langReloadServer': "Ladda om servern",
	'langBackupStart': "Starta Säkerhetskopiering",
	'langSaveMap': "Spara värld",
	'langStopServer': "Stoppa servern",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "Server",
	'langConsoleSM': "Konsol",
	'langPluginsSM': "Plugins",
	'langBackupsSM': "Säkerhetskopior",
	'langPlayersSM': "Spelare",
	'langBanListSM': "Bannlista",
	'langWhitelistSM': "Vitlista",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "Senaste omstart",
	'langAmountPlayersOnline': "Antalet inloggade spelare",
	'langFreeMemory': "Fritt minne",
	'langUsedMemory': "Använt minne",
	'langTotalMemory': "Totalt minne",
	'langMaxMemory': "Maximalt minne",
	'langTitleMemory': "Minnesinformation - <b>Fritt minne</b>: Visar hur mycket fritt minne servern har.<br><b>Använt minne</b>: Visar hur mycket minne servern använder.<br><b>Totalt minne</b>: Visar hur mycket minne servern använder just nu.<br><b>Maximalt minne</b>: Visar hur mycket minne servern kommer att använda som mest.",
	'langFreeSpace': "Fritt utrymme",
	'langUsedSpace': "Använt utrymme",
	'langTotalSpace': "Totalt utrymme",
	'langTitleSpace': "Utrymmesinformation - Baserat på &quot;mappen för säkerhetskopian&quot;.",
	'langServerVersion': "Serverversion",
	'langCraftbukkitBuild': "Craftbukkit-bygge",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "Serverinformation",
	'langBroadcastMessage': "Skicka allmänt meddelande",
	'langTitleBroadcastMessage': "Skicka allmänt meddelande - Skickar ett meddelande till alla spelare, utan namntagg.",
	'langLevelName': "Huvudnivåns namn",
	'langTitleLevelName': "Värdet kommer att användas som världsnamn och mappnamn.<br>Du kan även kopiera ditt sparade spel hit och ändra namnet till samma som mappens för att ladda det istället.",
	'langMCIPPORT': "IP-adress och port för servern",
	'langTitleMCIPPORT': "<b>IP:</b> Ändra detta värde om du vill att servern ska använda en bestämd IP-adress. Det är starkt rekommenderat att lämna värdet tomt!<br><b>Port:</b> Ändrar porten som servern ska använda. Porten måste vara vidarebefodrad om servern är bakom en router.<br><b>Giltiga värden:</b><ul><li><b>IP:</b> Tom eller IP-adressen som din server använder.</li><li><b>Port:</b> Ett nummer mellan <b>1-65535</b>. Standard: <b>25565</b><ul><li>Bör vara högre än 20000 för att undvika konflikter med systemreserverade portar.</li></ul></li></ul>",
	'langMaxPlayers': "Max antal spelare",
	'langTitleMaxPlayers': "Det högsta antalet spelare som kan spela på servern samtidigt.<br><i>Kom ihåg att ju fler spelare som spelar, desto mer resurskrävande blir servern.</i><br><i>Administratörer räknas inte med bland de högsta antalet spelare.</i><br><b>Giltiga värden:</b><ul><li>Ett nummer mellan <b>0-255</b>.</li></ul>",
	'langViewDistance': "Visningsavstånd",
	'langTitleViewDistance': "Antalet block som servern skickar till spelarna.<br><b>Giltiga värden:</b><ul><li>Ett nummer mellan <b>3-15</b>. Standard: <b>10</b></li></ul>",
	'langHoldMessage': "Vilomeddelande",
	'langTitleHoldMessage': "Meddelande som MCSODRTK kommer att visa när servern är i viloläge.<br><i>Behöver MinecraftRemoteToolkit</i>",
	'langAllowNether': "Tillåt Nether",
	'langTitleAllowNether': "Tillåter spelare att åka till Nether.<ul><li><b>true</b> = Servern kommer att tillåta portaler för att skicka spelare till Nether.</li><li><b>false</b> = Portaler kommer inte att skicka spelare till Nether.</li></ul>",
	'langSpawnMonsters': "Spawna Monster",
	'langTitleSpawnMonsters': "Ställer in om du vill ha monster eller inte.<br><i>Tips: Om du märker allmänt lagg, stäng av detta.</i><ul><li><b>true</b> = Monster kommer att framträda på natten och i mörker.</li><li><b>false</b> = Inga monster.</li></ul>",
	'langSpawnAnimals': "Spawna Djur",
	'langTitleSpawnAnimals': "Djur kommer att framträda.<ul><li><b>true</b> = Djur kommer att framträda som vanligt.</li><li><b>false</b> = Djur kommer genast att försvinna.</li></ul>",
	'langOnlineMode': "Online Läge (Verifiera Namn) ",
	'langTitleOnlineMode': "Servern kontrollerar anslutna spelare mot Minecrafts kontodatabas.<br>Använd bara false om din server inte är ansluten mot internet..<ul><li><b>true</b> =  Servern kommer att kontrollera alla anslutna spelare mot Minecrafts kontodatabas.</li><li><b>false</b> = Servern kommer inte att kontrollera anslutna spelare.</li></ul>",
	'langPVP': "Spelare mot spelare (PvP)",
	'langTitlePVP': "Aktivera spelare mot spelare på servern.<br><i>Om du slår på en spelare när detta läge är inställt till false och du har tama vargar, kommer de fortfarande att attakera <br>den attakerande spelaren.</i><ul><li><b>true</b> = Spelare kommer att kunna döda varandra.</li><li><b>false</b> = Spelare kommer inte att kunna döda varandra.</li></ul>",
	'langAllowFlight': "Tillåt flygning",
	'langTitleAllowFlight': "Kommer att tillåta spelare att flyga på din server, om de har en flygmodifikation installerad.<ul><li><b>true</b> =Flygning är tillåtet och används om spelaren har en flygmodifikation installerad.</li><li><b>false</b> = Flygning är inte tillåten.</li></ul>",
	'langWhitelist': "Whitelist",
	'langTitleWhitelist': "Aktivera en vitlista på servern. Med en vitlista aktiverad måste spelare finnas med i listan för att kunna ansluta.<ul><li><b>true</b> = Filen white-list.txt används för att generera vitlistan.</li><li><b>false</b> = Ingen vilista kommer att användas.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "Vitlista",
	'langWLAddPlayer': "Lägg till spelare",
	'langWLDeleteSelected': "Ta bort valda",
	'langWLSaveChanges': "Spara ändringar",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "Aktivera Plugin",
	'langEnable': "Aktivera",
	'langPluginName': "Plugin Namn",
	'langVersion': "Version",
	'langReloadTheList': "Ladda om listan",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "Välj Säkerhetskopia",
	'langRestoreBackup': "Återställ säkerhetskopia",
	'langDeleteBackup': "Ta bort säkerhetskopia",
	'langBackupClear': "Ta bort tidigare mappar innan du återställer säkerhetskopian",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "Användarhantering",
	'langIP': "IP-adress",
	'langPort': "Port",
	'langKill': "Döda",
	'langKick': "Kicka",
	'langBanName': "Banna",
	'langBanIP': "Banna IP",
	'langAmount': "Gånger",
	'langShootArrow': "Skjut pil",
	'langShootFireball': "Skjut Fireball",
	'langThrowEgg': "Kasta ägg",
	'langThrowSnowball': "Kasta snöboll",
	'langTeleportToPlayer': "Teleportera till spelare",
	'langTeleportToCoord': "Teleportera till Koordinat",
	'langChangeName': "Byt namn",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Banna IP Adress eller Namn",
	'langClearFilter': "Rensa filter",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "Registrera en ny Admin",
	'langCreateAdmin': "Skapa ny Admin"
};

var jsIndex = {
	'sProcessing': "Arbetar...",
	'sLengthMenu': "Visa _MENU_plugins", // Show 10 plugins
	'sZeroRecords': "Inga plugins funna.",
	'sInfo': "Visar _START_->_END_ of _TOTAL_ plugins", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "Inga plugins att visa",
	'sInfoFiltered': "(filter av _MAX_plugins)", // (filter of 17 plugins)
	'sSearch': "Sök Plugin:",
	'sFirst': "Första",
	'sPrevious': "Föregående",
	'sNext': "Nästa",
	'sLast': "Sista",
	'ReloadServer': "Laddarom servern",
	'RestartServer': "Startar om Servern",
	'StopServer': "Stannar Servern",
	'EnablePlugin': "Plugin aktiverad",
	'StartBackup': "Startar säkerhetskopiering!",
	'RTKNeeded': "Du behöver RemoteToolkit för att använda den här funktionen!",
	'NoUsersOnline': "Inga spelare online",
	'NoBackups': "Det finns inga säkerhetskopior!",
	'activate': "Aktivera",
	'deactivate': "Deaktivera",
	'unban': "Avbanna",
	'MustLogin': "Du måste logga in!",
	'UnknownError': "Okänt fel! Försök igen!",
	'NotResponse': "Servern svarar inte! Försök igen",
	'InvalidIP': "Ogiltig ip-address",
	'UpdateNow': "Uppdatera nu",
	'later': "Senare"
};

var jsAjax = {
	'accountcreated': "Konto skapat!",
	'worldsaved': "Värld sparad!",
	'messagesent': "Meddelande sänt",
	'broadcastedmessage': "Sänt meddelande",
	'forcestop': "Tvångs stäng",
	'plugindisabled': "_NAME_\'s plugin avaktiverat", // PluginX's plugin disabled.
	'pluginenabled': "_NAME_\'s plugin aktiverat", // PluginX's plugin enabled.
	'editedproperty': "Redigerade tillhörighet",
	'worldbackedup': "Säkerhetskopierade världen",
	'deletebackup': "Säkerhetskopia borttagen",
	'kickplayer': "_NAME_ sparkad från servern", // Sharkiller kicked from the server
	'itemsgiven': "_NAME_ har fått _AMOUNT_ _ITEM_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "_NAME_ tog bort _AMOUNT_ av _ITEM_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ dödad", // Sharkiller killed
	'healthchanged': "_NAME_\'s HP ändrat till _AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_ Blev bannad!", // Sharkiller was banned!
	'playerunbanned': "_NAME_ blev avbannad!", // Sharkiller was unbanned!
	'ipbanned': "_IP_ IP bannad!", // 19.64.84.24 was banned!
	'ipunbanned': "_IP_ avbannad", // 19.64.84.24 was unbanned!
	'arrowshooted': "Pil skjuten!", 
	'fireballshooted': "Eldboll skjuten", 
	'throwsnowball': "Snöboll kastad",
	'throwegg': "Ägg kastat!",
	'changename': "_OLD_\'s namn har ändrats till _NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "Spelare teleporterad",
	'langchanged': "Språk ändrat! Laddarom sidan...",
	'wlloaded': "Vitlista laddad!",
	'wladded': "Tillagd i vitlistan!",
	'wlsaved': "Vitlistan har sparats!",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "Felaktig parameter",
	'messageempty': "Tomt meddelande",
	'wladdfail': "Kunde inte lägga till spelare till vitlistan!",
	'wlsavefail': "Kunde inte spara vitlista! Försök igen!",
	'playernotconnected': "Spelare inte ansluten",
	'playernotbanned': "Spelare inte bannad",
	'ipnotbanned': "IP\'n är inte bannad",
	'langnotfound': "Språket hittades inte!"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "Logga in milkadmin",
	'langUsername': "Användarnamn",
	'langPassword': "Lösenord",
	'langLogin': "Logga in"
};

var jsLogin = {
	'welcome': "Välkommen! Laddar sida...",
	'UnknownError': "Okänt fel! Försök igen!",
	'NotResponse': "Servern svarar inte! Försök igen",
	'invalidlogin': "Fel Användarnamn eller lösenord"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "Skapa ett konto",
	'langUsername': "Användarnamn",
	'langPassword': "Lösenord",
	'langCreateAccount': "Skapa konto"
};

var jsRegister = {
	'created': "Konto skapat! Laddar sida...",
	'notadmin': "Du kan inte använda \"admin\" som användarnamn",
	'baduser': "Ange ett giltigt användarnamn och lösenord",
	'UnknownError': "Okänt fel! Försök igen!",
	'NotResponse': "Servern svarar inte! Försök igen",
	'error': "Fel Användarnamn eller lösenord"
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "Starta servern"
};

///////////////////////////////////////////////
//
//   Language for wait.html
//
///////////////////////////////////////////////

var langWait = {
	'langPleaseWait20Seconds': "Var snäll och vänta 20 sec"
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "Säkerhetskopierar"
};

var jsBackup = {
	'Complete': "Säkerhetskopiering färdig! Startar servern...",
	'UnknownError': "Okänt fel! Försök igen!",
	'NotResponse': "Servern svarar inte! Försök igen"
};