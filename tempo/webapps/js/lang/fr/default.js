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
	'lang1Yes': "Oui",
	'lang1No': "Non",
	'lang1OK': "Ok",
	'lang1Add': "Ajouter",
	'lang1Cancel': "Annuler",
	'lang1Send': "Envoyer",
	'lang1Change': "Changer",
	'lang1On': "Activé",
	'lang1Off': "Désactivé",
	'lang1ReloadList': "Recharger la liste",
	'lang1IPAddress': "Adresse IP",
	'lang1Player': "Joueur",
	'lang1Action': "Action",
	'lang1User': "Nom d\'utilisateur",
	'lang1Password': "Mot de passe",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "A propos...",
	'langLogout': "Déconnexion",
	'langChooseLanguage': "Choisissez une langue",
	'langTranslate': "Traduire vers votre langue",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "Nouvelle Version Disponible",
	'langVersionAvailable': "milkAdmin v_VER_ est disponible", // milkAdmin v1.0 is available
	'langUpdateNow': "Voulez-vous mettre à jour maintenant ?",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "A propos de milkAdmin",
	'langDesign': "Design et programmation :",
	'langUpdates': "Mise à jour:",
	'langThanks': "Merci à:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Options Ban",
	'langKickPlayer': "Exclure un joueur",
	'langBanPlayerName': "Bannir le nom du joueur",
	'langBanIPAddress': "Bannir l\'adresse IP",
	'langCause': "À Cause de",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "Redémarrer le serveur ",
	'langReloadServer': "Recharger le serveur",
	'langBackupStart': "Commencer le Backup",
	'langSaveMap': "Sauvegarder le monde",
	'langStopServer': "Arrêter le serveur",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "Serveur",
	'langConsoleSM': "Console",
	'langPluginsSM': "Plugins",
	'langBackupsSM': "Sauvegardes",
	'langPlayersSM': "Joueurs",
	'langBanListSM': "Liste des bannis",
	'langWhitelistSM': "Whitelist",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "Dernier Redémarrage ",
	'langAmountPlayersOnline': "Nombre de joueurs en ligne",
	'langFreeMemory': "Memoire libre",
	'langUsedMemory': "Mémoire utilisée",
	'langTotalMemory': "Mémoire Total",
	'langMaxMemory': "Mémoire Maximale",
	'langTitleMemory': "Données mémoire - <b>Mémoire libre</b>: Affiche la mémoire libre pour le serveur Minecraft.<br><b>Mémoire utilisée</b>: Affiche la mémoire utilisée par le serveur Minecraft.<br><b>Mémoire totale</b>: Affiche tout la mémoire utilisée par le serveur Minecraft.<br><b>Mémoire maximum</b>: Affiche la mémoire maximale que le serveur Minecraft peut utiliser.",
	'langFreeSpace': "Espace libre",
	'langUsedSpace': "Espace utilisé",
	'langTotalSpace': "Espace total",
	'langTitleSpace': "Espace mémoire - Basé sur le dossier des backups",
	'langServerVersion': "Version du serveur",
	'langCraftbukkitBuild': "Version Craftbukkit",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "Infos Serveur",
	'langBroadcastMessage': "Envoyer un message au joueurs",
	'langTitleBroadcastMessage': "Envoyer un message au joueurs - Envoyer un message à tous les joueurs sans tag",
	'langLevelName': "Nom du monde principal",
	'langTitleLevelName': "Cette valeur servira de nom pour le monde et comme nom de dossier.<br>Vous devriez également copier vos dossiers de sauvegarde ici, et changer le nom avec le même que celui entré afin de le chargé à la place.",
	'langMCIPPORT': "IP et port du serveur MineCraft",
	'langTitleMCIPPORT': "<b>IP:</b>Entrer une valeur si vous voulez que le serveur soit lié à une IP en particulier. Il est fortement recommandé de laisser \"server-ip\" vide!<br><b>Port:</b>Change le port utilisé pour le serveur. Ce port doit être redirigé si le serveur passe par un routeur.<br><b>Valeurs correctes:</b><ul><li><b>IP:</b>Vide, ou l\'IP que vous voulez utiliser pour votre serveur.</li><li><b>Port:</b> Un nombre entre <b>1 et 65535</b>. Port par défaut: <b>25565</b><ul><li>. Doit être supérieur à 20000 pour éviter les conflits avec les ports réservés au système.</li></ul></li></ul>",
	'langMaxPlayers': "Nombre de joueurs maximum",
	'langTitleMaxPlayers': "Le nombre maximum de joueurs qui peuvent jouer sur le serveur au même moment. <br><i>  A noter que si plusieurs joueurs sont sur ​​le serveur, il va utiliser plus de ressources. </i><br><i> Noter également, que la connection d\'un admin n\'est pas pris en compte.</i><br><b> Valeurs admises: </b><ul><li>Un nombre entre <b>0-255 </b>.</li></ul>",
	'langViewDistance': "Distance de vue",
	'langTitleViewDistance': "Le montant de chunks que le serveur envoie aux joueurs. <br><b>Valeurs valides</b><ul><li>Un nombre entre<b>3 et 15</b>. Par défaut: <b>10</b></li></ul>",
	'langHoldMessage': "Vieu message",
	'langTitleHoldMessage': "Message affiché par MCSODRTK lorsque le serveur est en attente.<br> <i>Nécessite MinecraftRemoteToolkit</i>",
	'langAllowNether': "Activer le Nether",
	'langTitleAllowNether': "Permettre au joueur d\'aller dans le Nether.<ul><li><b>true</b> = Le serveur lui laissera la possibilité d\'aller dans les portails pour envoyer le joueur dans le Nether.</li><li><b>false</b> = Le joueur ne pourra pas utiliser les portails vers le Nether.</li></ul>",
	'langSpawnMonsters': "Apparition de monstres",
	'langTitleSpawnMonsters': "Mettez \"true\" si vous voulez que les monstres apparaissent la nuit, \"false\" si vous ne le voulez pas. <br><i>Conseil: Si vous avez des gros lag, mettez \"false\" .</i><ul><li><b>true</b> = Les monstres apparaitront la nuit et dans le noir. </li><li><b>false</b> = Aucun monstres.</li></ul>",
	'langSpawnAnimals': "Apparition d\'animaux",
	'langTitleSpawnAnimals': "Les animaux pourront apparaître.<ul><li><b>true</b> = Les animaux apparaissent normalement.</li><li><b>false</b> = Les animaux disparaîtront immédiatement.</li></ul>",
	'langOnlineMode': "Mode en ligne (vérifier les noms)",
	'langTitleOnlineMode': "Le serveur vérifie la connexion des joueurs avec la base de données de Minecraft.<br>Ne mettre à false que si votre serveur n\'est pas connecté à Internet.<ul><li><b>true</b> = Le serveur va supposer qu\'il a une connexion Internet et va vérifier sur minecraft.net chaque joueur se connectant.</li><li><b>false</b> = Le serveur ne tentera pas de vérifier la connexion des joueurs.</li></ul>",
	'langPVP': "Joueur contre Joueur (PVP)",
	'langTitlePVP': "Activer le PvP sur le serveur.<br><i>Note: Frapper un joueur en ayant le PvP désactivé et en ayant des loups apprivoisés va provoquer l\'attaque de ces loups<br>sur le joueur attaqué.</i><ul><li><b>true</b> = Les joueurs peuvent s\'entretuer.</li><li><b>false</b> = Les joueurs ne peuvent pas en tuer d\'autres.</li></ul>",
	'langAllowFlight': "Autoriser le Vol",
	'langTitleAllowFlight': "Permettra aux utilisateurs d\'utiliser le vol / no-clip sur votre serveur, si ils ont installé un mod qui permet cela.<ul><li><b>true</b> = Le vol / no-clip est permis, et est utilisé si le joueur a un mod no-clip d\'installé.</li><li><b>false</b> = Le vol / no-clip n\'est pas autorisé.</li></ul>",
	'langWhitelist': "Whitelist",
	'langTitleWhitelist': "Activer une liste blanche sur le serveur. Avec une liste blanche activée, les utilisateurs n\'étant pas sur la liste blanche ne pourront pas se connecter.<ul><li><b>true</b> = Le fichier white-list.txt est utilisé pour générer la liste blanche.</li><li><b>false</b> = Aucune liste blanche utilisée.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "Whitelist",
	'langWLAddPlayer': "Ajouter un joueur",
	'langWLDeleteSelected': "Supprimer sélectionnés",
	'langWLSaveChanges': "Sauvegarder les changements",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "Activer le plugin",
	'langEnable': "Activer",
	'langPluginName': "Nom du plugin",
	'langVersion': "Version",
	'langReloadTheList': "Recharger la liste",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "Choisissez votre Backup",
	'langRestoreBackup': "Restaurer la sauvegarde",
	'langDeleteBackup': "Supprimer la sauvegarde",
	'langBackupClear': "Supprimer les précédents dossiers avant de restaurer la sauvegarde",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "Gestion des utilisateurs",
	'langIP': "IP",
	'langPort': "Port",
	'langKill': "Tuer",
	'langKick': "Exclure",
	'langBanName': "Bannir",
	'langBanIP': "Bannir l\'IP",
	'langAmount': "Nombre de fois",
	'langShootArrow': "Tirer une fleche",
	'langShootFireball': "Envoyer une boule de feu",
	'langThrowEgg': "Jeter un Oeuf",
	'langThrowSnowball': "Jeter une boule de neige",
	'langTeleportToPlayer': "Teleporter au joueur",
	'langTeleportToCoord': "Téléporter aux coordonnées",
	'langChangeName': "Changer le Nom",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Bannir l\'Adresse IP ou le Pseudo",
	'langClearFilter': "Nettoyer le Filtre",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "Enregistré un nouvelle administrateur",
	'langCreateAdmin': "Créer un Administrateur  "
};

