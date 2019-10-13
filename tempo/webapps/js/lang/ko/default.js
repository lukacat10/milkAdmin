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
	'lang1Yes': "네",
	'lang1No': "아니오",
	'lang1OK': "확인",
	'lang1Add': "추가",
	'lang1Cancel': "취소",
	'lang1Send': "보내기",
	'lang1Change': "바꾸기",
	'lang1On': "켜기",
	'lang1Off': "끄기",
	'lang1ReloadList': "리스트 리로드",
	'lang1IPAddress': "IP주소",
	'lang1Player': "유저",
	'lang1Action': "상태",
	'lang1User': "이름",
	'lang1Password': "비밀번호",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "정보...",
	'langLogout': "로그아웃",
	'langChooseLanguage': "언어 선택:",
	'langTranslate': "사용자의 언어로 번역하기",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "새로운 버젼 출시",
	'langVersionAvailable': "밀크어드민 v_VER_는 최신버젼입니다.", // milkAdmin v1.0 is available
	'langUpdateNow': "업데이트 하시겠습니까?",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "밀크어드민 정보",
	'langDesign': "프로그래밍 & 디자인",
	'langUpdates': "업데이트:",
	'langThanks': "감사합니다:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "밴 옵션",
	'langKickPlayer': "유저 킥",
	'langBanPlayerName': "유저 밴",
	'langBanIPAddress': "IP밴",
	'langCause': "이유",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "서버 다시시작",
	'langReloadServer': "서버 다시로드",
	'langBackupStart': "백업 시작",
	'langSaveMap': "월드 저장",
	'langStopServer': "서버 중지",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "서버",
	'langConsoleSM': "콘솔",
	'langPluginsSM': "플러그인",
	'langBackupsSM': "백업",
	'langPlayersSM': "유저 관리",
	'langBanListSM': "밴 리스트",
	'langWhitelistSM': "White리스트",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "마지막으로 다시시작한날",
	'langAmountPlayersOnline': "유저 온라인수",
	'langFreeMemory': "Free 메모리",
	'langUsedMemory': "사용중인 메모리",
	'langTotalMemory': "모든 메모리",
	'langMaxMemory': "최대 메모리",
	'langTitleMemory': "메모리 데이터 - <B>남은 메모리</B>: 마인크래프트 프리메모리를 보여줍니다. <BR><B>사용중인 메모리</B>: 마인크래프트 서버에 사용중인 메모리를 보여줍니다. <BR><B>총 메모리</B>:마인크래프트 서버의 총 메모리를 보여줍니다. <BR><B>최대 메모리</B>: 마인크래프트 서버에서 최대 사용가능한 메모리를 보여줍니다.",
	'langFreeSpace': "남은 공간",
	'langUsedSpace': "사용중인 공간",
	'langTotalSpace': "총 메모리",
	'langTitleSpace': "데이터 공간 - 백업데이터 공간을 기반으로 합니다.",
	'langServerVersion': "서버 버젼",
	'langCraftbukkitBuild': "버킷 필드",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "서버 정보",
	'langBroadcastMessage': "메시지 방송",
	'langTitleBroadcastMessage': "메시지 방송 - 모든 유저에게 메시지를 보냅니다.",
	'langLevelName': "메인 레벨 이름",
	'langTitleLevelName': "값은 월드 이름을 사용 또는 폴더 이름을 사용한다. <BR>또한 당신의 세이브파일을 이 폴더에 복사 해야 할 지도 모른다. 그리고 대신 그것을 읽어 해당 폴더와 같은이름 으로 변경합니다.",
	'langMCIPPORT': "마인크래프트 서버 아이피와 포트",
	'langTitleMCIPPORT': "<B>IP:</B>만약 당신이 서버아이피가 마음에 들지않거나 다른 아이피를 원한다면 바꾸세요. 하지만 그냥 안바꾸는걸 추천합니다!<BR><B>Port:</B>당신 서버의 포트를 바꿉니다..<BR><B>설정하는법:</B><UL><LI><B>IP:</B> 당신이 하고싶은 아이피로 설정하세요.</LI><LI><B>Port:</B> 숫자로 <B>1-65535</B> 범위내에 설정합니다. 처음값: <B>25565</B><UL><LI>되도록이면 20000은 설정하세요. 시스템 포트와 충돌할수있습니다.</LI></UL></LI></UL>",
	'langMaxPlayers': "최대 유저수",
	'langTitleMaxPlayers': "서버에 들어올수있는 최대 유저수를 설정합니다.<BR><I>만약 서버에 더많은 플래이어가 들어오면 더많은 리소스를 사용할것입니다. </I><BR><I>게다가, 어드민은 최대 플레이어수에 포함하지 않습니다.</I><BR><B>설정하는법:</B><UL><LI>숫자로 <B>0-255</B>범위내로 설정합니다.</LI></UL>",
	'langViewDistance': "볼수있는 거리",
	'langTitleViewDistance': "서버가 얼마나 많은양의 chunk를 플레이어에게 보낼것인지 설정합니다.<BR><B>설정하는법:</B><UL><LI>숫자로 <B>3-15</B>범위내로 설정합니다. 기본값: <B>10</B></LI></UL>",
	'langHoldMessage': "서버열때 메시지",
	'langTitleHoldMessage': "서버열때 보여주는 메시지 입니다.<BR><I>MinecraftRemoteToolkit이 필요합니다.</I>",
	'langAllowNether': "지옥 허락 여부",
	'langTitleAllowNether': "유저가 지옥에 갈수있는지 설정합니다..<UL><LI><B>true</B> = 유저가 포탈을 통해서 지옥에 갈수있습니다.</LI><LI><B>false</B> = 유저가 포탈을 이용해도 지옥에 갈수없습니다.</LI></UL>",
	'langSpawnMonsters': "몬스터 스폰",
	'langTitleSpawnMonsters': "몬스터가 출현하는 여부를 결정합니다.<BR><I>팁: 당신의 처지가 위험하거나 중요할떄 사용해보세요.</I><UL><LI><B>true</B> = 밤에 몬스터가 나옵니다.</LI><LI><B>false</B> = 몬스터가 나오지 않습니다.</LI></UL>",
	'langSpawnAnimals': "동물 스폰",
	'langTitleSpawnAnimals': "동물의 생성여부를 결정합니다. <UL><LI><B>true</B> = 동물이 스폰됩니다. </LI><LI><B>false</B> = 동물이 나오지 않습니다.</LI></UL>",
	'langOnlineMode': "정품 모드",
	'langTitleOnlineMode': "유저가 정품인지 확인합니다.(즉 정품만 할수있게 합니다.)<BR>만약 false로 하면 minecraft.net서버와 연결을 끊습니다.<UL><LI><B>true</B> = 유저가 정품이 아닐경우 들어올수 없습니다.</LI><LI><B>false</B> = minecraft.net서버와 연결을 끊기때문에 유저의 정품여부를 확인하지않습니다.</LI></UL>",
	'langPVP': "유저 vs 유저",
	'langTitlePVP': "유저vs유저로 싸울수있게 합니다.<BR><I>유저가 맞는동안 pvp를 false로 설정하고 길들여진 늑대가 있을경우 늑대는 <BR>공격을 가한 유저를 공격하지 않고 가만히 있습니다.</I><UL><LI><B>true</B> = 유저끼리 공격이 가능합니다.</LI><LI><B>false</B> = 유저끼리 공격이 불가능 합니다.</LI></UL>",
	'langAllowFlight': "날기/no-clip 권한",
	'langTitleAllowFlight': "유저의 모드를 통한 날기/노클립을 허용합니다.<UL><LI><B>true</B> = 유저는 날거나 노클립이 가능합니다.</LI><LI><B>false</B> = 유저는 날기와 노클립을 할수없습니다.</LI></UL>",
	'langWhitelist': "White리스트",
	'langTitleWhitelist': "White리스트를 사용하는 여부를 결정합니다.<UL><LI><B>true</B> = White-list.txt에 적힌 유저만 접속할수있습니다. 즉 white리스트 사용</LI><LI><B>false</B> = White리스트를 사용하지 않습니다.</LI></UL>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "White리스트",
	'langWLAddPlayer': "유저 추가",
	'langWLDeleteSelected': "선택된것 삭재",
	'langWLSaveChanges': "바꾼것 저장",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "플러그인 활성화",
	'langEnable': "활성화",
	'langPluginName': "플러그인 이름",
	'langVersion': "버젼",
	'langReloadTheList': "플러그인 리로드",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "고르세요.",
	'langRestoreBackup': "백업 복구",
	'langDeleteBackup': "백업 삭재",
	'langBackupClear': "지금까지의 백업 복구파일을 삭재합니다.",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "유저 관리",
	'langIP': "IP",
	'langPort': "포트",
	'langKill': "죽이기",
	'langKick': "킥",
	'langBanName': "밴",
	'langBanIP': "IP 밴",
	'langAmount': "남은 시간",
	'langShootArrow': "화살 발사시키기",
	'langShootFireball': "파이어 볼을 날린다",
	'langThrowEgg': "계란 던지기",
	'langThrowSnowball': "눈뭉치 던지기",
	'langTeleportToPlayer': "다른유저에게 순간이동",
	'langTeleportToCoord': "다음 위치로 순간이동",
	'langChangeName': "이름 바꾸기",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "IP밴/유저밴",
	'langClearFilter': "필터 클리어",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "어드민 가입",
	'langCreateAdmin': "어드민 생성"
};

