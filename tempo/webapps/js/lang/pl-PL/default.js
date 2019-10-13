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
	'lang1Yes': "Tak",
	'lang1No': "Nie",
	'lang1OK': "OK",
	'lang1Add': "Dodaj",
	'lang1Cancel': "Anuluj",
	'lang1Send': "Wyślij",
	'lang1Change': "Zmień",
	'lang1On': "Włącz",
	'lang1Off': "Wyłącz",
	'lang1ReloadList': "Przeładuj liste",
	'lang1IPAddress': "Adres IP",
	'lang1Player': "Gracz",
	'lang1Action': "Akcja",
	'lang1User': "Nazwa użytkownika",
	'lang1Password': "Hasło",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "O wtyczce...",
	'langLogout': "Wyloguj",
	'langChooseLanguage': "Wybierz język:",
	'langTranslate': "Przetłumacz na swój język",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "Nowa wersja jest dostępna!",
	'langVersionAvailable': "milkAdmin v_VER_ jest dostępny", // milkAdmin v1.0 is available
	'langUpdateNow': "Czy chcesz aktualizować teraz??",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "O milkAdmin",
	'langDesign': "Design i Programowanie:",
	'langUpdates': "Aktualizacja:",
	'langThanks': "Podziękowania dla:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Opcje blokowania",
	'langKickPlayer': "Wyrzuć gracza",
	'langBanPlayerName': "Zablokuj gracza",
	'langBanIPAddress': "Zablokuj adres IP",
	'langCause': "Powód",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "Zrestartuj serwer",
	'langReloadServer': "Przeładuj serwer",
	'langBackupStart': "Uruchom Backup",
	'langSaveMap': "Zapisz świat",
	'langStopServer': "Zatrzymaj serwer",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "Serwer",
	'langConsoleSM': "Konsola",
	'langPluginsSM': "Wtyczki",
	'langBackupsSM': "Kopie zapasowe",
	'langPlayersSM': "Gracze",
	'langBanListSM': "Lista banów",
	'langWhitelistSM': "Whitelista",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "Ostatni restart",
	'langAmountPlayersOnline': "Liczba graczy Online",
	'langFreeMemory': "Wolna pamięć",
	'langUsedMemory': "Używana pamięć",
	'langTotalMemory': "Ilość pamięci",
	'langMaxMemory': "Maksymalna ilość pamięci",
	'langTitleMemory': "RAM info - <b>Wolna Pamięć</b>: Wyświetla ilość wolnej pamięci dla serwera.<br><b>Używana Pamięć</b>: Wyświetla ilość używanej pamięci przez Serwer.<br><b>Całkowita pamięć</b>: Wyświetla całkowita ilość pamięci uzywanej teraz przez serwer.<br><b>Maksymalna pamięć</b>: Wyświetla maksymalną ilość pamięci jaką może wykorzystywać serwer.",
	'langFreeSpace': "Wolne miejsce",
	'langUsedSpace': "Używane miejsce",
	'langTotalSpace': "Miejsce całkowite",
	'langTitleSpace': "Przestrzeń dyskowa - Bazuje na &quotfolderze kopii zapasowych&quot",
	'langServerVersion': "Wersja serwera",
	'langCraftbukkitBuild': "Craftbukkit Build",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "Informacje o Serwerze",
	'langBroadcastMessage': "Wyślij wiadomość",
	'langTitleBroadcastMessage': "Rozgłoś wiadomość - Wyślij wiadomość do wszystkich graczy bez znacznika.",
	'langLevelName': "Nazwa głównego świata",
	'langTitleLevelName': "Ta wartość jest używana jako nazwa świata oraz folderu.<br>Możesz równiesz skopiować tutaj folder z swoją mapą oraz zmienić jego nazwę na podaną tutaj aby załadować go zamiast tamtej.",
	'langMCIPPORT': "Adres IP i port serwera Minecraft",
	'langTitleMCIPPORT': "<b>IP:</b>Ustaw tą opcję aby przypisać serwer do konkretnego IP. Wysoko zalecane jest pozostawienie tej opcji pustej!<br><b>Port</b>Zmienia port przypisany do serwera. Port musi być przekierowany, jeśli serwer jest za routerem.<br><b>Prawidłowe wartośći:</b><ul><li><b>IP:</b> Puste, lub IP do którego chcesz przypisać serwer.</li><li><b>Port:</b> Liczba pomiędzy <b>1-65535</b>. Domyślnie: <b>25565</b><ul><li>Port powinien być wyższy niż 20000 aby uniknąć konfliktu z portami zarezerwowanymi przez system inne aplikacje.</li></ul></li></ul>",
	'langMaxPlayers': "Maksymalna ilość graczy.",
	'langTitleMaxPlayers': "Maksymalna ilość graczy, która może jednocześnie przebywać na serwerze.<br><i>Pamiętaj, że większa ilośc graczy oznacza większe użycie zasobów.</i><br><i>Pamiętaj również, że połączenia administratorów nie wliczają się do tej liczby</i><br><b>Prawidłowe wartości:</b><ul><li>Liczba pomiędzy <b>0-255</b>.</li></ul>",
	'langViewDistance': "Zasięg widzenia",
	'langTitleViewDistance': "Ilość chunków wysyłanych do graczy.<br><b>Poprawne wartości:</b><ul><li>Liczba pomiędzy <b>3-15</b>. Domyślnie: <b>10</b></li></ul>",
	'langHoldMessage': "Hold Message",
	'langTitleHoldMessage': "Wiadomość która MCSODRTK wyświetli kiedy serwer jest wstrzymany.<br><i>Wymaga MinecraftRemoteToolkit</i>",
	'langAllowNether': "Zezwól na Nether",
	'langTitleAllowNether': "Pozwala graczom na podróżowanie do Netheru.<ul><li><b>true</b> = Serwer pozwala tworzyć portale, oraz teleportuje graczy do Netheru.</li><li><b>false</b> = Portale nie teleportują do netheru.</li></ul>",
	'langSpawnMonsters': "Pojawianie się potworów",
	'langTitleSpawnMonsters': "Ustaw \"true\" jeśli chcesz aby potwory spawnowały się w nocy, ustaw \"false\" jeśli nie chcesz<br><i>Porada: Jeśli twój serwer ma opóźnienia (lag) wyłącz spawnowanie się potworów .</i><ul><li><b>true</b> = Potwory będą się pojawiały w nocy oraz w ciemnych miejscach.</li><li><b>false</b> = Brak potworów.</li></ul>",
	'langSpawnAnimals': "Pojawianie się zwierząt",
	'langTitleSpawnAnimals': "Pojawianie się zwierząt.<ul><li><b>true</b> = Zwierzęta pojawiają się normalnie.</li><li><b>false</b> = Zwierzęta będa natychmiastowo znikały.</li></ul>",
	'langOnlineMode': "Tryb Online",
	'langTitleOnlineMode': "Serwer będzie sprawdzał konto na minecraft.net.<br>Ustawiaj na \"false\" tylko jeśli Twój serwer nie jest podłączony do internetu.<ul><li><b>true</b> = Serwer będzie sprawdzał na minecraft.net legalność konta.</li><li><b>false</b> = Serwer nie będzie sprawdzał podłączających się graczy.</li></ul>",
	'langPVP': "Gracz vs Gracz (PVP)",
	'langTitlePVP': "Włącza walki Gracz vs. Gracz na serwerze<br><i>Informacja: Kiedy zaatakowanie gracza nastąpi gdy PvP jest wyłączone a gracz ma oswojonego wilka to spowoduje, że wilki<br>odpowiedzą na atak.</i><ul><li><b>true</b> = Gracze mogą zabijać się nawzajem.</li><li><b>false</b> = Gracze nie mogą zabijać innych graczy.</li></ul>",
	'langAllowFlight': "Zezwól na latanie",
	'langTitleAllowFlight': "Pozwala graczon na latanie i/lub przenikanie przez ściany, jeśli masz mod pozwalający na to.<ul><li><b>true</b> = Lataniei /lub przenikanie przez ściany jest dozwolone, i uzywane jeśli gracz ma wgranego moda na to.</li><li><b>false</b> = Latanie/przenikanie przez ściany jest niedozwolone.</li></ul>",
	'langWhitelist': "Whitelista",
	'langTitleWhitelist': "Włącza białą listę na serwerze. Z białą listą, serwer nie wpuści graczy, którzy nie są na nią wpisani.<ul><li><b>true</b> = Plik white-list.txt jest używany do generowania listy.</li><li><b>false</b> = Lista nie jest uzywana.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "Whitelista",
	'langWLAddPlayer': "Dodaj gracza",
	'langWLDeleteSelected': "Skasuj zaznaczone",
	'langWLSaveChanges': "Zapisz zmiany",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "Włącz wtyczke",
	'langEnable': "Aktywuj",
	'langPluginName': "Nazwa wtyczki",
	'langVersion': "Wersja",
	'langReloadTheList': "Przeładuj listę",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "Wybierz kopie zapasową",
	'langRestoreBackup': "Przywróć z kopii zapasowej",
	'langDeleteBackup': "Usuń kopie zapasową",
	'langBackupClear': "Usuń poprzedni folder zanim przywrócisz świat z kopii zapasowej.",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "Zarządzanie graczem",
	'langIP': "IP",
	'langPort': "Port",
	'langKill': "Zabij",
	'langKick': "Wyrzuć",
	'langBanName': "Zablokuj",
	'langBanIP': "Zablokuj IP",
	'langAmount': "Ilość czasów",
	'langShootArrow': "Strzel strzałą",
	'langShootFireball': "Strzelić  kula ognia ",
	'langThrowEgg': "Rzuć jajkiem",
	'langThrowSnowball': "Rzuć śnieżką",
	'langTeleportToPlayer': "Teleportuj do gracza",
	'langTeleportToCoord': "Teleportuj na wspołrzędne",
	'langChangeName': "Zmień nazwę",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Zablokuj adres IP lub gracza",
	'langClearFilter': "Wyczyść filtr",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "Zarejestruj nowego administratora",
	'langCreateAdmin': "Stwórz administratora"
};

