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
	'lang1Yes': "はい",
	'lang1No': "いいえ",
	'lang1OK': "OK",
	'lang1Add': "追加",
	'lang1Cancel': "キャンセル",
	'lang1Send': "送信",
	'lang1Change': "変更",
	'lang1On': "オン",
	'lang1Off': "オフ",
	'lang1ReloadList': "リストをリロード",
	'lang1IPAddress': "IPアドレス",
	'lang1Player': "プレイヤー",
	'lang1Action': "アクション",
	'lang1User': "ユーザーネーム",
	'lang1Password': "パスワード",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "概要...",
	'langLogout': "ログアウト",
	'langChooseLanguage': "言語を選んで下さい：",
	'langTranslate': "あなたの言語に翻訳します。",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "新しいバージョンが利用可能",
	'langVersionAvailable': "milkAdmin v_VER_ is available", // milkAdmin v1.0 is available
	'langUpdateNow': "今すぐ更新しますか？",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "概要...",
	'langDesign': "デザイン＆プログラミング",
	'langUpdates': "更新：",
	'langThanks': "感謝：",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Banオプション",
	'langKickPlayer': "キックプレイヤー",
	'langBanPlayerName': "Banプレイヤー名",
	'langBanIPAddress': "Ban IPアドレス",
	'langCause': "原因",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "サーバーをリスタート",
	'langReloadServer': "サーバーをリロード",
	'langBackupStart': "バックアップ開始",
	'langSaveMap': "ワールドデータを保存",
	'langStopServer': "サーバーを停止",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "サーバー",
	'langConsoleSM': "コンソール",
	'langPluginsSM': "プラグイン",
	'langBackupsSM': "バックアップ",
	'langPlayersSM': "プレイヤー",
	'langBanListSM': "Banリスト",
	'langWhitelistSM': "ホワイトリスト",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "最終リスタート",
	'langAmountPlayersOnline': "オンラインのプレイヤー",
	'langFreeMemory': "利用可能メモリ",
	'langUsedMemory': "利用中メモリ",
	'langTotalMemory': "トータルメモリ",
	'langMaxMemory': "最大メモリ",
	'langTitleMemory': "Memory Data - <b>Free Memory</b>: Show the amount of free memory in the Minecraft Server.<br><b>Used Memory</b>: Show the amount of used memory in the Minecraft Server.<br><b>Total Memory</b>: Show the total amount of memory that the Minecraft Server use right now.<br><b>Max Memory</b>: Show the maximum amount of memory that the Minecraft Server will attempt to use.",
	'langFreeSpace': "空き容量",
	'langUsedSpace': "使用済み容量",
	'langTotalSpace': "総容量",
	'langTitleSpace': "Space Data - Based on &quot;Backup Folder&quot; directory.",
	'langServerVersion': "サーバーバージョン",
	'langCraftbukkitBuild': "Craftbukkitビルド",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "サーバーの情報",
	'langBroadcastMessage': "ブロードキャストメッセージ",
	'langTitleBroadcastMessage': "Broadcast Message - Send a message to all players whitout tag.",
	'langLevelName': "メインレベルネーム",
	'langTitleLevelName': "The value will be used as world name and as folder name.<br>You may also copy your saved game folder here, and change the name to the same as that folder\'s to load it instead. ",
	'langMCIPPORT': "MinecraftトサーバのIPとポート",
	'langTitleMCIPPORT': "<b>IP:</b> Set this if you want the server to bind to a particular IP. It is strongly recommended that you leave server-ip blank!<br><b>Port:</b> Changes the port the server is hosting on. This port must be forwarded if the server is going through a router.<br><b>Valid values:</b><ul><li><b>IP:</b> Blank, or the IP you want your server to run on.</li><li><b>Port:</b> A number between <b>1-65535</b>. Default: <b>25565</b><ul><li>Should be greater than 20000 to avoid conflicts with system reserved ports.</li></ul></li></ul>",
	'langMaxPlayers': "最大プレイヤー数",
	'langTitleMaxPlayers': "The max numbers of players that can play on the server at the same time.<br><i>Note that if more players are on the server it will use more resources.</i><br><i>Note also, admin connections are not counted against the max players.</i><br><b>Valid values:</b><ul><li>A number between <b>0-255</b>.</li></ul>",
	'langViewDistance': "視野距離",
	'langTitleViewDistance': "The amount of chunks the server sends to the players.<br><b>Valid values:</b><ul><li>A number between <b>3-15</b>. Default: <b>10</b></li></ul>",
	'langHoldMessage': "固定メッセージ",
	'langTitleHoldMessage': "Message that MCSODRTK will display when Server is on Hold.<br><i>Needs MinecraftRemoteToolkit</i>",
	'langAllowNether': "ネザーを許可",
	'langTitleAllowNether': "Allows players to travel to the Nether.<ul><li><b>true</b> = The server will allow Portals to send players to the Nether.</li><li><b>false</b> = Portals will not travel to the Nether.</li></ul>",
	'langSpawnMonsters': "スポーンするモンスター",
	'langTitleSpawnMonsters': "Set true if you want monsters to be spawned at night, false if you don\'t.<br><i>Tip: if you have major lag, turn this off.</i><ul><li><b>true</b> = Monsters will appear at night and in the dark.</li><li><b>false</b> = No monsters.</li></ul>",
	'langSpawnAnimals': "スポーンする動物",
	'langTitleSpawnAnimals': "Animals will be able to spawn.<ul><li><b>true</b> = Animals spawn as normal.</li><li><b>false</b> = Animals will immediately vanish.</li></ul>",
	'langOnlineMode': "オンラインモード(名前の確認)",
	'langTitleOnlineMode': "Server checks connecting players against minecraft\'s account database.<br>Only set this to false if your server is not connected to the Internet.<ul><li><b>true</b> = The server will assume it has an Internet connection and check in minecraft.net every connecting player.</li><li><b>false</b> = The server will not attempt to check connecting players.</li></ul>",
	'langPVP': "プレイヤーvsプレイヤー(PVP)",
	'langTitlePVP': "Enable Player vs Player on the server.<br><i>Note: Hitting a player while having PvP set to false and having tamed wolfs will still cause the wolfs<br>attacking the attacked player.</i><ul><li><b>true</b> = Players will be able to kill each other.</li><li><b>false</b> = Players cannot kill other players.</li></ul>",
	'langAllowFlight': "飛行を許可する",
	'langTitleAllowFlight': "Will allow users to use flight/no-clip on your server, if they have an mod that provides flight/no-clip installed.<ul><li><b>true</b> = Flight/no clip is allowed, and used if the player have a no-clip mod installed.</li><li><b>false</b> = Flight/no-clip is not allowed.</li></ul>",
	'langWhitelist': "ホワイトリスト",
	'langTitleWhitelist': "Enable a white list on the server. With a white list enabled, users not on the white list will be unable to connect.<ul><li><b>true</b> = The file white-list.txt is used to generate the white list.</li><li><b>false</b> = No white list is used.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "ホワイトリスト",
	'langWLAddPlayer': "プレイヤーを追加",
	'langWLDeleteSelected': "選択したものを削除する",
	'langWLSaveChanges': "変更を保存する",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "プラグインを有効にする",
	'langEnable': "有効",
	'langPluginName': "プラグイン名",
	'langVersion': "バージョン",
	'langReloadTheList': "リストをリロード",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "バックアップを選択",
	'langRestoreBackup': "バックアップを復元",
	'langDeleteBackup': "バックアップを削除",
	'langBackupClear': "Remove previous folders before restoring the backup",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "ユーザー管理",
	'langIP': "IP",
	'langPort': "ポート",
	'langKill': "キル",
	'langKick': "キック",
	'langBanName': "Ban",
	'langBanIP': "Ban IP",
	'langAmount': "総時間",
	'langShootArrow': "弓矢を射る",
	'langShootFireball': "ファイヤーボールを撃つ",
	'langThrowEgg': "卵を投げる",
	'langThrowSnowball': "雪玉を投げる",
	'langTeleportToPlayer': "プレイヤーへテレポート",
	'langTeleportToCoord': "座標にテレポート",
	'langChangeName': "名前の変更",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Ban IPアドレス、もしくはプレイヤー名",
	'langClearFilter': "フィルターをクリア",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "新しい管理者を登録",
	'langCreateAdmin': "管理者を作成"
};