var jsIndex = {
	'sProcessing': "로딩...",
	'sLengthMenu': "_MENU_플러그인 보기", // Show 10 plugins
	'sZeroRecords': "플러그인이 없습니다.",
	'sInfo': "_START_부터-_END_까지 보는중, 총_TOTAL_개의 플러그인", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "보여줄 플러그인이 없습니다.",
	'sInfoFiltered': "(_MAX_플러그인 필터)", // (filter of 17 plugins)
	'sSearch': "플러그인 찿기",
	'sFirst': "처음",
	'sPrevious': "이전",
	'sNext': "다음",
	'sLast': "마지막",
	'ReloadServer': "서버 다시로드 합니다.",
	'RestartServer': "서버 다시시작 합니다.",
	'StopServer': "서버를 중지합니다.",
	'EnablePlugin': "플러그인을 활성화 합니다!",
	'StartBackup': "백업 시작!",
	'RTKNeeded': "RemoteToolkit기능이 필요합니다!",
	'NoUsersOnline': "표시할 유저가 없습니다.",
	'NoBackups': "여기에는 백업이 없습니다.",
	'activate': "활성화 하기",
	'deactivate': "비활성화 하기",
	'unban': "밴 풀기",
	'MustLogin': "로그인을 해야합니다!",
	'UnknownError': "알 수 없는 에러입니다! 다시시도하세요!",
	'NotResponse': "서버가 응답하지 않습니다! 다시시도 하세요.",
	'InvalidIP': "유효하지 않는 IP입니다.",
	'UpdateNow': "업데이트를 합니다.",
	'later': "나중에"
};

