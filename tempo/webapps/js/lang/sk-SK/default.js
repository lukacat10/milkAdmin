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
	'lang1Yes': "Áno",
	'lang1No': "Nie",
	'lang1OK': "OK",
	'lang1Add': "Pridať",
	'lang1Cancel': "Zrušiť",
	'lang1Send': "Odoslať",
	'lang1Change': "Zmeniť",
	'lang1On': "Zap.",
	'lang1Off': "Vyp.",
	'lang1ReloadList': "Obnoviť zoznam",
	'lang1IPAddress': "IP Adresa",
	'lang1Player': "Hráč",
	'lang1Action': "Akcia",
	'lang1User': "Užívateľské meno",
	'lang1Password': "Heslo",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "O programe...",
	'langLogout': "Odhlásiť sa ",
	'langChooseLanguage': "Vybrať jazyk:",
	'langTranslate': "Prelož do svojho jazyka",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "Nová verzia k dispozícii",
	'langVersionAvailable': "milkAdmin v_VER_ is available", // milkAdmin v1.0 is available
	'langUpdateNow': "Chceš vykonať aktualizaciu okamžite?",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "O milkAdmin",
	'langDesign': "Návrh a programovanie:",
	'langUpdates': "Aktualizácie:",
	'langThanks': "Poďakovanie:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Nastavenia banu",
	'langKickPlayer': "Vykopnúť hráča",
	'langBanPlayerName': "Ban na užívateľské meno",
	'langBanIPAddress': "Ban na IP adresu",
	'langCause': "Dôvod",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "Reštartovať server",
	'langReloadServer': "Obnoviť server",
	'langBackupStart': "Zálohovať server",
	'langSaveMap': "Uložiť svet",
	'langStopServer': "Zastaviť server",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "Server",
	'langConsoleSM': "Konzola",
	'langPluginsSM': "Pluginy",
	'langBackupsSM': "Zálohovanie",
	'langPlayersSM': "Hráči",
	'langBanListSM': "Zoznam banov",
	'langWhitelistSM': "Biela listina",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "Posledný reštart",
	'langAmountPlayersOnline': "Počet pripojených hráčov",
	'langFreeMemory': "Voľná pamäť",
	'langUsedMemory': "Využitá pamäť",
	'langTotalMemory': "Dostupná pamäť",
	'langMaxMemory': "Maximálna pamäť",
	'langTitleMemory': "Údaje pamäte - <b>Voľná pamäť</b>: Zobrazuje množstvo voľnej pamäte na Minecraft serveri.<br><b>Využitá pamäť</b>: Zobrazuje množstvo využitej pamäte na Minecraft serveri.<br><b>Celková pamäť</b>: Zobrazuje množstvo celkovej pamäte, ktorú momentálne využíva Minecraft server.<br><b>Maximálna pamäť</b>: Zobrazuje maximálne množstvo pamäte, ktorú môže Minecraft server používať.",
	'langFreeSpace': "Voľné miesto",
	'langUsedSpace': "Využité miesto",
	'langTotalSpace': "Celkové miesto",
	'langTitleSpace': "Údaje priestoru - Na základe &quot;Zálohovacieho&quot; adresára.",
	'langServerVersion': "Verzia servera",
	'langCraftbukkitBuild': "Build (verzia) Craftbukkitu",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "Informácie o serveri",
	'langBroadcastMessage': "Vysielacia správa",
	'langTitleBroadcastMessage': "Vysielacia správa - Pošle správu všetkým hráčom bez tagov.",
	'langLevelName': "Meno hlavného sveta",
	'langTitleLevelName': "Táto hodnota bude použitá ako meno sveta a názov adresára.<br>Môžeš tiež skopírovať adresár s uloženou hrou a zmeniť názov s názvom adresára/ov pre jej načítanie.",
	'langMCIPPORT': "IP a Port Minercaft servera",
	'langTitleMCIPPORT': "<b>IP:</b> Nastav, ak chceš aby sa server naviazal na konkrétnu IP. Dôrazne sa odporúča, ponechať IP servera prázdnu!<br><b>Port:</b> Zmena portu servera na ktorom hostuje. Tento port musí byť zaslaný, ak server prechádza cez router.<br><b>Platné hodnoty:</b><ul><li><b>IP:</b> Prázdna, alebo IP na ktorej chceš, aby bežal server.</li><li><b>Port:</b> Hodnota od <b>1-65535</b>. Pôvodne: <b>25565</b><ul><li>Hodnota by mala byť väčšia ako 20000, aby sa predišlo konfliktom s portami vyhradenými systémom.</li></ul></li></ul>",
	'langMaxPlayers': "Maximálny počet hráčov",
	'langTitleMaxPlayers': "Maximálny počet hráčov, ktorí môžu súčasne hrať na serveri.<br><i>Všimni si, že čím viac bude hráčov na serveri, tým sa bude používať viac zdrojov.</i><br><i>Poznamenaj si tiež, že pripojenie administrátora sa nezapočíta k počtu hráčov.</i><br><b>Platné hodnoty:</b><ul><li>Číslo medzi <b>0-255</b>.</li></ul>",
	'langViewDistance': "Zobrazovacia vzdialenosť",
	'langTitleViewDistance': "Počet kúskov, koľko posiela server hráčovi.<br><b>Platné hodnoty:</b><ul><li>Číslo medzi <b>3-15</b>. Pôvodne: <b>10</b></li></ul>",
	'langHoldMessage': "Podržaná správa",
	'langTitleHoldMessage': "Správa MCSODRTK sa zobrazí, keď bude server podržaný.<br><i>Je potrebný MinecraftRemoteToolkit</i>",
	'langAllowNether': "Povoliť peklo",
	'langTitleAllowNether': "Povoli hráčom cestovať do pekla.<ul><li><b>true</b> = Server povoli portáli, ktorými sa hráči dostanú do pekla.</li><li><b>false</b> = Portáli nebudú prenášať hráčov do pekla.</li></ul>",
	'langSpawnMonsters': "Povoliť obludy",
	'langTitleSpawnMonsters': "Nastav \\'true\\', ak chceš, aby sa v noci objavovali obludy alebo \\'false\\', ak ich nechceš.<br><i>Tip: ak máš veľké lagy, vypni túto funkciu.</i><ul><li><b>true</b> = Obludy sa budú objavovať v noci a v temných priestoroch.</li><li><b>false</b> = Žiadne obludy.</li></ul>",
	'langSpawnAnimals': "Povoliť zvieratá",
	'langTitleSpawnAnimals': "Objavovanie zvierat.<ul><li><b>true</b> = Zvieratá sa budú normálne objavovať.</li><li><b>false</b> = Zvieratá okamžite zmiznú.</li></ul>",
	'langOnlineMode': "Online režim (Overenie mena)",
	'langTitleOnlineMode': "Server skontroluje pripojenie hráčov s databázou minecraft účtov.<br>Ak server nie je pripojený na internet, nastav \\'false\\'.<ul><li><b>true</b> = Server bude kontrolovať každého hráča cez minecraft.net.</li><li><b>false</b> = Server nebude kontrolovať pripojenie každého hráča.</li></ul>",
	'langPVP': "Hráč proti hráčovi (PVP)",
	'langTitlePVP': "Povoliť hráč proti hráčovi na serveri.<br><i>Poznámka: Pokiaľ niekto zaútočí na hráča a PVP bude na hodnote \\'false\\', a daný hráč bude mať skroteného vlka,<br> vlci budú útočiť na útočiaceho hráča.</i><ul><li><b>true</b> = Hráči sa budú môcť navzájom zabíjať.</li><li><b>false</b> = Hráči nemôžu zabiť iného hráča.</li></ul>",
	'langAllowFlight': "Povoliť lietanie",
	'langTitleAllowFlight': "Povoli hráčom používať lietanie na serveri, ak majú príslušný mod, ktorý to lietanie umožňuje.<ul><li><b>true</b> = Lietanie je povolené.</li><li><b>false</b> = Lietanie je zablokované.</li></ul>",
	'langWhitelist': "Biela listina",
	'langTitleWhitelist': "Povoliť bielu listinu na serveri. Ak bude biela listina zapnutá, hráči, ktorí nie sú na zozname sa nebudú môcť pripojiť na server.<ul><li><b>true</b> = Súbor white-list.txt je použitý pre generovanie bielej listiny.</li><li><b>false</b> = Žiadna biela listina sa nebude používať.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "Biela listina",
	'langWLAddPlayer': "Pridať hráča",
	'langWLDeleteSelected': "Zmazať vybrané",
	'langWLSaveChanges': "Uložiť zmeny",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "Povoliť plugin",
	'langEnable': "Povoliť",
	'langPluginName': "Meno pluginu",
	'langVersion': "Verzia",
	'langReloadTheList': "Je nutné obnoviť zoznam",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "Vyber zálohu",
	'langRestoreBackup': "Obnoviť zálohu",
	'langDeleteBackup': "Zmazať zálohu",
	'langBackupClear': "Zmazať predchádzajúce adresáre pred vykonaním zálohy",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "Spravovanie užívateľov",
	'langIP': "IP Adresa",
	'langPort': "Port",
	'langKill': "Zabiť",
	'langKick': "Vykopnúť",
	'langBanName': "Ban",
	'langBanIP': "Ban na IP adresu",
	'langAmount': "Počet",
	'langShootArrow': "Vystreliť šíp",
	'langShootFireball': "Streliť ohnivú guľu",
	'langThrowEgg': "Hodiť vajce",
	'langThrowSnowball': "Hodiť snehovú guľu",
	'langTeleportToPlayer': "Teleportovať ku hráčovi",
	'langTeleportToCoord': "Teleportovať na súradnice",
	'langChangeName': "Zmeniť meno",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Ban na IP adresu alebo meno",
	'langClearFilter': "Vymazať filter",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "Registrácia nového administrátora",
	'langCreateAdmin': "Vytvoriť administrátora"
};