var jsIndex = {
	'sProcessing': "Przetwarzanie...",
	'sLengthMenu': "Pokaż _MENU_ pluginów", // Show 10 plugins
	'sZeroRecords': "Nie znaleziono wtyczek.",
	'sInfo': "Pokazane _START_->_END_ z _TOTAL_ pluginów", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "Brak wtyczek do pokazania",
	'sInfoFiltered': "(filtrowane _MAX_ wtyczek)", // (filter of 17 plugins)
	'sSearch': "Szukaj wtyczki:",
	'sFirst': "Pierwsza",
	'sPrevious': "Poprzednia",
	'sNext': "Następna",
	'sLast': "Ostatnia",
	'ReloadServer': "Przeładowywanie serwera!",
	'RestartServer': "Restartowanie serwera!",
	'StopServer': "Zatrzymywanie serwera!",
	'EnablePlugin': "Aktywacja wtyczki!",
	'StartBackup': "Tworzenie kopii bezpieczeństwa rozpoczęte!",
	'RTKNeeded': "Potrzebujesz RemoteToolkit aby użyć tej funkcji!",
	'NoUsersOnline': "Nie ma aktywnych graczy",
	'NoBackups': "Nie ma kopii zapasowych!",
	'activate': "Aktywuj",
	'deactivate': "Dezaktywuj",
	'unban': "Odblokowanie",
	'MustLogin': "Musisz być zalogowany",
	'UnknownError': "Nieznany bład! Spróbuj ponownie...",
	'NotResponse': "Serwer nie odpowiedział! Spróbuj ponownie",
	'InvalidIP': "Nie prawidłowy adres IP.",
	'UpdateNow': "Aktualizuj teraz!",
	'later': "Póżniej"
};