var jsAjax = {
	'accountcreated': "계정 생성",
	'worldsaved': "월드 저장완료.",
	'messagesent': "메세지를 보냈습니다.",
	'broadcastedmessage': "전체 메시지를 보냈습니다.",
	'forcestop': "강제 정지",
	'plugindisabled': "_NAME_ 플러그인 비활성화", // PluginX's plugin disabled.
	'pluginenabled': "_NAME_ 플러그인 활성화", // PluginX's plugin enabled.
	'editedproperty': "설정 변경완료.",
	'worldbackedup': "월드 백업 완료",
	'deletebackup': "백업 삭재 완료",
	'kickplayer': "_NAME_ 킥 완료", // Sharkiller kicked from the server
	'itemsgiven': "_NAME_ 에게 _ITEM_을(를) _AMOUNT_만큼 줬습니다.", // Sharkiller was given 64 units of IRON
	'itemsremoved': "_NAME_의 _ITEM_을(를) _AMOUNT_만큼 없앴습니다.", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ 을(를) 죽였습니다.", // Sharkiller killed
	'healthchanged': "_NAME_의 채력을 _AMOUNT_/20 으로 바꿨습니다.", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_ 을(를) 밴시켰습니다.", // Sharkiller was banned!
	'playerunbanned': "_NAME_ 의 밴을 풀었습니다.", // Sharkiller was unbanned!
	'ipbanned': "_IP_ 을(를) 밴시켰습니다.", // 19.64.84.24 was banned!
	'ipunbanned': "_IP_ 의 밴을 풀었습니다.", // 19.64.84.24 was unbanned!
	'arrowshooted': "화살 발사!", 
	'fireballshooted': "파이어볼을 던졌습니다.", 
	'throwsnowball': "눈뭉치를 던졌습니다.",
	'throwegg': "달걀 투척!",
	'changename': "_OLD_ 에서 _NEW_으로 이름이 바뀌었습니다.", // Sharkiller's name changed to Peter
	'playerteleported': "유저에게 순간이동 시켰습니다.",
	'langchanged': "언어가 변경되었습니다! 페이지를 다시 로드합니다.",
	'wlloaded': "Whitelist 로드완료!",
	'wladded': "White리스트에 추가했습니다.",
	'wlsaved': "White리스트에 성공적으로 저장하였습니다!",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "이상한 매개변수 입니다.",
	'messageempty': "메시지를 써주세요.",
	'wladdfail': "Whitelist에 유저를 추가하는중 오류가 생겼습니다.",
	'wlsavefail': "Whitelist를 저장하는중 오류가 생겼습니다! 다시시도 하세요!",
	'playernotconnected': "유저가 온라인 상태가 아닙니다.",
	'playernotbanned': "유저가 밴 상태가 아닙니다.",
	'ipnotbanned': "그 IP는 밴 상태가 아닙니다",
	'langnotfound': "언어가 존재하지 않습니다."
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "로그인",
	'langUsername': "이름",
	'langPassword': "비밀번호",
	'langLogin': "로그인"
};

