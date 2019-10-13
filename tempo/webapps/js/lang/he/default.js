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
	'lang1Yes': "כן",
	'lang1No': "לא",
	'lang1OK': "אישור",
	'lang1Add': "להוסיף",
	'lang1Cancel': "בטל",
	'lang1Send': "שלח",
	'lang1Change': "שנה",
	'lang1On': "פועל",
	'lang1Off': "כבוי",
	'lang1ReloadList': "רענן רשימה",
	'lang1IPAddress': "כתובת אייפי",
	'lang1Player': "שחקן",
	'lang1Action': "פעולה",
	'lang1User': "שם משתמש",
	'lang1Password': "סיסמה",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "אודות",
	'langLogout': "התנתק",
	'langChooseLanguage': "בחר שפה:",
	'langTranslate': "תרגם לשפה שלך",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "גירסה חדשה יותר זמינה",
	'langVersionAvailable': "milkAdmin v_VER_ is available", // milkAdmin v1.0 is available
	'langUpdateNow': "האם תרצה לעדכן כעת?",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "אודות milkAdmin",
	'langDesign': "עיצוב ותיכנות:",
	'langUpdates': "עידכונים:",
	'langThanks': "תודות ל:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "אפשרויות חסימה",
	'langKickPlayer': "העף שחקן",
	'langBanPlayerName': "חסום שחקן",
	'langBanIPAddress': "חסום אייפי",
	'langCause': "סיבה",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "אתחל שרת",
	'langReloadServer': "רענן שרת",
	'langBackupStart': "התחל גיבוי",
	'langSaveMap': "שמור עולם",
	'langStopServer': "סגור סרבר",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "סרבר",
	'langConsoleSM': "קונסול",
	'langPluginsSM': "פלאגינים",
	'langBackupsSM': "גיובויים",
	'langPlayersSM': "שחקנים",
	'langBanListSM': "Banlist",
	'langWhitelistSM': "רשימה לבנה (מותרים)",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "איתחול אחרון",
	'langAmountPlayersOnline': "מספר השחקנים המשחקים",
	'langFreeMemory': "זיכרון פנוי",
	'langUsedMemory': "זיכרון בשימוש",
	'langTotalMemory': "סה\"כ זיכרון",
	'langMaxMemory': "מקס זיכרון",
	'langTitleMemory': "Memory Data - <b>Free Memory</b>: Show the amount of free memory in the Minecraft Server.<br><b>Used Memory</b>: Show the amount of used memory in the Minecraft Server.<br><b>Total Memory</b>: Show the total amount of memory that the Minecraft Server use right now.<br><b>Max Memory</b>: Show the maximum amount of memory that the Minecraft Server will attempt to use.",
	'langFreeSpace': "מקום פנוי",
	'langUsedSpace': "מקום בשימוש",
	'langTotalSpace': "סה\"כ מקום",
	'langTitleSpace': "Space Data - Based on &quot;Backup Folder&quot; directory.",
	'langServerVersion': "גירסת שרת",
	'langCraftbukkitBuild': "גירסת Craftbukkit",
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
	'langMCIPPORT': "הכתובת והפורט של שרת המיינקראפט",
	'langTitleMCIPPORT': "<b>IP:</b> Set this if you want the server to bind to a particular IP. It is strongly recommended that you leave server-ip blank!<br><b>Port:</b> Changes the port the server is hosting on. This port must be forwarded if the server is going through a router.<br><b>Valid values:</b><ul><li><b>IP:</b> Blank, or the IP you want your server to run on.</li><li><b>Port:</b> A number between <b>1-65535</b>. Default: <b>25565</b><ul><li>Should be greater than 20000 to avoid conflicts with system reserved ports.</li></ul></li></ul>",
	'langMaxPlayers': "שחקנים מקסימליים",
	'langTitleMaxPlayers': "המספר המירבי של השחקנים שיכולים לשחק באותו הזמן.<br><i>שימו לב שאם יותר שחקנים משחקים, המערכת משתמשת ביותר מקורות מידע.</i><br><i>שימו לב שגם מספר האדמינים לא נספר נגדמספר המשתמשים הרגילים.</i><br><b>כמויות אפשריות:</b><ul><li>מספר בין <b>0-255</b>.</li></ul>",
	'langViewDistance': "מרחק ראייה",
	'langTitleViewDistance': "כמות השטחים שהשרת שולח לשחקנים.<br><b>מספרים אפשריים:</b><ul><li>מספר בין <b>3-15</b>.מספר מומלץ : <b>10</b></li></ul>",
	'langHoldMessage': "החזקת הודעה",
	'langTitleHoldMessage': "הודעה שMCSODRTK יציג כשהסרבר בעצירה.<br><i>צריך MinecraftRemoteToolkit</i>",
	'langAllowNether': "אפשר גיהנום",
	'langTitleAllowNether': "מאפשר לשחקנים לעבור לעולם הגיהנום.<ul><li><b>נכון</b> =הסרבר יאפשר שערים שישלחו שחקנים לגיהנום.</li><li><b>שקרי</b> =שערים לא ישלחו שחקנים לגיהנום.</li></ul>",
	'langSpawnMonsters': "זמן מפלצות",
	'langTitleSpawnMonsters': "בחרו נכון כדי לאפשר שזומבים ייווצרו בלילה, בחרו שקר אם לא.<br><i>טיפ: אם יש בשרת תקלות, הפסיקו את הזומבים.</i><ul><li><b>נכון</b> = זומבים ייווצרו בלילה ובחושך.</li><li><b>שקר</b> = ללא זומבים.</li></ul>",
	'langSpawnAnimals': "זמן חיות",
	'langTitleSpawnAnimals': "Animals will be able to spawn.<ul><li><b>true</b> = Animals spawn as normal.</li><li><b>false</b> = Animals will immediately vanish.</li></ul>",
	'langOnlineMode': "מצב מקוון (אמת שמות)",
	'langTitleOnlineMode': "Server checks connecting players against minecraft\'s account database.<br>Only set this to false if your server is not connected to the Internet.<ul><li><b>true</b> = The server will assume it has an Internet connection and check in minecraft.net every connecting player.</li><li><b>false</b> = The server will not attempt to check connecting players.</li></ul>",
	'langPVP': "שחקן נגד שחקן (PVP)",
	'langTitlePVP': "Enable Player vs Player on the server.<br><i>Note: Hitting a player while having PvP set to false and having tamed wolfs will still cause the wolfs<br>attacking the attacked player.</i><ul><li><b>true</b> = Players will be able to kill each other.</li><li><b>false</b> = Players cannot kill other players.</li></ul>",
	'langAllowFlight': "אפשר תעופה",
	'langTitleAllowFlight': "Will allow users to use flight/no-clip on your server, if they have an mod that provides flight/no-clip installed.<ul><li><b>true</b> = Flight/no clip is allowed, and used if the player have a no-clip mod installed.</li><li><b>false</b> = Flight/no-clip is not allowed.</li></ul>",
	'langWhitelist': "רשימה לבנה (מותרים)",
	'langTitleWhitelist': "Enable a white list on the server. With a white list enabled, users not on the white list will be unable to connect.<ul><li><b>true</b> = The file white-list.txt is used to generate the white list.</li><li><b>false</b> = No white list is used.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "רשימה לבנה (מותרים)",
	'langWLAddPlayer': "הוסף שחק",
	'langWLDeleteSelected': "מחק את המסומן",
	'langWLSaveChanges': "שמור שינויים",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "אפשר תוסף",
	'langEnable': "אפשר",
	'langPluginName': "שם התוסף",
	'langVersion': "גירסה",
	'langReloadTheList': "רענן את הרשימה",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "בחר את הגיבוי שלך",
	'langRestoreBackup': "שחזר מגיבוי",
	'langDeleteBackup': "מחק גיבוי",
	'langBackupClear': "Remove previous folders before restoring the backup",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "ניהול משתמשים",
	'langIP': "כתובת אייפי",
	'langPort': "פורט (יציאה)",
	'langKill': "הרוג שחקן",
	'langKick': "העף שחקן",
	'langBanName': "חסום שחקן",
	'langBanIP': "חסום אייפי",
	'langAmount': "כמות הפעמים",
	'langShootArrow': "לירות חץ",
	'langShootFireball': "לירות כדור אש",
	'langThrowEgg': "זרוק ביצה",
	'langThrowSnowball': "זרוק כדור שלג",
	'langTeleportToPlayer': "השתגר אל שחקן",
	'langTeleportToCoord': "השתגר לנקודת ציון",
	'langChangeName': "שנה שם",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "חסום אייפי או שם",
	'langClearFilter': "נקה מסנן",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "רשום מנהל חדש",
	'langCreateAdmin': "צור מנהל"
};