var jsAjax = {
	'accountcreated': "Konto stworzone!",
	'worldsaved': "Świat zapisany!",
	'messagesent': "Wiadomość wysłana",
	'broadcastedmessage': "Nadawanie wiadomości.",
	'forcestop': "Wymuszanie zatrzymanie serwera",
	'plugindisabled': "_NAME_ jest zablokowany", // PluginX's plugin disabled.
	'pluginenabled': "_NAME_ jest odblokowany", // PluginX's plugin enabled.
	'editedproperty': "Edited property",
	'worldbackedup': "Utworzono kopię zapasową świata",
	'deletebackup': "Kopia zapasowa usunięta",
	'kickplayer': "_NAME_ został/a wyrzucony z serwera", // Sharkiller kicked from the server
	'itemsgiven': "_NAME_ dostał/a _AMOUNT_ _ITEM_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "_NAME_ zabrano _AMOUNT_ _ITEM_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ zabity/a!", // Sharkiller killed
	'healthchanged': "_NAME_ jego/jej życie zostało zmienione na _AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_ został zablokowany!", // Sharkiller was banned!
	'playerunbanned': "_NAME_ został odblokowany!", // Sharkiller was unbanned!
	'ipbanned': "_IP_ został zablokowany!", // 19.64.84.24 was banned!
	'ipunbanned': "_IP_ został odblokowany!", // 19.64.84.24 was unbanned!
	'arrowshooted': "Strzał!", 
	'fireballshooted': "Strzelony kulą ognia", 
	'throwsnowball': "Rzucono śnieżką!",
	'throwegg': "Jajko rzucone!",
	'changename': "_OLD_ został zmieniony na _NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "Przeteleportowano gracza",
	'langchanged': "Zmieniono język, restartowanie strony...",
	'wlloaded': "Whitelista załadowana!",
	'wladded': "Dodano do Whitelisty!",
	'wlsaved': "Whitelista została zapisana pomyślnie!",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "Zły parametr",
	'messageempty': "Pusta wiadomość",
	'wladdfail': "Dodanie gracza do whitelisty nie powiodło się!",
	'wlsavefail': "Zapisanie whitelisty nie powiodło się! Spróbuj ponownie!",
	'playernotconnected': "Gracz nie jest połączony",
	'playernotbanned': "Gracz nie jest zablokowany",
	'ipnotbanned': "IP nie zbanowane",
	'langnotfound': "Język nie znaleziony!"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "Zaloguj się do milkAdmin",
	'langUsername': "Nazwa użytkownika",
	'langPassword': "Hasło",
	'langLogin': "Zaloguj"
};

