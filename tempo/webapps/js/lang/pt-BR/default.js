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
	'lang1Yes': "Sim",
	'lang1No': "Não",
	'lang1OK': "Aceitar",
	'lang1Add': "Adicionar",
	'lang1Cancel': "Cancelar",
	'lang1Send': "Enviar",
	'lang1Change': "Alterar",
	'lang1On': "Ligado",
	'lang1Off': "Desligado",
	'lang1ReloadList': "Atualizar Lista",
	'lang1IPAddress': "Endereço IP",
	'lang1Player': "Jogador",
	'lang1Action': "Ação",
	'lang1User': "Usuário",
	'lang1Password': "Senha",
	///////////////////
	//	Header
	///////////////////
	'langAbout': "Sobre...",
	'langLogout': "Sair",
	'langChooseLanguage': "Escolha uma língua:",
	'langTranslate': "Traduzir para seu idioma",
	///////////////////
	//	Update Dialog
	///////////////////
	'langNewVersionAvailable': "Nova versão disponível",
	'langVersionAvailable': "milkAdmin v_VER_ esta disponivel", // milkAdmin v1.0 is available
	'langUpdateNow': "Desejas actualizar agora?",
	///////////////////
	//	About Dialog
	///////////////////
	'langmilkAdmin': "Sobre...",
	'langDesign': "Design e Programação",
	'langUpdates': "Atualizações:",
	'langThanks': "Agradecimentos:",
	///////////////////
	//	Ban Dialog
	///////////////////
	'langBanOptions': "Opções de Ban",
	'langKickPlayer': "Kickar jogador",
	'langBanPlayerName': "Banir Jogador",
	'langBanIPAddress': "Banir IP",
	'langCause': "Causa",
	///////////////////
	//	Main Menu
	///////////////////
	'langRestartServer': "Reiniciar Servidor",
	'langReloadServer': "Recarregar Servidor",
	'langBackupStart': "Iniciar Backup",
	'langSaveMap': "Salvar Mapa",
	'langStopServer': "Parar Servidor",
	///////////////////
	//	Sub Menu
	///////////////////
	'langServerSM': "Servidor",
	'langConsoleSM': "Console",
	'langPluginsSM': "Plugins",
	'langBackupsSM': "Backups",
	'langPlayersSM': "Jogadores",
	'langBanListSM': "Lista de banidos",
	'langWhitelistSM': "Whitelist",
	///////////////////
	//	Server Info
	///////////////////
	'langLastRestart': "Última Reinicialização",
	'langAmountPlayersOnline': "Número de Jogadores Conectados",
	'langFreeMemory': "Memória Livre",
	'langUsedMemory': "Memória Usada",
	'langTotalMemory': "Memória Total",
	'langMaxMemory': "Memória Máxima",
	'langTitleMemory': "Dados de memória - <b>Memória Livre</b>: Mostra a quantidade de memória livre no servidor de Minecraft.<br><b>Memória Usada</b>: Mostra a quantidade de memória utilizada no servidor de Minecraft.<br><b>Memória Total</b>: Mostra a quantidade total de memória que o servidor de Minecraft usa atualmente.<br> <b>Memória Máxima</b>: Mostra a quantidade máxima de memória que o servidor de Minecraft tentará usar.",
	'langFreeSpace': "Espaço Livre",
	'langUsedSpace': "Espaço Usado",
	'langTotalSpace': "Espaço Total",
	'langTitleSpace': "Espaço Livre - Baseado na &quot;Pasta de Backup.",
	'langServerVersion': "Versão do Servidor",
	'langCraftbukkitBuild': "CraftBukkit Build",
	///////////////////
	//	Server Panel
	///////////////////
	//	Server Info
	///////////////////
	'langServerInfoSM': "Informações do Servidor",
	'langBroadcastMessage': "Mensagem de Broadcast",
	'langTitleBroadcastMessage': "Mensagem Global - Enviar uma mensagem a todos os jogadores",
	'langLevelName': "Nome do Nível Principal",
	'langTitleLevelName': "O valor será usado como nome do mundo e, como nome da pasta.<br>Você também pode copiar a sua pasta do jogo salvo aqui, e mudar o nome para a mesma que a pasta em vez de carregá-la.",
	'langMCIPPORT': "IP e Porta do Servidor Minecraft",
	'langTitleMCIPPORT': "<b>IP:</b> Aplicado isso você define um ip especifico para o server ligar.É recomendado deixar o IP em branco!<br><b>Porta:</b> Mudar as porta do servidor que esta hospedado por diante.Essa porta deve ser enviada se o servidor está passando por um roteador<br><b>Numeros Validos:</b><ul><li><b>IP:</b>Branco , ou o IP se você quer que seu servidor para rodar.</li><li><b>Porta:</b>Um número entre<b>1-65535</b>. Default: <b>25565</b><ul><li>Deve ser superior a 20 mil para evitar conflitos com as portas do sistema reservados.</li></ul></li></ul>",
	'langMaxPlayers': "Máximo de Jogadores",
	'langTitleMaxPlayers': "O numero maximo de jogadores que podem entrar no servidor ao mesmo tempo.<br><i>Observe que, se mais jogadores estão no servidor ele vai usar mais recursos.</i><br><i>Nota-se, a conexoes de admins nao sao contadas contra jogadores.</i><br><b>Valores validos:</b><ul><li>Um numero entre <b>0-255</b>.</li></ul>",
	'langViewDistance': "Distância de Visualização",
	'langTitleViewDistance': "A quantidade de chunks que o servidor envia para os jogadores.<br><b>Numeros validos:</b><ul><li>Um numero entre<b>3-15</b>. Default: <b>10</b></li></ul>",
	'langHoldMessage': "Mensagem de espera",
	'langTitleHoldMessage': "Mensagem que MCSODRTK mostrará quando o servidor estiver em espera. <br><i>Necessita MinecraftRemoteToolkit</i>",
	'langAllowNether': "Permitir Mundo Inferior",
	'langTitleAllowNether': "Permitir os players a viajar ao Nether.<ul><li><b>true</b> = O server permitira Portais para mandar players ao inferno.</li><li><b>false</b> = Portais, Server não permitira a viagem ao Nether.</li></ul>",
	'langSpawnMonsters': "Gerar Monstros",
	'langTitleSpawnMonsters': "Bote true se você quiser montros a noite , false para não<br><i>Dica: Se você tiver lag , desative essa opção.</i><ul><li><b>true</b> Monstros irao aparecer a noite e no escuro</li><li><b>false</b> = Sem monstros.</li></ul>",
	'langSpawnAnimals': "Gerar Animais",
	'langTitleSpawnAnimals': "Animais vão se gerar.<ul><li><b>true</b> = Animais vão gerar normalmente.</li><li><b>false</b> = Animais vão imediatamente desaparecer</li></ul>",
	'langOnlineMode': "Modo Online (Verificar Nicks)",
	'langTitleOnlineMode': "Servidor verifica se há conexão dos jogador de minecraft com datebase.<br>Somente bote isso false se seu servidor não é conectado a internet<ul><li><b>true</b>=O servidor irá assumir que tem uma Conexão com a Internet e checar minecraft.net  para cada jogador de ligação.</li><li><b>false</b> =O servidor não tentará verificar jogadores a ligação. </li> </ul>",
	'langPVP': "Jogador x Jogador (PVP)",
	'langTitlePVP': "Permitir PVP (Player vs Player) no server.<br><i>Nota: Dando um hit no player enquanto haver PvP denominado como falso e tendo domesticado lobos ainda vai fazer com que os lobos<br>atacam o jogador atacado</i><ul><li><b>true</b> = Jogador sera capazes de se matar.</li><li><b>false</b> = Jogador não podem se matar.</li></ul>",
	'langAllowFlight': "Allow Flight",
	'langTitleAllowFlight': "Permira que os usuarios usem voo/no-clip no seu servido , se tiverem um mod que oferece voo/no-clip instalado<ul><li><b>true</b> = Voo/no clip é permitido , e usado se o jogoador tem no-clip mod instalado.</li><li><b>false</b> =Voo/no-clip não é permitido.</li></ul>",
	'langWhitelist': "Whitelist",
	'langTitleWhitelist': "Permitir a Whitelist no servidor. Com a Whitelist ativa, os usarios que não estiverem com o nome nela nao poderao entrar.<ul><li><b>true</b> = O arquivo white-list.txt é usado para gerar a whitelist.</li><li><b>false</b> = Whitelist nao esta sendo usada.</li></ul>",
	///////////////////
	//	Whitelist
	///////////////////
	'langWhitelistSM': "Whitelist",
	'langWLAddPlayer': "Adicionar jogador",
	'langWLDeleteSelected': "Remover Selecionado",
	'langWLSaveChanges': "Salvar alterações",
	///////////////////
	//	Plugin Panel
	///////////////////
	'langEnablePlugin': "Ativar Plugin",
	'langEnable': "Ativar",
	'langPluginName': "Nome do Plugin",
	'langVersion': "Versão",
	'langReloadTheList': "Atualizar Lista",
	///////////////////
	//	Backup Panel
	///////////////////
	'langChooseYourBackup': "Escolha o Backup",
	'langRestoreBackup': "Restaurar Backup",
	'langDeleteBackup': "Excluír Backup",
	'langBackupClear': "Remover pastas anteriores, antes de restaurar o backup",
	///////////////////
	//	Players
	///////////////////
	'langUserManagement': "Gerenciamento de Usuário",
	'langIP': "IP",
	'langPort': "Porta",
	'langKill': "Matar",
	'langKick': "Kickar",
	'langBanName': "Banir",
	'langBanIP': "Banir IP",
	'langAmount': "Número de vezes",
	'langShootArrow': "Disparar Flecha",
	'langShootFireball': "Lançar Bola de fogo",
	'langThrowEgg': "Jogar Ovo",
	'langThrowSnowball': "Jogar Bola de Neve",
	'langTeleportToPlayer': "Teleportar para Jogador",
	'langTeleportToCoord': "Teleportar para Coordenada",
	'langChangeName': "Alterar Nome",
	///////////////////
	//	Ban List
	///////////////////
	'langCreateBan': "Banir Jogador ou IP",
	'langClearFilter': "Limpar Filtro",
	///////////////////
	//	milkAdmin
	///////////////////
	'langRegisterAdmin': "Registrar um novo Administrador",
	'langCreateAdmin': "Criar Administrador"
};