var jsIndex = {
	'sProcessing': "מעבד...",
	'sLengthMenu': "הצג _MENU_ תוספים", // Show 10 plugins
	'sZeroRecords': "לא נמצאו תוספים.",
	'sInfo': "מציג _START_->_END_ מתוך _TOTAL_ תוספים", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "אין תוספים להציג",
	'sInfoFiltered': "(סינון של _MAX_ תוספים)", // (filter of 17 plugins)
	'sSearch': "חפש תוסף:",
	'sFirst': "ראשון",
	'sPrevious': "הקודם",
	'sNext': "הבא",
	'sLast': "אחרון",
	'ReloadServer': "מרענן שרת!",
	'RestartServer': "מאתחל שרת!",
	'StopServer': "מכבה שרת!",
	'EnablePlugin': "התוסף הופעל!",
	'StartBackup': "הגיבוי החל",
	'RTKNeeded': "You need the RemoteToolkit to use this function!",
	'NoUsersOnline': "אין שחקנים מחוברים",
	'NoBackups': "There are no backups!",
	'activate': "הפעל",
	'deactivate': "כבה",
	'unban': "הורד חסימה",
	'MustLogin': "אתה חייב להתחבר!",
	'UnknownError': "שגיאה לא ידועה",
	'NotResponse': "השרת אינו מגיב! נסה שנית",
	'InvalidIP': "כתובת אייפי לא חוקית.",
	'UpdateNow': "עדכן עכשיו",
	'later': "מאוחר יותר"
};