var jsIndex = {
	'sProcessing': "En cours de Traitement...",
	'sLengthMenu': "Afficher le menu des plugins", // Show 10 plugins
	'sZeroRecords': "Aucun plugins trouvé.",
	'sInfo': "Liste _END_ _START_-> plugins de _TOTAL_", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "Aucuns plugins à voir ",
	'sInfoFiltered': "(filtre du maximum de plugins)", // (filter of 17 plugins)
	'sSearch': "Recherche d\'un plugin :",
	'sFirst': "Premier",
	'sPrevious': "Précédent",
	'sNext': "Suivant",
	'sLast': "Dernier",
	'ReloadServer': "Rechargement du Serveur!",
	'RestartServer': "Redémarrage du serveur!",
	'StopServer': "Arrêt du serveur!",
	'EnablePlugin': "Plugin activé!",
	'StartBackup': "Démarrage de la sauvegarde",
	'RTKNeeded': "Vous avez besoin de RemoteToolkit pour utiliser cette fonction !",
	'NoUsersOnline': "Aucun joueurs en ligne",
	'NoBackups': "Il n\'y a pas de sauvegardes",
	'activate': "Activé",
	'deactivate': "Désactiver",
	'unban': "Débannir",
	'MustLogin': "Vous devez vous connecter !",
	'UnknownError': "Erreur inconnue! Essayez à nouveau",
	'NotResponse': "Le serveur ne répond pas ! Veuillez ré-essayez !",
	'InvalidIP': "Adresse IP non valide.",
	'UpdateNow': "Mettre à jour maintenant",
	'later': "Plus Tard"
};

