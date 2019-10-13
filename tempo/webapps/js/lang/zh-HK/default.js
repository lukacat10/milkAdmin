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
	'lang1Yes': "是",
	'lang1No': "否",
	'lang1OK': "確定",
	'lang1Add': "Add",
	'lang1Cancel': "取消",
	'lang1Send': "發送",
	'lang1Change': "更變",
	'lang1On': "開",
	'lang1Off': "﻿關",
	'lang1ReloadList': "重整清單",
	'lang1IPAddress': "IP 位址",
	'lang1Player': "玩家",
	'lang1Action': "動作",
	'lang1User': "用戶名稱",
	'lang1Password': "密碼",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "關於...",
	'langLogout': "登出",
	'langChooseLanguage': "Choose a Language:",
	'langTranslate': "Translate to your language",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "有新版本",
	'langVersionAvailable': "milkAdmin v_VER_ is available", // milkAdmin v1.0 is available
	'langUpdateNow': "您想現在更新？",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "About milkAdmin",
	'langDesign': "Design and Programming:",
	'langUpdates': "Updates:",
	'langThanks': "Thanks to:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "禁制選項",
	'langKickPlayer': "踢走玩家",
	'langBanPlayerName': "禁制玩家",
	'langBanIPAddress': "禁制 IP 位址",
	'langCause': "原因",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "重啟",
	'langReloadServer': "重整",
	'langBackupStart': "Start Backup",
	'langSaveMap': "保存",
	'langStopServer': "停止",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "Server",
	'langConsoleSM': "Console",
	'langPluginsSM': "Plugins",
	'langBackupsSM': "Backups",
	'langPlayersSM': "Players",
	'langBanListSM': "Banlist",
	'langWhitelistSM': "Whitelist",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "上一次重啟",
	'langAmountPlayersOnline': "Number of Players Online",
	'langFreeMemory': "可用記憶體",
	'langUsedMemory': "已用記憶體",
	'langTotalMemory': "記憶體總計",
	'langMaxMemory': "最大記憶體",
	'langTitleMemory': "Memory Data - <b>Free Memory</b>: Show the amount of free memory in the Minecraft Server.<br><b>Used Memory</b>: Show the amount of used memory in the Minecraft Server.<br><b>Total Memory</b>: Show the total amount of memory that the Minecraft Server use right now.<br><b>Max Memory</b>: Show the maximum amount of memory that the Minecraft Server will attempt to use.",
	'langFreeSpace': "Free Space",
	'langUsedSpace': "Used Space",
	'langTotalSpace': "Total Space",
	'langTitleSpace': "Space Data - Based on &quot;Backup Folder&quot; directory.",
	'langServerVersion': "伺服器版本",
	'langCraftbukkitBuild': "CraftBukkit 版本號",
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
	'langSpawnMonsters': "產生怪物",
	'langTitleSpawnMonsters': "Set true if you want monsters to be spawned at night, false if you don\'t.<br><i>Tip: if you have major lag, turn this off.</i><ul><li><b>true</b> = Monsters will appear at night and in the dark.</li><li><b>false</b> = No monsters.</li></ul>",
	'langSpawnAnimals': "產生動物",
	'langTitleSpawnAnimals': "Animals will be able to spawn.<ul><li><b>true</b> = Animals spawn as normal.</li><li><b>false</b> = Animals will immediately vanish.</li></ul>",
	'langOnlineMode': "線上模式",
	'langTitleOnlineMode': "Server checks connecting players against minecraft\'s account database.<br>Only set this to false if your server is not connected to the Internet.<ul><li><b>true</b> = The server will assume it has an Internet connection and check in minecraft.net every connecting player.</li><li><b>false</b> = The server will not attempt to check connecting players.</li></ul>",
	'langPVP': "玩家對戰",
	'langTitlePVP': "Enable Player vs Player on the server.<br><i>Note: Hitting a player while having PvP set to false and having tamed wolfs will still cause the wolfs<br>attacking the attacked player.</i><ul><li><b>true</b> = Players will be able to kill each other.</li><li><b>false</b> = Players cannot kill other players.</li></ul>",
	'langAllowFlight': "允許飛行",
	'langTitleAllowFlight': "Will allow users to use flight/no-clip on your server, if they have an mod that provides flight/no-clip installed.<ul><li><b>true</b> = Flight/no clip is allowed, and used if the player have a no-clip mod installed.</li><li><b>false</b> = Flight/no-clip is not allowed.</li></ul>",
	'langWhitelist': "白名單",
	'langTitleWhitelist': "Enable a white list on the server. With a white list enabled, users not on the white list will be unable to connect.<ul><li><b>true</b> = The file white-list.txt is used to generate the white list.</li><li><b>false</b> = No white list is used.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "Whitelist",
	'langWLAddPlayer': "Add player",
	'langWLDeleteSelected': "Delete Selected",
	'langWLSaveChanges': "Save Changes",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "開啟插件",
	'langEnable': "Enable",
	'langPluginName': "插件名稱",
	'langVersion': "Version",
	'langReloadTheList': "Reload the list",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "選擇備份檔案",
	'langRestoreBackup': "Restore Backup",
	'langDeleteBackup': "刪除備份檔案",
	'langBackupClear': "Remove previous folders before restoring the backup",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "User Management",
	'langIP': "IP",
	'langPort': "Port",
	'langKill': "處死",
	'langKick': "踢除玩家",
	'langBanName': "封禁玩家",
	'langBanIP': "Ban IP",
	'langAmount': "Amount of Times",
	'langShootArrow': "Shoot Arrow",
	'langShootFireball': "Shoot Fireball",
	'langThrowEgg': "Throw Egg",
	'langThrowSnowball': "Throw Snowball",
	'langTeleportToPlayer': "Teleport to Player",
	'langTeleportToCoord': "Teleport to Coord",
	'langChangeName': "Change Name",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Ban IP Address or Name",
	'langClearFilter': "Clear Filter",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "Register a new admin",
	'langCreateAdmin': "Create Admin"
};