var jsAjax = {
	'accountcreated': "המשתמש נוצר!",
	'worldsaved': "העולם נשמר!",
	'messagesent': "ההודעה נשלחה",
	'broadcastedmessage': "הודעה משודרת",
	'forcestop': "הפסק בכוח",
	'plugindisabled': "התוסף _NAME_ הופסק", // PluginX's plugin disabled.
	'pluginenabled': "התוסף _NAME_ הופעל", // PluginX's plugin enabled.
	'editedproperty': "ערוך מאפיין",
	'worldbackedup': "עולם מגובה",
	'deletebackup': "מחק גיבוי",
	'kickplayer': "ה_NAME_ הועף מהשרת", // Sharkiller kicked from the server
	'itemsgiven': "_NAME_ קיבל _AMOUNT_ יחידות של _ITEM_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "_NAME_ איבד _AMOUNT_ יחידות של _ITEM_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ נהרג", // Sharkiller killed
	'healthchanged': "ל_NAME_ יש _AMOUNT_/20 חיים עכשיו", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_ נחסם!", // Sharkiller was banned!
	'playerunbanned': "ל_NAME_ בוטלה החסימה", // Sharkiller was unbanned!
	'ipbanned': "_IP_ נחסם!", // 19.64.84.24 was banned!
	'ipunbanned': "ל_IP_ בוטלה החסימה", // 19.64.84.24 was unbanned!
	'arrowshooted': "חץ נורה!", 
	'fireballshooted': "כדור אש נורה!", 
	'throwsnowball': "כדור השלג נזרק!",
	'throwegg': "ביצה נזרקה!",
	'changename': "_OLD_ שינה את שמו ל-_NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "השחקן שוגר",
	'langchanged': "השפה שונתה! טוען עמוד...",
	'wlloaded': "Whitelist loaded!",
	'wladded': "Added to Whitelist!",
	'wlsaved': "Whitelist has been saved successfully!",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "פרמטרים שגויים",
	'messageempty': "הודעה ריקה",
	'wladdfail': "Failed to add player to Whitelist!",
	'wlsavefail': "Failed to save Whitelist! Try again!",
	'playernotconnected': "השחקן לא מחובר",
	'playernotbanned': "השחקן לא חסום",
	'ipnotbanned': "האייפי לא חסום",
	'langnotfound': "השפה לא נמצאה!"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "התחבר אל milkAdmin",
	'langUsername': "שם משתמש",
	'langPassword': "סיסמה",
	'langLogin': "התחבר"
};

var jsLogin = {
	'welcome': "ברוך הבא! טוען עמוד...",
	'UnknownError': "שגיאה לא ידועה",
	'NotResponse': "השרת אינו מגיב! נסה שנית",
	'invalidlogin': "שם משתמש וסיסמה לא נכונים!"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "צור משתמש",
	'langUsername': "שם משתמש",
	'langPassword': "סיסמה",
	'langCreateAccount': "צור משתמש"
};

var jsRegister = {
	'created': "המשתמש נוצר! טוען עמוד...",
	'notadmin': "אינך יכול להשתמש ב \"admin\" כשם משתמש",
	'baduser': "אנא הכנס משתמש וסיסמה נכונים",
	'UnknownError': "שגיאה לא ידועה",
	'NotResponse': "השרת אינו מגיב! נסה שנית",
	'error': "שם משתמש וסיסמה לא נכונים!"
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "הפעל שרת"
};

///////////////////////////////////////////////
//
//   Language for wait.html
//
///////////////////////////////////////////////

var langWait = {
	'langPleaseWait20Seconds': "אנא המתן 20 שניות"
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "מגבה כעת"
};

var jsBackup = {
	'Complete': "הגיבוי השולם בהצלחה ! מפעיל את השרת ...",
	'UnknownError': "שגיאה לא ידועה",
	'NotResponse': "השרת אינו מגיב! נסה שנית"
};