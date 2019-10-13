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
	'lang1Yes': "Ναί",
	'lang1No': "Όχι",
	'lang1OK': "ΟΚ",
	'lang1Add': "Προσθήκη",
	'lang1Cancel': "Άκυρο",
	'lang1Send': "Αποστολή",
	'lang1Change': "Αλλαγή",
	'lang1On': "On",
	'lang1Off': "Off",
	'lang1ReloadList': "Επαναφόρτωση λίστας",
	'lang1IPAddress': "Διεύθυνση IP",
	'lang1Player': "Παίκτης",
	'lang1Action': "Ενέργεια",
	'lang1User': "Όνομα Χρήστη",
	'lang1Password': "Κωδικός πρόσβασης",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "Περί...",
	'langLogout': "Αποσύνδεση",
	'langChooseLanguage': "Επιλογή γλώσσας:",
	'langTranslate': "Μετέφρασε στην γλώσσα σου",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "Νέα έκδοση διαθέσιμη",
	'langVersionAvailable': "Η έκδοση v_VER_ του milkAdmin είναι διαθέσιμη", // milkAdmin v1.0 is available
	'langUpdateNow': "Θα θέλατε να κάνετε ενημέρωση τώρα;",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "περί το milkAdmin",
	'langDesign': "Σχεδίαση και προγραμματισμός:",
	'langUpdates': "Ενημερώσεις:",
	'langThanks': "Χάρις στόν:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Επιλογές αποκλεισμού",
	'langKickPlayer': "Διώξε παίκτη",
	'langBanPlayerName': "Κάνε ban όνομα παίκτη",
	'langBanIPAddress': "Κάνε ban διεύθυνση IP",
	'langCause': "Λόγος",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "Επανεκκίνηση διακομιστή",
	'langReloadServer': "Επαναφόρτωση διακομιστή",
	'langBackupStart': "Εκκίνηση αντιγράφων ασφαλείας",
	'langSaveMap': "Αποθήκευση κόσμου",
	'langStopServer': "Διακοπή διακομιστή",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "Διακομιστής",
	'langConsoleSM': "Κονσόλα",
	'langPluginsSM': "Πρόσθετα",
	'langBackupsSM': "Αντίγραφα ασφαλείας",
	'langPlayersSM': "Παίκτες",
	'langBanListSM': "Λίστα αποκλεισμού",
	'langWhitelistSM': "Λίστα επιτρεπούμενων",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "Τελευταία επανεκκίνηση",
	'langAmountPlayersOnline': "Αριθμός συνδεδεμένων παικτών",
	'langFreeMemory': "Ελεύθερη μνήμη",
	'langUsedMemory': "Χρησιμοποιούμενη μνήμη",
	'langTotalMemory': "Συνολική μνήμη",
	'langMaxMemory': "Μέγιστη μνήμη",
	'langTitleMemory': "Memory Data - <b>Free Memory</b>: Show the amount of free memory in the Minecraft Server.<br><b>Used Memory</b>: Show the amount of used memory in the Minecraft Server.<br><b>Total Memory</b>: Show the total amount of memory that the Minecraft Server use right now.<br><b>Max Memory</b>: Show the maximum amount of memory that the Minecraft Server will attempt to use.",
	'langFreeSpace': "Ελεύθερος χώρος",
	'langUsedSpace': "Χρησιμοποιούμενος χώρος",
	'langTotalSpace': "Συνολικός χώρος",
	'langTitleSpace': "Space Data - Based on &quot;Backup Folder&quot; directory.",
	'langServerVersion': "Έκδοση διακομιστή",
	'langCraftbukkitBuild': "Έκδοση craftbukkit",
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
	'langSpawnMonsters': "Εμφάνιση τεράτων",
	'langTitleSpawnMonsters': "Set true if you want monsters to be spawned at night, false if you don\'t.<br><i>Tip: if you have major lag, turn this off.</i><ul><li><b>true</b> = Monsters will appear at night and in the dark.</li><li><b>false</b> = No monsters.</li></ul>",
	'langSpawnAnimals': "Εμφάνιση ζώων",
	'langTitleSpawnAnimals': "Animals will be able to spawn.<ul><li><b>true</b> = Animals spawn as normal.</li><li><b>false</b> = Animals will immediately vanish.</li></ul>",
	'langOnlineMode': "Λειτουργία δικτύου (Επικυρώνει ψευδώνυμα)",
	'langTitleOnlineMode': "Server checks connecting players against minecraft\'s account database.<br>Only set this to false if your server is not connected to the Internet.<ul><li><b>true</b> = The server will assume it has an Internet connection and check in minecraft.net every connecting player.</li><li><b>false</b> = The server will not attempt to check connecting players.</li></ul>",
	'langPVP': "Παίκτης εναντίον Παίκτη (PVP)",
	'langTitlePVP': "Enable Player vs Player on the server.<br><i>Note: Hitting a player while having PvP set to false and having tamed wolfs will still cause the wolfs<br>attacking the attacked player.</i><ul><li><b>true</b> = Players will be able to kill each other.</li><li><b>false</b> = Players cannot kill other players.</li></ul>",
	'langAllowFlight': "Επέτρεψε πτήση",
	'langTitleAllowFlight': "Will allow users to use flight/no-clip on your server, if they have an mod that provides flight/no-clip installed.<ul><li><b>true</b> = Flight/no clip is allowed, and used if the player have a no-clip mod installed.</li><li><b>false</b> = Flight/no-clip is not allowed.</li></ul>",
	'langWhitelist': "Λίστα επιτρεπούμενων",
	'langTitleWhitelist': "Enable a white list on the server. With a white list enabled, users not on the white list will be unable to connect.<ul><li><b>true</b> = The file white-list.txt is used to generate the white list.</li><li><b>false</b> = No white list is used.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "Λίστα επιτρεπούμενων",
	'langWLAddPlayer': "Προσθήκη παίκτη",
	'langWLDeleteSelected': "Διαγραφή επιλεγμένων",
	'langWLSaveChanges': "Αποθήκευση αλλαγών",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "Ενεργοποίηση πρόσθετου",
	'langEnable': "Ενεργοποίηση",
	'langPluginName': "Όνομα πρόσθετου",
	'langVersion': "Έκδοση",
	'langReloadTheList': "Επαναφόρτωση λίστας",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "Επιλογή αντίγραφου ασφαλείας",
	'langRestoreBackup': "Επαναφορά αντιγράφου ασφαλείας",
	'langDeleteBackup': "Διαγραφή αντιγράφου ασφαλείας",
	'langBackupClear': "Αφαίρεσε προηγούμενους φακέλους πριν την επαναφορά αντιγράφου ασφαλείας",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "Διαχείρηση χρηστών",
	'langIP': "Διεύθυνση IP",
	'langPort': "Port",
	'langKill': "Σκότωσε",
	'langKick': "Διώξε",
	'langBanName': "Αποκλεισμό",
	'langBanIP': "Αποκλεισμός IP",
	'langAmount': "Αριθμός φορών",
	'langShootArrow': "Ρίξε βέλος",
	'langShootFireball': "Ρίξε μπάλα φωτιάς",
	'langThrowEgg': "Ρίξε αυγό",
	'langThrowSnowball': "Ρίξε χιονόμπαλα",
	'langTeleportToPlayer': "Τηλεμεταφορα σε παίκτη",
	'langTeleportToCoord': "Τηλεμεταφορά σε συντεταγμένες",
	'langChangeName': "Αλλαγή ονόματος",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Αποκλεισμός IP ή ονόματος",
	'langClearFilter': "Εκαθάρριση φίλτρου",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "Εγγραφή καινούριου Διαχειριστή",
	'langCreateAdmin': "Δημιουργία διαχειριστή"
};