var jsIndex = {
	'sProcessing': "処理中...",
	'sLengthMenu': "メニュープラグインを見る", // Show 10 plugins
	'sZeroRecords': "プラグインが見つかりませんでした",
	'sInfo': "_START_->_END_件目　_TOTAL_件中", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "プラグインが見つかりませんでした",
	'sInfoFiltered': "_MAX_件から検索", // (filter of 17 plugins)
	'sSearch': "プラグインを検索:",
	'sFirst': "最初",
	'sPrevious': "前へ",
	'sNext': "次へ",
	'sLast': "最後",
	'ReloadServer': "サーバーをリロードしました！",
	'RestartServer': "サーバーをリスタートしました！",
	'StopServer': "サーバーを停止しました！",
	'EnablePlugin': "プラグインを有効にしました！",
	'StartBackup': "バックアップを開始！",
	'RTKNeeded': "You need the RemoteToolkit to use this function!",
	'NoUsersOnline': "オンラインのプレイヤーはいません",
	'NoBackups': "There are no backups!",
	'activate': "アクティブ",
	'deactivate': "非アクティブ",
	'unban': "Ban解除",
	'MustLogin': "ログインが必要です！",
	'UnknownError': "不明なエラー！再度試してください",
	'NotResponse': "サーバの反応がありません！再度試してください",
	'InvalidIP': "無効なIPアドレス",
	'UpdateNow': "今すぐ更新",
	'later': "後で"
};

