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
	'lang1OK': "确定",
	'lang1Add': "添加",
	'lang1Cancel': "取消",
	'lang1Send': "发送",
	'lang1Change': "更改",
	'lang1On': "开",
	'lang1Off': "关",
	'lang1ReloadList': "重载列表",
	'lang1IPAddress': "IP地址",
	'lang1Player': "玩家",
	'lang1Action': "动作",
	'lang1User': "用户名",
	'lang1Password': "密码",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "关于……",
	'langLogout': "登出",
	'langChooseLanguage': "选择语言：",
	'langTranslate': "翻译成你的语言",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "有新的版本",
	'langVersionAvailable': "milkAdmin v_VER_ 可更新", // milkAdmin v1.0 is available
	'langUpdateNow': "你想现在更新吗？",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "关于milkAdmin",
	'langDesign': "设计及制作者：",
	'langUpdates': "更新：",
	'langThanks': "感谢：<br>PureDark（中文翻译）",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Ban选项",
	'langKickPlayer': "踢出玩家",
	'langBanPlayerName': "Ban玩家ID",
	'langBanIPAddress': "BanIP地址",
	'langCause': "原因",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "重启服务器",
	'langReloadServer': "重载服务器",
	'langBackupStart': "开始备份",
	'langSaveMap': "储存世界",
	'langStopServer': "停止服务器",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "服务器",
	'langConsoleSM': "控制台",
	'langPluginsSM': "插件",
	'langBackupsSM': "备份",
	'langPlayersSM': "玩家",
	'langBanListSM': "Ban名单",
	'langWhitelistSM': "白名单",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "上一次重启",
	'langAmountPlayersOnline': "玩家在线人数",
	'langFreeMemory': "可用内存",
	'langUsedMemory': "占用内存",
	'langTotalMemory': "总内存",
	'langMaxMemory': "最大内存",
	'langTitleMemory': "内存信息 - <b>可用内存</b>: 显示Minecraft服务器可用的内存.<br><b>已用内存</b>: 显示Minecraft服务器已用内存.<br><b>Total Memory</b>: 显示Minecraft服务器总共占用的内存.<br><b>最大内存</b>: 显示Minecraft服务器最高允许使用的内存.",
	'langFreeSpace': "可用空间",
	'langUsedSpace': "已用空间",
	'langTotalSpace': "总空间",
	'langTitleSpace': "硬盘空间信息 - 基于 &quot;备份目录&quot; 目录.",
	'langServerVersion': "服务器版本",
	'langCraftbukkitBuild': "Craftbukkit 版本",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "服务器资料",
	'langBroadcastMessage': "广播消息",
	'langTitleBroadcastMessage': "广播信息 - 给所有玩家发送一条没有标签的信息.",
	'langLevelName': "主要Level名字",
	'langTitleLevelName': "该值将被用作世界名和文件夹名.<br>你也可以将你的世界地图复制到这, 并将文件夹名改为对应的名字来让它取代你原来的地图. ",
	'langMCIPPORT': "Minecraft服务器IP和端口",
	'langTitleMCIPPORT': "<b>IP:</b> 设置这个来让服务器绑定至一个固定的IP. 我们强烈建议你将IP留空!<br><b>端口:</b> 设置你服务器所占用的端口. <br><b>有效值:</b><ul><li><b>IP:</b> 留空，或填上你想让服务器使用的IP.</li><li><b>端口:</b> 数字介于<b>1-65535</b>. 默认: <b>25565</b><ul><li>应该大于20000来避免与系统调用的端口冲突.</li></ul></li></ul>",
	'langMaxPlayers': "最大玩家数",
	'langTitleMaxPlayers': "服务器允许的最高玩家同时在线数.<br><i>注意越多玩家同时在线会占用更多资源.</i><br><i>另外需要注意的是，管理员不被计算在最高玩家在线数内.</i><br><b>有效值:</b><ul><li>数字介于<b>0-255</b>.</li></ul>",
	'langViewDistance': "视野",
	'langTitleViewDistance': "服务器会发送给一个玩家的最大Chunk数.<br><b>有效值:</b><ul><li>数字介于<b>3-15</b>. 默认: <b>10</b></li></ul>",
	'langHoldMessage': "保留的信息",
	'langTitleHoldMessage': "当服务器暂停时 MCSODRTK的信息会显示.<br><i>需要 MinecraftRemoteToolkit 插件</i>",
	'langAllowNether': "开启地狱",
	'langTitleAllowNether': "允许玩家传送到地狱.<ul><li><b>true</b> = 服务器允许玩家通过地狱门传送到地狱.</li><li><b>false</b> = 地狱门不会将玩家传送到地狱.</li></ul>",
	'langSpawnMonsters': "怪物刷出",
	'langTitleSpawnMonsters': "设置成true，如果你想让怪物在晚上刷出；设置成 false 如果你不想。<br><i>提示:：如果你的延迟太严重，关闭它。</i><ul><li><b>true</b> = 怪物会在暗处刷出。</li><li><b>false</b> = 禁止怪物。</li></ul>",
	'langSpawnAnimals': "动物刷出",
	'langTitleSpawnAnimals': "动物将会被刷出。<ul><li><b>true</b> = 动物正常刷出。</li><li><b>false</b> = 动物刷出后会立即消失。</li></ul>",
	'langOnlineMode': "在线模式",
	'langTitleOnlineMode': "通过minecraft的帐户数据库检查连接中的玩家。<br>只有在你的服务器没有连接只Internet时设置为False.<ul><li><b>true</b> = 服务器会推断它拥有一个网络帐户数据库并通过minecraft.net检查每一个连接的玩家。</li><li><b>false</b> = 服务器不会试图检测玩家的ID.</li></ul>",
	'langPVP': "玩家对玩家",
	'langTitlePVP': "在服务器上开启 玩家 vs 玩家 。<br><i>注意：当PVP设置成False时拥有驯服的狼并攻击玩家仍旧会使你的狼<br>攻击被攻击的玩家。</i><ul><li><b>true</b> = 玩家可以自相残杀。</li><li><b>false</b> = 玩家无法伤害玩家。</li></ul>",
	'langAllowFlight': "允许飞行",
	'langTitleAllowFlight': "允许玩家在服务器上飞行，如果他们安装了提供飞行功能的MOD。<ul><li><b>true</b> = 允许飞行，如果玩家安装了提供飞行功能的MOD。</li><li><b>false</b> = 不允许飞行。</li></ul>",
	'langWhitelist': "白名单",
	'langTitleWhitelist': "开启白名单。 当白名单开启时，不在白名单上的玩家将无法连接入服务器。<ul><li><b>true</b> = white-list.txt 文件将被用来储存白名单。</li><li><b>false</b> = 禁用白名单。</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "白名单",
	'langWLAddPlayer': "添加玩家",
	'langWLDeleteSelected': "删除所选",
	'langWLSaveChanges': "保存改变",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "已启用插件",
	'langEnable': "启用",
	'langPluginName': "插件名",
	'langVersion': "版本",
	'langReloadTheList': "重载列表",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "选择你的备份",
	'langRestoreBackup': "恢复至备份",
	'langDeleteBackup': "删除备份文件",
	'langBackupClear': "在备份前移除之前的文件夹",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "用户管理",
	'langIP': "IP",
	'langPort': "端口",
	'langKill': "杀掉",
	'langKick': "踢",
	'langBanName': "Ban",
	'langBanIP': "Ban IP",
	'langAmount': "次数",
	'langShootArrow': "射箭",
	'langShootFireball': "射火球",
	'langThrowEgg': "扔蛋",
	'langThrowSnowball': "扔雪球",
	'langTeleportToPlayer': "传送至玩家",
	'langTeleportToCoord': "传送至指定坐标",
	'langChangeName': "改变名字",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Ban IP 或 名字",
	'langClearFilter': "清空过滤器",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "注册新管理员",
	'langCreateAdmin': "创建管理员"
};