var jsIndex = {
	'sProcessing': "Processando...",
	'sLengthMenu': "Mostrar _MENU_ plugins", // Show 10 plugins
	'sZeroRecords': "Nenhum plugin encontrado.",
	'sInfo': "Mostrando _START_->_END_ de _TOTAL_ plugins", // Showing 1->10 of 17 plugins
	'sInfoEmpty': "Nenhum plugin para mostrar",
	'sInfoFiltered': "(filtrado de _MAX_ plugins)", // (filter of 17 plugins)
	'sSearch': "Procurar Plugin:",
	'sFirst': "Primeiro",
	'sPrevious': "Anterior",
	'sNext': "Próximo",
	'sLast': "Último",
	'ReloadServer': "Recarregando Servidor!",
	'RestartServer': "Reiniciando Servidor!",
	'StopServer': "Parando Servidor!",
	'EnablePlugin': "Plugin Ativado!",
	'StartBackup': "Iniciando Backup!",
	'RTKNeeded': "Voce prescisa do RemoteToolkit para usar essa funçao",
	'NoUsersOnline': "Nenhum jogador conectado",
	'NoBackups': "Não há backups!",
	'activate': "Ativar",
	'deactivate': "Desativar",
	'unban': "Desbanir",
	'MustLogin': "Voce deve estar logado ",
	'UnknownError': "Erro desconhecido! Tente novamente ",
	'NotResponse': "Servidor não esta respondendo! Tente novamente",
	'InvalidIP': "IP Inválido.",
	'UpdateNow': "Update Now",
	'later': "Later"
};