var jsAjax = {
	'accountcreated': "Compte crée!",
	'worldsaved': "Monde Sauvegardé!",
	'messagesent': "Message envoyé",
	'broadcastedmessage': "Diffusion du Message",
	'forcestop': "Arrêt Forcé",
	'plugindisabled': "_NAME_ désactivé !", // PluginX's plugin disabled.
	'pluginenabled': "_NAME_ activé !", // PluginX's plugin enabled.
	'editedproperty': "Edité la Propriété",
	'worldbackedup': "Monde Sauvegardé",
	'deletebackup': "Monde Supprimé",
	'kickplayer': "_NAME_ éjecté du serveur", // Sharkiller kicked from the server
	'itemsgiven': "_NAME_ a été donnée _AMOUNT_ unités de _ITEM_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "_NAME_ retiré _AMOUNT_ unités de _ITEM_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ Tué", // Sharkiller killed
	'healthchanged': "La santé de _NAME_\'s changé vers _AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "_NAME_ a été banni!", // Sharkiller was banned!
	'playerunbanned': "_NAME_ n\'est plus banni !", // Sharkiller was unbanned!
	'ipbanned': "_IP_ été bannie!", // 19.64.84.24 was banned!
	'ipunbanned': "_IP_ a été débanni !", // 19.64.84.24 was unbanned!
	'arrowshooted': "Tir de flèche !", 
	'fireballshooted': "Boule de feu lancée!", 
	'throwsnowball': "Boule ne neige jetée!",
	'throwegg': "Lâché d’œufs !",
	'changename': "_OLD_\'s changé de nom pour _NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "Joueur téléporté",
	'langchanged': "Langue changée! Actualisation de la page.",
	'wlloaded': "Whitelist chargée !",
	'wladded': "Ajouté à la Whithelist !",
	'wlsaved': "La Whiteliste à bien été sauvegardée !",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "Mauvais paramètres",
	'messageempty': "Message Vide",
	'wladdfail': "Echec lors de l\'ajout d\'un joueur à la Whitelist !",
	'wlsavefail': "Echec lors de la sauvegarde de la WhiteListe! Essayez encore!",
	'playernotconnected': "Joueur non connecté",
	'playernotbanned': "Player n\'est pas banni",
	'ipnotbanned': "IP n\'est pas banni",
	'langnotfound': "La langue n\'a pas été trouvée"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "Connectez-vous au milkAdmin",
	'langUsername': "Nom d\'utilisateur",
	'langPassword': "Mot de passe",
	'langLogin': "Connexion"
};