var jsIndex = {
	'sProcessing': "正在处理...",
	'sLengthMenu': "显示_MENU_ 插件", // Show 10 plugins
	'sZeroRecords': "找不到匹配的插件",
	'sInfo': "正在显示_START_->_END_ 共 _TOTAL_个插件", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "没有可供显示的插件",
	'sInfoFiltered': "(最高 _MAX_ 个插件的过滤器)", // (filter of 17 plugins)
	'sSearch': "搜索插件：",
	'sFirst': "第一页",
	'sPrevious': "上一页",
	'sNext': "下一页",
	'sLast': "最后一页",
	'ReloadServer': "正在重载服务器",
	'RestartServer': "正在重启服务器",
	'StopServer': "正在停止服务器",
	'EnablePlugin': "插件已启用！",
	'StartBackup': "开始备份！",
	'RTKNeeded': "你需要 RemoteToolkit 来使用这个功能!",
	'NoUsersOnline': "无玩家在线",
	'NoBackups': "没有已备份的文件！",
	'activate': "激活",
	'deactivate': "注销",
	'unban': "取消ban",
	'MustLogin': "你必须先登陆!",
	'UnknownError': "未知错误！再试一次！",
	'NotResponse': "服务器无响应! 请重试",
	'InvalidIP': "无效IP地址",
	'UpdateNow': "立即更新",
	'later': "以后再说"
};