var jsAjax = {
	'accountcreated': "Conta Criada!",
	'worldsaved': "Mundo Salvo!",
	'messagesent': "Mensagem Enviada",
	'broadcastedmessage': "Mensagem Transmitida",
	'forcestop': "Parando Forçadamente",
	'plugindisabled': "Plugin _NAME_  desativado", // PluginX's plugin disabled.
	'pluginenabled': "Plugin _NAME_  ativado", // PluginX's plugin enabled.
	'editedproperty': "Propriedade Editada",
	'worldbackedup': "Mundo Restaurado",
	'deletebackup': "Backup Excluído",
	'kickplayer': "_NAME_ kickado do servidor", // Sharkiller kicked from the server
	'itemsgiven': "_AMOUNT_ unidades de _ITEM_ foram dadas a _NAME_", // Sharkiller was given 64 units of IRON
	'itemsremoved': "_AMOUNT_ unidades de _ITEM_ foram retiradas de _NAME_", // Sharkiller removed 64 units of TNT
	'playerkilled': "_NAME_ foi assassinado", // Sharkiller killed
	'healthchanged': "A saúde de _NAME_foi alterada para _AMOUNT_/20", // Sharkiller's health changed to 5/20
	'playerbanned': "O Jogador _NAME_ foi banido!", // Sharkiller was banned!
	'playerunbanned': "O Jogador _NAME_ foi desbanido!", // Sharkiller was unbanned!
	'ipbanned': "O IP _IP_ foi banido!", // 19.64.84.24 was banned!
	'ipunbanned': "O IP _IP_ was unbanned!", // 19.64.84.24 was unbanned!
	'arrowshooted': "Tiro de flecha", 
	'fireballshooted': "Bola de fogo lançada!", 
	'throwsnowball': "Bola de Neve lançada!",
	'throwegg': "Ovo jogado",
	'changename': "O nome de _OLD_ foi alterado para _NEW_", // Sharkiller's name changed to Peter
	'playerteleported': "Jogador Teleportado",
	'langchanged': "Língua escolhida! Recarregando a página...",
	'wlloaded': "Whitelist carregada",
	'wladded': "Adcionar a whitelist",
	'wlsaved': "A Whitelist foi salva com sucesso",
	///////////////////
	//	Errors
	///////////////////
	'badparameters': "Parâmetros Errados",
	'messageempty': "Mensagem Vazia",
	'wladdfail': "Falha ao adcionar o player a Whitelist",
	'wlsavefail': "Falhou a salvar a Whitelist! Tente Novamente",
	'playernotconnected': "O Jogador não está conectado",
	'playernotbanned': "O Jogador não está banido",
	'ipnotbanned': "O IP não está banido",
	'langnotfound': "Língua não encontrada!"
};