var jsLogin = {
	'welcome': "Bienvenue ! Chargement de la page...",
	'UnknownError': "Erreur inconnue! Essayez à nouveau",
	'NotResponse': "Le serveur ne répond pas ! Veuillez ré-essayez !",
	'invalidlogin': "Nom d\'utilisateur et mot de passe invalide!"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "Créer un compte",
	'langUsername': "Nom d\'utilisateur",
	'langPassword': "Mot de passe",
	'langCreateAccount': "Créer un compte"
};

var jsRegister = {
	'created': "Compte crée! Chargement...",
	'notadmin': "Vous ne pouvez pas utiliser admin comme pseudo",
	'baduser': "Veuillez entrer un nom d\'utilisateur et un mot de passe valide",
	'UnknownError': "Erreur inconnue! Essayez à nouveau",
	'NotResponse': "Le serveur ne répond pas ! Veuillez ré-essayez !",
	'error': "Nom d\'utilisateur et mot de passe invalide!"
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "Démarrer le serveur"
};

///////////////////////////////////////////////
//
//   Language for wait.html
//
///////////////////////////////////////////////

var langWait = {
	'langPleaseWait20Seconds': "Attendez 20 secondes s\'il vous plait..."
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "Sauvegarde en cours"
};

var jsBackup = {
	'Complete': "Sauvegarde terminée ! Démarrage du serveur",
	'UnknownError': "Erreur inconnue! Essayez à nouveau",
	'NotResponse': "Le serveur ne répond pas ! Veuillez ré-essayez !"
};