var jsAjax = {
	'accountcreated': "成功创建账户！",
	'worldsaved': "成功保存世界！",
	'messagesent': "信息已发送",
	'broadcastedmessage': "信息已广播",
	'forcestop': "强制停止",
	'plugindisabled': "_NAME_\'s 的插件已禁用", // PluginX's plugin disabled.
	'pluginenabled': "_NAME_\'s plugin 已启用", // PluginX's plugin enabled.
	'editedproperty': "修改所有权",
	'worldbackedup': "世界成功备份！",
	'deletebackup': "备份已删除",
	'kickplayer': "_NAME_ 已从服务器上踢出", // Sharkiller kicked from the server
	'itemsgiven': "_NAME_ 被赠予了_AMOUNT_ 个单位的 _ITEM_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "_NAME_ 移除了 _AMOUNT_ 个单位的_ITEM_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ 被杀了", // Sharkiller killed
	'healthchanged': "_NAME_的生命变为_AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_ 被ban了！", // Sharkiller was banned!
	'playerunbanned': "_NAME_ 被取消ban了！", // Sharkiller was unbanned!
	'ipbanned': "_IP_ 被ban了！", // 19.64.84.24 was banned!
	'ipunbanned': "_IP_ 被取消ban了！", // 19.64.84.24 was unbanned!
	'arrowshooted': "射箭！", 
	'fireballshooted': "射出火球！", 
	'throwsnowball': "雪球扔出！",
	'throwegg': "扔蛋！",
	'changename': "_OLD_的名字改为了_NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "玩家传送了",
	'langchanged': "语言改变！正在重载页面……",
	'wlloaded': "白名单成功载入！",
	'wladded': "已增加到白名单！",
	'wlsaved': "白名单成功保存！",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "不正确的参数",
	'messageempty': "空白信息",
	'wladdfail': "加入玩家至白名单失败！",
	'wlsavefail': "保存名单失败！ 请重试！",
	'playernotconnected': "玩家不在线",
	'playernotbanned': "玩家未被ban",
	'ipnotbanned': "IP未被ban",
	'langnotfound': "找不到语言！"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "登陆milkAdmin",
	'langUsername': "用户名",
	'langPassword': "密码",
	'langLogin': "登录"
};

var jsLogin = {
	'welcome': "欢迎！载入页面中……",
	'UnknownError': "未知错误！再试一次！",
	'NotResponse': "服务器无响应! 请重试",
	'invalidlogin': "无效的用户名或密码"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "创建一个账户",
	'langUsername': "用户名",
	'langPassword': "密码",
	'langCreateAccount': "创建账户"
};

var jsRegister = {
	'created': "账户成功创建！正在载入页面……",
	'notadmin': "你不能使用\"admin\" 作为用户名",
	'baduser': "请输入一个有效的用户名和密码",
	'UnknownError': "未知错误！再试一次！",
	'NotResponse': "服务器无响应! 请重试",
	'error': "无效的用户名或密码"
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "开启服务器"
};

///////////////////////////////////////////////
//
//   Language for wait.html
//
///////////////////////////////////////////////

var langWait = {
	'langPleaseWait20Seconds': "请等待20秒"
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "正在备份"
};

var jsBackup = {
	'Complete': "备份完成！启动服务器……",
	'UnknownError': "未知错误！再试一次！",
	'NotResponse': "服务器无响应! 请重试"
};