///////////////////////////////////////////////
//
//   Language for login.html
//
///////////////////////////////////////////////

var langLogin = {
	'langmilkAdminLogin': "Conectar ao milkAdmin",
	'langUsername': "Usuário",
	'langPassword': "Senha",
	'langLogin': "Conectar"
};

var jsLogin = {
	'welcome': "Bem-Vindo! Carregando a pagina...",
	'UnknownError': "Erro desconhecido! Tente novamente ",
	'NotResponse': "Servidor não esta respondendo! Tente novamente",
	'invalidlogin': "Usuário e/ou Senha Inválidos"
};

///////////////////////////////////////////////
//
//   Language for register.html
//
///////////////////////////////////////////////

var langRegister = {
	'langCreateAnAccount': "Criar uma Conta",
	'langUsername': "Usuário",
	'langPassword': "Senha",
	'langCreateAccount': "Criar Conta"
};

var jsRegister = {
	'created': "Conta Criada! Carregando a página...",
	'notadmin': "Você não pode usar \"admin\" como nome de usuário",
	'baduser': "Please enter a valid username and password",
	'UnknownError': "Erro desconhecido! Tente novamente ",
	'NotResponse': "Servidor não esta respondendo! Tente novamente",
	'error': "Usuário e/ou Senha Inválidos"
};

///////////////////////////////////////////////
//
//   Language for startServer.html
//
///////////////////////////////////////////////

var langStart = {
	'langStartServer': "Iniciar Servidor"
};

///////////////////////////////////////////////
//
//   Language for wait.html
//
///////////////////////////////////////////////

var langWait = {
	'langPleaseWait20Seconds': "Favor aguardar 20 segundos"
};

///////////////////////////////////////////////
//
//   Language for backup.html
//
///////////////////////////////////////////////

var langBackup = {
	'langStatus': "Efetuando Backup"
};

var jsBackup = {
	'Complete': "Backup Completo! Iniciando Servidor...",
	'UnknownError': "Erro desconhecido! Tente novamente ",
	'NotResponse': "Servidor não esta respondendo! Tente novamente"
};