var jsIndex = {
	'sProcessing': "Spracovávam...",
	'sLengthMenu': "Ukázať _MENU_ pluginov", // Show 10 plugins
	'sZeroRecords': "Plugin nebol nájdený.",
	'sInfo': "Zobrazuje sa _START_->_END_ z _TOTAL_ pluginov", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "Žiadny plugin na zobrazenie",
	'sInfoFiltered': "(filter z _MAX_ pluginov)", // (filter of 17 plugins)
	'sSearch': "Nájsť plugin",
	'sFirst': "Prvá",
	'sPrevious': "Predošla",
	'sNext': "Ďalšia",
	'sLast': "Posledná",
	'ReloadServer': "Obnovovanie servera!",
	'RestartServer': "Reštartovanie servera!",
	'StopServer': "Zastavovanie servera!",
	'EnablePlugin': "Plugin povolený!",
	'StartBackup': "Začína zálohovanie!",
	'RTKNeeded': "Potrebuješ RemoteToolkit pre použitie tejto funkcie!",
	'NoUsersOnline': "Nie sú žiadní pripojení hráči",
	'NoBackups': "Nie sú žiadne zálohy!",
	'activate': "Aktivovať",
	'deactivate': "Deaktivovať",
	'unban': "Zrušiť ban",
	'MustLogin': "Musíš sa prihlásiť!",
	'UnknownError': "Neznáma chyba! Skús to znovu!",
	'NotResponse': "Server neodpovedá! Skús to znovu!",
	'InvalidIP': "Nesprávna IP adresa.",
	'UpdateNow': "Aktualizovať okamžite",
	'later': "Neskôr"
};

