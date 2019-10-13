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
	'lang1Add': "增加",
	'lang1Cancel': "取消",
	'lang1Send': "送出",
	'lang1Change': "更改",
	'lang1On': "開啟",
	'lang1Off': "關閉",
	'lang1ReloadList': "重新讀取列表",
	'lang1IPAddress': "IP位址",
	'lang1Player': "玩家",
	'lang1Action': "動作",
	'lang1User': "玩家名稱",
	'lang1Password': "密碼",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "關於…",
	'langLogout': "登出",
	'langChooseLanguage': "選擇語言:",
	'langTranslate': "翻譯成你的語言",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "可用新版本",
	'langVersionAvailable': "milkAdmin v_VER_ 已可以更新", // milkAdmin v1.0 is available
	'langUpdateNow': "你喜歡這次的更新嗎？",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "關於 milkAdmin",
	'langDesign': "設計及編程:",
	'langUpdates': "更新:",
	'langThanks': "感謝:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Ban選項",
	'langKickPlayer': "踢除玩家",
	'langBanPlayerName': "Ban玩家名稱",
	'langBanIPAddress': "Ban IP位址",
	'langCause': "理由",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "重啟伺服器",
	'langReloadServer': "重新讀取伺服器",
	'langBackupStart': "開始備份",
	'langSaveMap': "儲存世界",
	'langStopServer': "停止伺服器",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "伺服器",
	'langConsoleSM': "命令列",
	'langPluginsSM': "插件",
	'langBackupsSM': "備份",
	'langPlayersSM': "玩家",
	'langBanListSM': "黑名單",
	'langWhitelistSM': "Whitelist",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "上一次重啟",
	'langAmountPlayersOnline': "在線人數",
	'langFreeMemory': "可用記憶體",
	'langUsedMemory': "已使用記憶體",
	'langTotalMemory': "記憶體總數",
	'langMaxMemory': "最大記憶體",
	'langTitleMemory': "記憶體資料 - <b>閒置記憶體</b>: 顯示Minecraft伺服器的可用記憶體量.<br><b>已使用記憶體</b>: 顯示Minecraft伺服器的記憶體使用量.<br><b>可用記憶體</b>: 顯示Minecraft伺服器目前總共使用了多少記憶體.<br><b>最大記憶體</b>: 顯示Minecraft伺服器最大能用多少記憶體.",
	'langFreeSpace': "閒置空間",
	'langUsedSpace': "已使用空間",
	'langTotalSpace': "可用空間",
	'langTitleSpace': "空間資料 - 根據\"Backup Folder\"資料夾.",
	'langServerVersion': "伺服器版本",
	'langCraftbukkitBuild': "CraftBukkit 版本",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "伺服器資訊",
	'langBroadcastMessage': "廣播訊息",
	'langTitleBroadcastMessage': "廣播訊息 - 不顯示標籤傳送訊息給所有玩家",
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
	'langSpawnMonsters': "怪物產生",
	'langTitleSpawnMonsters': "Set true if you want monsters to be spawned at night, false if you don\'t.<br><i>Tip: if you have major lag, turn this off.</i><ul><li><b>true</b> = Monsters will appear at night and in the dark.</li><li><b>false</b> = No monsters.</li></ul>",
	'langSpawnAnimals': "動物產生",
	'langTitleSpawnAnimals': "Animals will be able to spawn.<ul><li><b>true</b> = Animals spawn as normal.</li><li><b>false</b> = Animals will immediately vanish.</li></ul>",
	'langOnlineMode': "連線模式",
	'langTitleOnlineMode': "Server checks connecting players against minecraft\'s account database.<br>Only set this to false if your server is not connected to the Internet.<ul><li><b>true</b> = The server will assume it has an Internet connection and check in minecraft.net every connecting player.</li><li><b>false</b> = The server will not attempt to check connecting players.</li></ul>",
	'langPVP': "玩家 Vs 玩家",
	'langTitlePVP': "Enable Player vs Player on the server.<br><i>Note: Hitting a player while having PvP set to false and having tamed wolfs will still cause the wolfs<br>attacking the attacked player.</i><ul><li><b>true</b> = Players will be able to kill each other.</li><li><b>false</b> = Players cannot kill other players.</li></ul>",
	'langAllowFlight': "允許飛行",
	'langTitleAllowFlight': "Will allow users to use flight/no-clip on your server, if they have an mod that provides flight/no-clip installed.<ul><li><b>true</b> = Flight/no clip is allowed, and used if the player have a no-clip mod installed.</li><li><b>false</b> = Flight/no-clip is not allowed.</li></ul>",
	'langWhitelist': "白名單",
	'langTitleWhitelist': "Enable a white list on the server. With a white list enabled, users not on the white list will be unable to connect.<ul><li><b>true</b> = The file white-list.txt is used to generate the white list.</li><li><b>false</b> = No white list is used.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "Whitelist",
	'langWLAddPlayer': "新增玩家",
	'langWLDeleteSelected': "刪除已選擇",
	'langWLSaveChanges': "儲存變更",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "已啟用插件",
	'langEnable': "啟用",
	'langPluginName': "插件名稱",
	'langVersion': "版本",
	'langReloadTheList': "重新讀取列表",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "選擇你的輩分",
	'langRestoreBackup': "還原備份",
	'langDeleteBackup': "刪除備份",
	'langBackupClear': "Remove previous folders before restoring the backup",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "使用者管理",
	'langIP': "IP",
	'langPort': "連接埠",
	'langKill': "殺",
	'langKick': "踢除",
	'langBanName': "Ban",
	'langBanIP': "Ban IP",
	'langAmount': "Amount of Times",
	'langShootArrow': "射箭",
	'langShootFireball': "發射火球",
	'langThrowEgg': "丟雞蛋",
	'langThrowSnowball': "丟雪球",
	'langTeleportToPlayer': "TP至玩家",
	'langTeleportToCoord': "TP至指定位置",
	'langChangeName': "更改名稱",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Ban IP位址或者名稱",
	'langClearFilter': "清空過濾器",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "註冊新管理員",
	'langCreateAdmin': "創建管理員"
};