var jsIndex = {
	'sProcessing': "Επεξεργασία...",
	'sLengthMenu': "Δείξε _MENU_ πρόσθετα", // Show 10 plugins
	'sZeroRecords': "Δεν βρέθηκαν πρόσθετα",
	'sInfo': "Showing _START_->_END_ of _TOTAL_ plugins", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "Δεν υπάρχουν πρόσθετα για προβολή",
	'sInfoFiltered': "(φίλτρο για _MAX_ πρόσθετα)", // (filter of 17 plugins)
	'sSearch': "Αναζήτηση πρόσθετου",
	'sFirst': "Πρώτο",
	'sPrevious': "Προηγούμενο",
	'sNext': "Επόμενο",
	'sLast': "Τελευταίο",
	'ReloadServer': "Επαναφόρτωση διακομιστή!",
	'RestartServer': "Επανακκίνηση διακομιστή!",
	'StopServer': "Διακοπή διακομιστή!",
	'EnablePlugin': "Πρόσθετο ενεργοποιήθηκε!",
	'StartBackup': "Εκκίνηση αντιγράφου ασφαλείας!",
	'RTKNeeded': "Χρειάζεσε το RemoteToolkit για να χρησιμοποιήσεις αυτή την λειτουργία!",
	'NoUsersOnline': "Δεν υπάρχουν παίχτες συνδεδεμένοι",
	'NoBackups': "Δεν υπάρχουν αντίγραφα ασφαλείας!",
	'activate': "Ενεργοποίηση",
	'deactivate': "Απενεργοποίηση",
	'unban': "Άρση αποκλεισμού",
	'MustLogin': "Πρέπει να συνδεθείς!",
	'UnknownError': "Άγνωστο σφάλμα! Προσπαθήστε ξανά!",
	'NotResponse': "Server not responding! Try again",
	'InvalidIP': "Λάθος διεύθυνση IP",
	'UpdateNow': "Ενημέρωση τώρα",
	'later': "Αργότερα"
};