var jsAjax = {
	'accountcreated': "Účet bol vytvorený!",
	'worldsaved': "Svet bol uložený!",
	'messagesent': "Správa bola odoslaná",
	'broadcastedmessage': "Vysielacia správa",
	'forcestop': "Vynútiť ukončenie",
	'plugindisabled': "_NAME_ zakázal plugin", // PluginX's plugin disabled.
	'pluginenabled': "_NAME_ povolil plugin", // PluginX's plugin enabled.
	'editedproperty': "Položka zmenená",
	'worldbackedup': "Zálohovanie sveta",
	'deletebackup': "Záloha odstránená",
	'kickplayer': "_NAME_ bol vykopnutý z tohto servera", // Sharkiller kicked from the server
	'itemsgiven': "_NAME_ dostal _AMOUNT_ kusov _ITEM_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "Hráčovi \\'_NAME_\\' bolo odobrané _AMOUNT_ kusov _ITEM_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ bol zabitý", // Sharkiller killed
	'healthchanged': "Životy hráča \\'_NAME_\\' boli zmenené na _AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_ dostal ban!", // Sharkiller was banned!
	'playerunbanned': "Hráčovi \\'_NAME_\\' bol zrušený ban!", // Sharkiller was unbanned!
	'ipbanned': "IP adresa \\'_IP_\\' bola zabanovaná! ", // 19.64.84.24 was banned!
	'ipunbanned': "IP adresa \\'_IP_\\' bola odbanovaná! ", // 19.64.84.24 was unbanned!
	'arrowshooted': "Šíp bol vystrelený!", 
	'fireballshooted': "Ohnivá guľa bola vystrelená!", 
	'throwsnowball': "Snehová guľa bola hodená!",
	'throwegg': "Vajce bolo hodené!",
	'changename': "Meno hráča _OLD_ bolo zmenené na _NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "Hráč bol teleportovaný",
	'langchanged': "Jazyk bol zmenený! Nahráva sa stránka...",
	'wlloaded': "Biela listina načítaná!",
	'wladded': "Pridaný do bielej listiny!",
	'wlsaved': "Biela listina bola uložená!",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "Nesprávne parametre",
	'messageempty': "Prázdna správa",
	'wladdfail': "Zlyhalo pridávanie hráča do bielej listiny!",
	'wlsavefail': "Zlyhalo ukladanie bielej listiny! Skús to znovu!",
	'playernotconnected': "Hráč nie je pripojený",
	'playernotbanned': "Hráč nie je zabanovaný",
	'ipnotbanned': "IP adresa nie je zabanovaná",
	'langnotfound': "Jazyk nebol nájdený!"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "Prihlásiť sa na milkAdmin",
	'langUsername': "Užívateľské meno",
	'langPassword': "Heslo",
	'langLogin': "Prihlásiť sa"
};