var jsIndex = {
	'sProcessing': "Processing...",
	'sLengthMenu': "Show _MENU_ plugins", // Show 10 plugins
	'sZeroRecords': "No plugins found.",
	'sInfo': "Showing _START_->_END_ of _TOTAL_ plugins", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "No plugins to show",
	'sInfoFiltered': "(filter of _MAX_ plugins)", // (filter of 17 plugins)
	'sSearch': "Search Plugin:",
	'sFirst': "First",
	'sPrevious': "Previous",
	'sNext': "Next",
	'sLast': "Last",
	'ReloadServer': "Reloading Server!",
	'RestartServer': "Restarting Server!",
	'StopServer': "Stoping Server!",
	'EnablePlugin': "Plugin Enabled!",
	'StartBackup': "Starting Backup!",
	'RTKNeeded': "You need the RemoteToolkit to use this function!",
	'NoUsersOnline': "No players online",
	'NoBackups': "There are no backups!",
	'activate': "Activate",
	'deactivate': "Deactivate",
	'unban': "Unban",
	'MustLogin': "You must login!",
	'UnknownError': "Unknown Error! Try again!",
	'NotResponse': "Server not responding! Try again",
	'InvalidIP': "Invalid IP Address.",
	'UpdateNow': "Update Now",
	'later': "Later"
};

var jsAjax = {
	'accountcreated': "Account Created!",
	'worldsaved': "Saved World!",
	'messagesent': "Message Sent",
	'broadcastedmessage': "Broadcasted Message",
	'forcestop': "Force Stop",
	'plugindisabled': "_NAME_\'s plugin disabled", // PluginX's plugin disabled.
	'pluginenabled': "_NAME_\'s plugin enabled", // PluginX's plugin enabled.
	'editedproperty': "Edited property",
	'worldbackedup': "Backed up World",
	'deletebackup': "Backup Deleted",
	'kickplayer': "_NAME_ kicked from the server", // Sharkiller kicked from the server
	'itemsgiven': "_NAME_ was given _AMOUNT_ units of _ITEM_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "_NAME_ removed _AMOUNT_ units of _ITEM_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ killed", // Sharkiller killed
	'healthchanged': "_NAME_\'s health changed to _AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_ was banned!", // Sharkiller was banned!
	'playerunbanned': "_NAME_ was unbanned!", // Sharkiller was unbanned!
	'ipbanned': "_IP_ was banned!", // 19.64.84.24 was banned!
	'ipunbanned': "_IP_ was unbanned!", // 19.64.84.24 was unbanned!
	'arrowshooted': "Arrow Shot!", 
	'fireballshooted': "Fireball Shooted!", 
	'throwsnowball': "Snowball throwed!",
	'throwegg': "Egg thrown!",
	'changename': "_OLD_\'s name changed to _NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "Player Teleported",
	'langchanged': "Language Changed! Reloading Page...",
	'wlloaded': "Whitelist loaded!",
	'wladded': "Added to Whitelist!",
	'wlsaved': "Whitelist has been saved successfully!",
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
	'langnotfound': "Language not found!"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "Login in milkAdmin",
	'langUsername': "Username",
	'langPassword': "Password",
	'langLogin': "Login"
};

var jsLogin = {
	'welcome': "Welcome! Loading page...",
	'UnknownError': "Unknown Error! Try again!",
	'NotResponse': "Server not responding! Try again",
	'invalidlogin': "Invalid Username and Password!"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "Create an Account",
	'langUsername': "Username",
	'langPassword': "Password",
	'langCreateAccount': "Create Account"
};

var jsRegister = {
	'created': "Account Created! Loading page...",
	'notadmin': "You can not use \"admin\" as username",
	'baduser': "Please enter a valid username and password",
	'UnknownError': "Unknown Error! Try again!",
	'NotResponse': "Server not responding! Try again",
	'error': "Invalid Username and Password!"
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
	'langPleaseWait20Seconds': "Please wait 20 seconds"
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "Backing up"
};

var jsBackup = {
	'Complete': "Backup Complete! Starting Server...",
	'UnknownError': "Unknown Error! Try again!",
	'NotResponse': "Server not responding! Try again"
};