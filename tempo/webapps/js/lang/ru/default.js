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
	'lang1Yes': "Да",
	'lang1No': "Нет",
	'lang1OK': "OK",
	'lang1Add': "Добавить",
	'lang1Cancel': "Отменить",
	'lang1Send': "Отправить",
	'lang1Change': "Изменить",
	'lang1On': "Вкл",
	'lang1Off': "Выкл",
	'lang1ReloadList': "Обновить список",
	'lang1IPAddress': "IP Адресс",
	'lang1Player': "Игрок",
	'lang1Action': "Действие",
	'lang1User': "Имя пользователя",
	'lang1Password': "Пароль",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "О плагине...",
	'langLogout': "Выйти",
	'langChooseLanguage': "Выберите язык:",
	'langTranslate': "Перевести на другой язык",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "Доступна новая версия плагина",
	'langVersionAvailable': "milkAdmin v_VER_ доступно", // milkAdmin v1.0 is available
	'langUpdateNow': "Хотите обновить сейчас?",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "О milkAdmin",
	'langDesign': "Дизайн и программирование:",
	'langUpdates': "Обновления:",
	'langThanks': "Благодарности:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Настройки Бана",
	'langKickPlayer': "Кикнуть Игрока",
	'langBanPlayerName': "Забанить игрока по имени",
	'langBanIPAddress': "Забанить игрока по IP",
	'langCause': "Причина",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "Перезагр. сервер",
	'langReloadServer': "Перезагрузить сервер",
	'langBackupStart': "Начать бэкап",
	'langSaveMap': "Сохранить мир",
	'langStopServer': "Остановить сервер",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "Сервер",
	'langConsoleSM': "Консоль",
	'langPluginsSM': "Плагины",
	'langBackupsSM': "Бэкапы",
	'langPlayersSM': "Игроки",
	'langBanListSM': "Банлист",
	'langWhitelistSM': "Белый список",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "Последняя перезагрузка",
	'langAmountPlayersOnline': "Игроков онлайн",
	'langFreeMemory': "Свободная память",
	'langUsedMemory': "Использованно памяти",
	'langTotalMemory': "Всего памяти",
	'langMaxMemory': "Макс. памяти",
	'langTitleMemory': "Данные о памяти - <b>Свободно памяти</b>: Показывает количество свободной памяти на Minecraft сервере.<br><b>Использовано памяти</b>: Показыват количество использованной памяти на Minecraft сервере.<br><b>Всего памяти</b>: Показывает количество памяти, выделенное процессу сервера прямо сейчас.<br><b>Макс. памяти</b>: Показыват максимальное количество памяти, которое может быть выделенно процессу сервера.",
	'langFreeSpace': "Свободно места",
	'langUsedSpace': "Использовано места",
	'langTotalSpace': "Всего места",
	'langTitleSpace': "Информация о месте на жестком диске - берется из папки &quot;Backup Folder&quot;",
	'langServerVersion': "Версия сервера",
	'langCraftbukkitBuild': "Сборка CraftBukkit",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "Информация о сервере",
	'langBroadcastMessage': "Отправить сообщение",
	'langTitleBroadcastMessage': "Отправить сообщение - Послать сообщение всем игрокам без тэга.",
	'langLevelName': "Название главного уровня",
	'langTitleLevelName': "Это значение будет использовано как название мира и название папки.<br>Вы также можете скопировать сохранненую папку и ее имя присвоиить этому значению.",
	'langMCIPPORT': "IP и порт сервера",
	'langTitleMCIPPORT': "<b>IP:</b> Установите это значение, если вы хотите сами указать IP сервера. Строго рекоммендуется оставить пустым!<br><b>Порт:</b> Изменяет порт, на который сервер принимает подключения. Этот порт должен быть проброшен, если сервер находится за роутером.<br><b>Доступные значения:</b><ul><li><b>IP:</b> Пусто или IP, на котором вы хотите сделать подключение доступным.</li><li><b>Порт:</b> Число в промежутке <b>1-65535</b>. По умолчанию: <b>25565</b><ul><li>Должно быть больше 20000, чтобы не было конфликта с системными портами.</li></ul></li></ul>",
	'langMaxPlayers': "Максимальное количество игроков",
	'langTitleMaxPlayers': "Максимальное количество игроков на сервере.<br><i>Помните, что чем больше игроков тем больше ресурсов требуется..</i><br><i>Так же помните, что админ считается игроком.</i><br><b>Возможные значения:</b><ul><li> <b>0-255</b>.</li></ul>",
	'langViewDistance': "Дальность обзора(чанки). Помните, что чем больше дальность обзора, тем больше ресурсов требуется.",
	'langTitleViewDistance': "Количество чанков посылаемых игроку.<br><b>Возможные значения:</b><ul><li><b>3-15</b>. По умолчанию: <b>10</b></li></ul>",
	'langHoldMessage': "Сообщение",
	'langTitleHoldMessage': "Сообщение, которое MCSODRTK будет показывать, пока Сервер в режиме ожидания (On Hold).<br><i>Необходим MinecraftRemoteToolkit</i>",
	'langAllowNether': "Включить нижний мир",
	'langTitleAllowNether': "Позволяет игрокам путешествовать по нижнему миру.<ul><li><b>true</b> = Сервер позволит порталам отправлять отправлять игроков в нижний мир.</li><li><b>false</b> = Порталы не будут отправлять игроков в нижний мир.</li></ul>",
	'langSpawnMonsters': "Появление монстров",
	'langTitleSpawnMonsters': "Установите true, если вы хотите чтобы на сервере спаунились монстры, или установите false если вы не хотите этого.<br><i>Совет: если у вас лаги, то лучше отключить.</i><ul><li><b>true</b> = Монстры будут появляться ночью или в темноте.</li><li><b>false</b> = Никаких монстров.</li></ul>",
	'langSpawnAnimals': "Появление животных",
	'langTitleSpawnAnimals': "Животные будут спавнится.<ul><li><b>true</b> = Нормальный спавн животных.</li><li><b>false</b> = Животные будут моментально удалены.</li></ul>",
	'langOnlineMode': "Онлайн режим (Проверка аккаунтов)",
	'langTitleOnlineMode': "Сервер проверит подключающихся игроков п базе данных minecraftа.<br>Ставьте false только в том случае если сервер не поключен к интернет.<ul><li><b>true</b> = Сервер сделает предположение, что имеет подключение к Интернет и проверит каждого minecraft.net подключившегося игрока.</li><li><b>false</b> = Сервер не будет пытаться проверить подключаюихся игроков</li></ul>",
	'langPVP': "Игрок против игрока (PVP)",
	'langTitlePVP': "Включить PVP на сервере.<br><i>Примечание: Битие игрока игроком или же приручеными волками<br>наносит урон атакующему игроку.</i><ul><li><b>true</b> = Игроки не могут убивать других игроков.</li><li><b>false</b> = Игроки могут убивать других игроков.</li></ul>",
	'langAllowFlight': "Разрешить полеты",
	'langTitleAllowFlight': "Можно ли использовать полеты/noclip на сервере<ul><li><b>true</b> = полеты/noclip доступны игрокам.</li><li><b>false</b> = полеты/noclip не доступны игрокам.</li></ul>",
	'langWhitelist': "Белый список",
	'langTitleWhitelist': "Включите вайт-лист! Если вайт-лист включен,игроки которые не включены в него не смогут зайти на сервер .<ul><li><b>true</b> = Файл white-list.txt использован для генерации вайт листа</li><li><b>false</b> = Вайт лист не используется.</li></ul> ",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "Белый список",
	'langWLAddPlayer': "Добавить игрока",
	'langWLDeleteSelected': "Удалить выбраное",
	'langWLSaveChanges': "Сохранить изменения",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "Включить плагин",
	'langEnable': "Включить",
	'langPluginName': "Название плагина",
	'langVersion': "Версия",
	'langReloadTheList': "Обновите список",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "Выберите бэкап",
	'langRestoreBackup': "Восстановить бэкап",
	'langDeleteBackup': "Удалить бэкап",
	'langBackupClear': "Удалить предыдущую директорию перед восстановлением дубликата",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "Управление учетными записями",
	'langIP': "IP",
	'langPort': "Порт",
	'langKill': "Убить",
	'langKick': "Кикнуть",
	'langBanName': "Забанить Игрока",
	'langBanIP': "Забанить IP",
	'langAmount': "Количество раз",
	'langShootArrow': "Выстрелить стрелой",
	'langShootFireball': "Выстрелить файерболом",
	'langThrowEgg': "Кинуть яйцо",
	'langThrowSnowball': "Кинуть снежок",
	'langTeleportToPlayer': "Переместиться к игроку",
	'langTeleportToCoord': "Переместиться на координаты",
	'langChangeName': "Изменить имя",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Забанить IP или Ник",
	'langClearFilter': "Очистить фильтр",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "Зарегистрировать нового админа",
	'langCreateAdmin': "Добавить админа"
};