var jsIndex = {
	'sProcessing': "正在處理…",
	'sLengthMenu': "顯示_清單_插件", // Show 10 plugins
	'sZeroRecords': "沒有找到插件",
	'sInfo': "正在顯示_START_->_END_ 共 _TOTAL_個插件", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "沒有顯示插件",
	'sInfoFiltered': "(最高 _MAX_ 個插件的過濾器)", // (filter of 17 plugins)
	'sSearch': "搜尋插件:",
	'sFirst': "第一個",
	'sPrevious': "上一個",
	'sNext': "下一個",
	'sLast': "最後一次",
	'ReloadServer': "重新讀取伺服器",
	'RestartServer': "重新啟動伺服器",
	'StopServer': "停止伺服器!",
	'EnablePlugin': "插件啟用！",
	'StartBackup': "Starting Backup!",
	'RTKNeeded': "你需要 RemoteToolkit 來使用這個功能!",
	'NoUsersOnline': "沒有玩家在線上",
	'NoBackups': "There are no backups!",
	'activate': "啟用",
	'deactivate': "未啟用",
	'unban': "解除BAN",
	'MustLogin': "你必須登錄!",
	'UnknownError': "未知的錯誤! 請重試!",
	'NotResponse': "伺服器沒有回應!請重試",
	'InvalidIP': "錯誤的IP位置 ",
	'UpdateNow': "現在更新",
	'later': "稍後"
};

var jsAjax = {
	'accountcreated': "帳戶建立！",
	'worldsaved': "儲存地圖！",
	'messagesent': "訊息發送",
	'broadcastedmessage': "廣播訊息",
	'forcestop': "強制終止",
	'plugindisabled': "_NAME_\'s 插件停用", // PluginX's plugin disabled.
	'pluginenabled': "_NAME_\'s 插件啟用", // PluginX's plugin enabled.
	'editedproperty': "屬性已編輯",
	'worldbackedup': "備份世界",
	'deletebackup': "備份已刪除",
	'kickplayer': "_NAME_ 已被踢出伺服器", // Sharkiller kicked from the server
	'itemsgiven': "_NAME_ 被給予了_AMOUNT_個_ITEM_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "_NAME_ 被拿走了_AMOUNT_個_ITEM_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ 已被殺死", // Sharkiller killed
	'healthchanged': "_NAME_ 的血量被設定成_AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_ 已被黑名單!", // Sharkiller was banned!
	'playerunbanned': "_NAME_ 已被解除黑名單!", // Sharkiller was unbanned!
	'ipbanned': "_IP_ 已被黑名單", // 19.64.84.24 was banned!
	'ipunbanned': "_IP_ 已被解除黑名單!", // 19.64.84.24 was unbanned!
	'arrowshooted': "弓箭已射出!", 
	'fireballshooted': "火球已射出!", 
	'throwsnowball': "丟出了雪球!",
	'throwegg': "雞蛋已丟出!",
	'changename': "_OLD_ 的名稱被換成 _NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "玩家已傳送",
	'langchanged': "語言已變更! 重新載入頁面...",
	'wlloaded': "白名單已載入!",
	'wladded': "已添加至白名單!",
	'wlsaved': "白名單儲存成功!",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "錯誤的參數",
	'messageempty': "無訊息",
	'wladdfail': "添加玩家到白名單失敗!",
	'wlsavefail': "儲存白名單失敗!請重試",
	'playernotconnected': "玩家未連線",
	'playernotbanned': "玩家並沒有被黑名單",
	'ipnotbanned': "IP沒有被黑名單",
	'langnotfound': "找不到語言!"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "登入 milkAdmin",
	'langUsername': "用戶名",
	'langPassword': "密碼",
	'langLogin': "登入"
};

var jsLogin = {
	'welcome': "歡迎使用! 頁面載入中...",
	'UnknownError': "未知的錯誤! 請重試!",
	'NotResponse': "伺服器沒有回應!請重試",
	'invalidlogin': "用戶名或密碼錯誤!"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "建立帳號",
	'langUsername': "用戶名",
	'langPassword': "密碼",
	'langCreateAccount': "建立帳號"
};

var jsRegister = {
	'created': "帳號已建立! 頁面讀取中...",
	'notadmin': "你不能使用\"admin\"做為用戶名",
	'baduser': "請輸入有效的用戶名及密碼",
	'UnknownError': "未知的錯誤! 請重試!",
	'NotResponse': "伺服器沒有回應!請重試",
	'error': "無效的用戶名及密碼"
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "啟動伺服器"
};

///////////////////////////////////////////////
//
//   Language for wait.html
//
///////////////////////////////////////////////

var langWait = {
	'langPleaseWait20Seconds': "請等待20秒"
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
	'Complete': "備份已完成! 啟動伺服器...",
	'UnknownError': "未知的錯誤! 請重試!",
	'NotResponse': "伺服器沒有回應!請重試"
};