var jsLogin = {
	'welcome': "환영합니다! 페이지 로딩중..",
	'UnknownError': "알 수 없는 에러입니다! 다시시도하세요!",
	'NotResponse': "서버가 응답하지 않습니다! 다시시도 하세요.",
	'invalidlogin': "이름과 비밀번호가 유효하지 않습니다."
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "계정 생성",
	'langUsername': "이름",
	'langPassword': "비밀번호",
	'langCreateAccount': "계정 생성"
};

var jsRegister = {
	'created': "계정이 생성되었습니다. 로딩중..",
	'notadmin': "\"admin\" 이란 이름으로 정하실수 없습니다.",
	'baduser': "이름이나 비밀번호를 입력하세요.",
	'UnknownError': "알 수 없는 에러입니다! 다시시도하세요!",
	'NotResponse': "서버가 응답하지 않습니다! 다시시도 하세요.",
	'error': "유효하지않은 이름과 비밀번호입니다."
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "서버 시작"
};

///////////////////////////////////////////////
//
//   Language for wait.html
//
///////////////////////////////////////////////

var langWait = {
	'langPleaseWait20Seconds': "20초 기다리세요."
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "백업"
};

var jsBackup = {
	'Complete': "백업 완료! 서버 시작중...",
	'UnknownError': "알 수 없는 에러입니다! 다시시도하세요!",
	'NotResponse': "서버가 응답하지 않습니다! 다시시도 하세요."
};