var jsIndex = {
	'sProcessing': "Обработка...",
	'sLengthMenu': "Показать _MENU_ плагины", // Show 10 plugins
	'sZeroRecords': "Не найдено ни одного плагина.",
	'sInfo': "Показано _START_->_END_ из _TOTAL_ плагинов", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "Не найдено ни одного плагина",
	'sInfoFiltered': "(из _MAX_ плагинов)", // (filter of 17 plugins)
	'sSearch': "Поиск плагина:",
	'sFirst': "В начало",
	'sPrevious': "Пред.",
	'sNext': "След.",
	'sLast': "В конец",
	'ReloadServer': "Обновить сервер",
	'RestartServer': "Перезагр. сервер",
	'StopServer': "Выключить сервер",
	'EnablePlugin': "Включить плагин",
	'StartBackup': "Начинаем резервное копирование!",
	'RTKNeeded': "Вам нужен RemoteToolkit чтобы использовать эту функцию",
	'NoUsersOnline': "Ни одного игрока онлайн",
	'NoBackups': "Резервные копии отсутствуют!",
	'activate': "Активировать",
	'deactivate': "Деактивировать",
	'unban': "Разбанить",
	'MustLogin': "Вы должны залогиниться!",
	'UnknownError': "Неизвестная ошибка! Попробовать снова!",
	'NotResponse': "Сервер не отвечает! Попробовать снова!",
	'InvalidIP': "Неверный IP адрес",
	'UpdateNow': "Обновить сейчас",
	'later': "Позже"
};