var jsLogin = {
	'welcome': "Vitaj! Nahráva sa stránka...",
	'UnknownError': "Neznáma chyba! Skús to znovu!",
	'NotResponse': "Server neodpovedá! Skús to znovu!",
	'invalidlogin': "Nesprávne užívateľské meno alebo heslo"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "Vytvoriť účet",
	'langUsername': "Užívateľské meno",
	'langPassword': "Heslo",
	'langCreateAccount': "Vytvoriť účet"
};

var jsRegister = {
	'created': "Účet bol vytvorený! Nahráva sa stránka...",
	'notadmin': "Nemôžeš použiť \\"admin\\", ako užívateľské meno",
	'baduser': "Zadaj prosím správne užívateľské meno a heslo",
	'UnknownError': "Neznáma chyba! Skús to znovu!",
	'NotResponse': "Server neodpovedá! Skús to znovu!",
	'error': "Neplatné užívateľské meno a heslo!"
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "Spustiť server"
};

///////////////////////////////////////////////
//
//   Language for wait.html
//
///////////////////////////////////////////////

var langWait = {
	'langPleaseWait20Seconds': "Počkaj prosím 20 sekúnd"
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "Zálohovanie"
};

var jsBackup = {
	'Complete': "Zálohovanie dokončené! Štartuje sa server...",
	'UnknownError': "Neznáma chyba! Skús to znovu!",
	'NotResponse': "Server neodpovedá! Skús to znovu!"
};