var jsAjax = {
	'accountcreated': "Λογαριασμός δημιουργήθηκε!",
	'worldsaved': "Κόσμος αποθηκεύτηκε!",
	'messagesent': "Μήνυμα εστάλη",
	'broadcastedmessage': "Μήνυμα αναμεταδόθηκε",
	'forcestop': "Εξαναγκασμένη διακοπή",
	'plugindisabled': "Πρόσθετο _NAME_ απενεργοποιήθηκε", // PluginX's plugin disabled.
	'pluginenabled': "Πρόσθετο _NAME_ ενεργοποιήθηκε", // PluginX's plugin enabled.
	'editedproperty': "Ιδιότητα επεξεργάστηκε",
	'worldbackedup': "Έγινε αντίγραφο ασφαλείας του κόσμου",
	'deletebackup': "Αντίγραφο ασφαλείας διαγράφτηκε",
	'kickplayer': "_NAME_ kicked from the server", // Sharkiller kicked from the server
	'itemsgiven': "_NAME_ was given _AMOUNT_ units of _ITEM_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "_NAME_ removed _AMOUNT_ units of _ITEM_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ killed", // Sharkiller killed
	'healthchanged': "_NAME_\'s health changed to _AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_ was banned!", // Sharkiller was banned!
	'playerunbanned': "_NAME_ was unbanned!", // Sharkiller was unbanned!
	'ipbanned': "_IP_ was banned!", // 19.64.84.24 was banned!
	'ipunbanned': "_IP_ was unbanned!", // 19.64.84.24 was unbanned!
	'arrowshooted': "Βέλος ερρίφθη!", 
	'fireballshooted': "Μπάλα φωτιάς ερρίφθη!", 
	'throwsnowball': "Snowball throwed!",
	'throwegg': "Αυγό ερρίφθη!",
	'changename': "_OLD_\'s name changed to _NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "Player Teleported",
	'langchanged': "Η γλώσσα άλλαξε! Επαναφόρτωση σελίδας...",
	'wlloaded': "Λίστα επιτρεπούμενων φορτώθηκε!",
	'wladded': "Προστέθηκε στην λίστα επιτρεπούμενων!",
	'wlsaved': "Η λίστα επιτρεπούμενων αποθηκεύτηκε επιτυχώς",
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
	'langnotfound': "Γλώσσα δεν βρέθηκε!"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "Login in milkAdmin",
	'langUsername': "Όνομα Χρήστη",
	'langPassword': "Κωδικός πρόσβασης",
	'langLogin': "Σύνδεση"
};

var jsLogin = {
	'welcome': "Καλωσήρθατε! Φόρτωση σελίδας...",
	'UnknownError': "Άγνωστο σφάλμα! Προσπαθήστε ξανά!",
	'NotResponse': "Server not responding! Try again",
	'invalidlogin': "Λάθος όνομα χρήστη και κωδικός πρόσβασης!"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "Δημιουργία λογαριασμού",
	'langUsername': "Όνομα Χρήστη",
	'langPassword': "Κωδικός πρόσβασης",
	'langCreateAccount': "Δημιουργία λογαριασμού"
};

var jsRegister = {
	'created': "Λογαριασμός δημιουργήθηκε! Φόρτωση σελίδας",
	'notadmin': "Δεν μπορείς να χρησιμοποιήσεις το \'admin\' ως ψευδώνυμο",
	'baduser': "Παρακαλώ εισάγετε ένα έγκυρο όνομα χρήστη και κωδικό πρόσβασης",
	'UnknownError': "Άγνωστο σφάλμα! Προσπαθήστε ξανά!",
	'NotResponse': "Server not responding! Try again",
	'error': "Λάθος όνομα χρήστη και κωδικός πρόσβασης!"
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "Εκκίνηση διακομιστή"
};

///////////////////////////////////////////////
//
//   Language for wait.html
//
///////////////////////////////////////////////

var langWait = {
	'langPleaseWait20Seconds': "Παρακαλώ περιμένετε 20 δευτερόλεπτα"
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "Αντιγράφω με ασφάλεια"
};

var jsBackup = {
	'Complete': "Αντίγραφο ασφαλείας έτοιμο! Εκκίνηση διακομιστή...",
	'UnknownError': "Άγνωστο σφάλμα! Προσπαθήστε ξανά!",
	'NotResponse': "Server not responding! Try again"
};