var jsAjax = {
	'accountcreated': "Аккаунт создан!",
	'worldsaved': "Мир сохранен!",
	'messagesent': "Сообщение отправлено",
	'broadcastedmessage': "Отправленное сообщение",
	'forcestop': "Принудительная остановка",
	'plugindisabled': "Плагин _NAME_ выключен", // PluginX's plugin disabled.
	'pluginenabled': "Плагин _NAME_ включен", // PluginX's plugin enabled.
	'editedproperty': "Успешно отредактировано",
	'worldbackedup': "Мир сохранен в бэкап",
	'deletebackup': "Бэкап удален",
	'kickplayer': "_NAME_ кикнут с сервера!", // Sharkiller kicked from the server
	'itemsgiven': "_NAME_ получил _AMOUNT_ штук _ITEM_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "_NAME_ убрал _AMOUNT_ штук _ITEM_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ убит", // Sharkiller killed
	'healthchanged': "Здоровье _NAME_ изменено на _AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_ был забанен!", // Sharkiller was banned!
	'playerunbanned': "_NAME_ был разбанен!", // Sharkiller was unbanned!
	'ipbanned': "_IP_ был забанен!", // 19.64.84.24 was banned!
	'ipunbanned': "_IP_ был разбанен!", // 19.64.84.24 was unbanned!
	'arrowshooted': "Выстрел стрелой!", 
	'fireballshooted': "Файербол запущен!", 
	'throwsnowball': "Снежок брошен!",
	'throwegg': "Запуск яйца!",
	'changename': "Имя _OLD_ изменено на _NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "Игрок перемещен",
	'langchanged': "Язык изменен! Перезагрузка страницы...",
	'wlloaded': "Вайтлист загружен!",
	'wladded': "Добавлен в вайтлист!",
	'wlsaved': "Вайтлист успешно сохранен!",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "Параметры заданы неверно",
	'messageempty': "Пустое сообщение",
	'wladdfail': "Ошибка добавления игрока в вайтлист!",
	'wlsavefail': "Ошибка сохранения Вайтлиста! Попробовать снова!",
	'playernotconnected': "Игрок не присоединён",
	'playernotbanned': "Игрок не забанен",
	'ipnotbanned': "IP не забанен",
	'langnotfound': "Язык не найден!"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "Авторизация milkAdmin",
	'langUsername': "Имя пользователя",
	'langPassword': "Пароль",
	'langLogin': "Вход"
};

var jsLogin = {
	'welcome': "Добро пожаловать! Страница загружается...",
	'UnknownError': "Неизвестная ошибка! Попробовать снова!",
	'NotResponse': "Сервер не отвечает! Попробовать снова!",
	'invalidlogin': "Неверные имя пользователя или пароль!"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "Создать Аккаунт",
	'langUsername': "Имя пользователя",
	'langPassword': "Пароль",
	'langCreateAccount': "Создать Аккаунт"
};

var jsRegister = {
	'created': "Аккаунт создан! Загрузка...",
	'notadmin': "Вы не можете использовать \"admin\" как имя пользователя",
	'baduser': "Пожалуйста, введите правильные имя пользователя и пароль",
	'UnknownError': "Неизвестная ошибка! Попробовать снова!",
	'NotResponse': "Сервер не отвечает! Попробовать снова!",
	'error': "Неверные имя пользователя или пароль!"
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "Запуск сервера"
};

///////////////////////////////////////////////
//
//   Language for wait.html
//
///////////////////////////////////////////////

var langWait = {
	'langPleaseWait20Seconds': "Пожалуйста, подождите 20 секунд"
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "Дублирование"
};

var jsBackup = {
	'Complete': "Дублирование заверешено! Запуск сервера...",
	'UnknownError': "Неизвестная ошибка! Попробовать снова!",
	'NotResponse': "Сервер не отвечает! Попробовать снова!"
};