var jsAjax = {
	'accountcreated': "アカウントを作成しました！",
	'worldsaved': "ワールドデータを保存しました！",
	'messagesent': "メッセージを送信しました",
	'broadcastedmessage': "メッセージを送信しました",
	'forcestop': "強制停止",
	'plugindisabled': "_NAME_　を無効にしました", // PluginX's plugin disabled.
	'pluginenabled': "_NAME_を有効にしました", // PluginX's plugin enabled.
	'editedproperty': "設定を変更しました",
	'worldbackedup': "ワールドデータをバックアップしました",
	'deletebackup': "バックアップを削除しました",
	'kickplayer': "_NAME_をサーバーからキックしました", // Sharkiller kicked from the server
	'itemsgiven': "_NAMEさんは_ITEM_を_AMOUNT_個、手に入れました。", // Sharkiller was given 64 units of IRON
	'itemsremoved': "_NAME_ removed _AMOUNT_ units of _ITEM_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_をキルしました", // Sharkiller killed
	'healthchanged': "_NAME_\'s health changed to _AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_をBanしました！", // Sharkiller was banned!
	'playerunbanned': "_NAME_のBanを解除しました！", // Sharkiller was unbanned!
	'ipbanned': "_IP_をBanしました！", // 19.64.84.24 was banned!
	'ipunbanned': "_IP_のBanを解除しました！", // 19.64.84.24 was unbanned!
	'arrowshooted': "矢を射る！", 
	'fireballshooted': "ファイヤーボールを撃ちました！", 
	'throwsnowball': "雪玉を投げました！",
	'throwegg': "卵を投げる！",
	'changename': "_古い_  名前を _新しい_ に変更する。", // Sharkiller's name changed to Peter
	'playerteleported': "プレイヤーはテレポートしました。",
	'langchanged': "言語を変更しました！ページを更新して下さい。。。",
	'wlloaded': "ホワイトリストをロードしました！",
	'wladded': "ホワイトリストに追加しました！",
	'wlsaved': "ホワイトリストの保存に成功しました！",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "パラメーターが不正です。",
	'messageempty': "メッセージがありません。",
	'wladdfail': "ホワイトリストへの追加に失敗しました！",
	'wlsavefail': "ホワイトリストの保存に失敗しました！再度試してください",
	'playernotconnected': "プレイヤーは接続されていません。",
	'playernotbanned': "プレイヤーはBanされていません。",
	'ipnotbanned': "IPはBanされていません。",
	'langnotfound': "言語が見つかりませんでした"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "MilkAdminでログイン",
	'langUsername': "ユーザー名",
	'langPassword': "パスワード",
	'langLogin': "ログイン"
};

var jsLogin = {
	'welcome': "ようこそ！ページを読み込んでいます。。。",
	'UnknownError': "不明なエラー！再度試してください",
	'NotResponse': "サーバの反応がありません！再度試してください",
	'invalidlogin': "ユーザー名とパスワードが無効です！"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "アカウントを作成",
	'langUsername': "ユーザー名",
	'langPassword': "パスワード",
	'langCreateAccount': "アカウントを作成"
};

var jsRegister = {
	'created': "アカウントを作成しました！ページをロード中...",
	'notadmin': "\"admin\"はユーザー名に使用することができません",
	'baduser': "有効なユーザー名とパスワードを入力して下さい。",
	'UnknownError': "不明なエラー！再度試してください",
	'NotResponse': "サーバの反応がありません！再度試してください",
	'error': "ユーザー名とパスワードが無効です。"
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "サーバーをスタート"
};

///////////////////////////////////////////////
//
//   Language for wait.html
//
///////////////////////////////////////////////

var langWait = {
	'langPleaseWait20Seconds': "20秒待って下さい"
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
	'Complete': "バックアップが完了しました！サーバーを開始します・・・",
	'UnknownError': "不明なエラー！再度試してください",
	'NotResponse': "サーバの反応がありません！再度試してください"
};