var jsLogin = {
	'welcome': "Witaj! Ładowanie strony...",
	'UnknownError': "Nieznany bład! Spróbuj ponownie...",
	'NotResponse': "Serwer nie odpowiedział! Spróbuj ponownie",
	'invalidlogin': "Nie prawidłowa nazwa lub hasło!"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "Tworzenie użytkownika",
	'langUsername': "Nazwa użytkownika",
	'langPassword': "Hasło",
	'langCreateAccount': "Stwórz użytkownika"
};

var jsRegister = {
	'created': "Konto stworzone! Ładowanie strony...",
	'notadmin': "Nie możesz użyć \"admin\" jako nazwy!",
	'baduser': "Wprowadź poprawną nazwe lub hasło",
	'UnknownError': "Nieznany bład! Spróbuj ponownie...",
	'NotResponse': "Serwer nie odpowiedział! Spróbuj ponownie",
	'error': "Nie prawidłowa nazwa lub hasło!"
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
	'langPleaseWait20Seconds': "Proszę poczekaj 20 sekund"
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "Przywracanie"
};

var jsBackup = {
	'Complete': "Kopia utworzona! Uruchamianie serwera...",
	'UnknownError': "Nieznany bład! Spróbuj ponownie...",
	'NotResponse': "Serwer nie odpowiedział! Spróbuj ponownie"
};