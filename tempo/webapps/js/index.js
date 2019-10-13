/**
	milkAdmin - WebAdministrator of Minecraft Server for Bukkit
    Copyright (C) 2010-2011  Alejandro Barreiro (Sharkiller)
**/
/*	
    This file is part of milkAdmin.

    This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
	To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/3.0/ or send a letter to
	Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
*/

// Time between data updates
TimeOut = 5000;
// Time between data updates in ms
DataInverval = 15000;

// Don't modify anything below this line. 
var dataSetted = false;

$.ajaxSetup({
    timeout: TimeOut
});

$(document).ready(function () {

    replaceText();

    $("#pluginstable").dataTable({
        "bJQueryUI": true,
        "sPaginationType": "full_numbers",
        "bDestroy": true,
        "aaSorting": [
        /* name */		[1, "asc"]
        ],
        "aoColumns": [ 
		/* on/off */	{"bSearchable": false, "bSortable": false},
		/* name */		null, 
		/* version */	{"bSearchable": false, "bSortable": false},
		/* action */	{"bSearchable": false, "bSortable": false}
		],
        "oLanguage": {
            "sProcessing":		jsIndex['sProcessing'],
            "sLengthMenu": 		jsIndex['sLengthMenu'],
            "sZeroRecords": 	jsIndex['sZeroRecords'],
            "sInfo": 			jsIndex['sInfo'],
            "sInfoEmpty": 		jsIndex['sInfoEmpty'],
            "sInfoFiltered": 	jsIndex['sInfoFiltered'],
            "sSearch": 			jsIndex['sSearch'],
            "sInfoPostFix": 	"",
            "sUrl": 			"",
            "oPaginate": {
                "sFirst": 		jsIndex['sFirst'],
                "sPrevious": 	jsIndex['sPrevious'],
                "sNext": 		jsIndex['sNext'],
                "sLast": 		jsIndex['sLast']
            }
        }
    });
	
	$("#loading").bind("ajaxStop", function() {
		$("#loading").hide();
	});

    $("#dialog-user,#dialog-about,#dialog-ban").dialog({
        resizable: false,
        autoOpen: false,
        modal: true,
        width: '600px'
    });
	
	$('.tt').tooltip({ 
		track: true, 
		delay: 500, 
		showURL: false, 
		showBody: " - ", 
		fade: 250 
	});
	
	var languague = $("#ajaxdd").msDropDown({visibleRows:20});
	
	$("#dialog-newversion").dialog({ autoOpen: false,resizable: false,
					width: '600px',
					modal: true,
					buttons: {
						'UpdateNow': function() {
							window.open("http://dev.bukkit.org/server-mods/milkadmin/");
							$(this).dialog("close");
						},
						'later': function() {
							$(this).dialog("close");
						}
					}
				});
	
	checkNewVersion();
	
	function checkNewVersion(){
		$.ajax({
			url: "https://raw.github.com/sharkiller/milkAdmin/master/src/main/resources/lastversion.js?callback=?",
			crossDomain: true, 
			dataType: "script", 
			success:function(data,text,xhqr){
				if(currentversion < lastver){
					$("#latestversion").html($("#latestversion").html().replace("_VER_", lastver));
					$("#dialog-newversion").dialog('open');
					$("span.ui-button-text:contains(UpdateNow)").html(jsIndex["UpdateNow"]);
					$("span.ui-button-text:contains(later)").html(jsIndex["later"]);
				}else{
					$("#dialog-newversion").remove();
				}
			},
			error:function(data){
				$("#dialog-newversion").remove();
			}
		});
	}

    $("#banlistadd").click(function () {
		$("#accordion-ban :input[name=user]").val("");
        $("#accordion-ban :input[name=user]").val("");
        $("#dialog-ban").dialog("open");
		$("#accordion-ban").accordion("activate", 1);
        return false;
    });

    $("#about").click(function () {
        $("#dialog-about").dialog("open");
        return false;
    });

    $("#tabs,#servertabs").tabs();

    $(':button,:submit').button();

    $('#consolesubmitm,#broadcastm').keyup(function (e) {
        if (e.keyCode == 13) {
            $("#consolesubmitm,#broadcastm").val("");
        }
    });

    $("#memoria,#espacio").progressbar();
	
	$("#slider-view-distance").slider({
		range: "min",
		min: 3,
		max: 15,
		value: 10,
		slide: function(event, ui) {
			$("#viewdistance").html(ui.value);
			$("#view-distance :input[name=value]").val(ui.value);
		}
	});
	$("#slider-max-players").slider({
		range: "min",
		min: 0,
		max: 255,
		value: 100,
		slide: function(event, ui) {
			$("#maxplayers").html(ui.value);
			$("#max-players :input[name=value]").val(ui.value);
		}
	});
	
	$("#enableplugin").submit(function() {
		$.jnotify(jsIndex["EnablePlugin"], 800);
		return true;
	});
	
	$("#reload").click(function() {
		$.jnotify(jsIndex["ReloadServer"], 800);
		return true;
	});

    reloadData();

    $('select#backups,#backupClear').change(function () {
        var str = "";
        $("select#backups option:selected").each(function () {
            str += $(this).val() + "";
        });
        $('#backupz').delay(500).fadeIn();
        $('#restore a').attr('href', '/restore?id=' + str + "&clear="+$('#backupClear').is(':checked'));
        $('#delete a').attr('href', '/delete?id=' + str);
    });

    var myIntervalData = setInterval(reloadData, DataInverval);

    function reloadData() {
		$.ajax({
            url: '/ping',
			dataType: "text",
            success: function (data) {
                if (data == 'login') {
					$.jnotify(jsIndex["MustLogin"], "error", true);
					clearInterval(myIntervalData);
				}
            }
        });
		
		$.ajax({
			url: 'info/data.json',
			dataType: 'json',
			success: function(data) {
				$('.lastrestart').html(data.lastrestart);
				$('.serverversion').html(data.version);
				$('.serverbuild').html(data.build);
				$('.amountusers').html(data.amountusers);
				$('.freememory').html(data.freemem+' MB');
				$('.totalmemory').html(data.totmem+' MB');
				$('.maxmemory').html(data.maxmem+' MB');
				$('.usedmemory').html(data.usedmem+' MB');
				$('.freespace').html(data.freespace+' GB');
				$('.usedspace').html(data.usedspace+' GB');
				$('.totalspace').html(data.totalspace+' GB');
				if(!dataSetted){
					dataSetted = true;
					if(data.usingrtk){
						$("#restart").click(function() {
							$.jnotify(jsIndex["RestartServer"], 800);
							return true;
						});
						$("#stop").click(function() {
							$.jnotify(jsIndex["StopServer"], 800);
							return true;
						});
						$("#backupbut").click(function() {
							$.jnotify(jsIndex["StartBackup"], 800);
							return true;
						});
					}else{
						$("#restart,#backupbut,#stop").click(function() {
							$.jnotify(jsIndex["RTKNeeded"], "error", 3000);
							return false;
						});
					}
					$('#level-name :input[name=value]').val(data.properties.levelname);
					$('#hold-message :input[name=value]').val(data.properties.holdmessage);
					$('#server-ip :input[name=value]').val(data.properties.ip);
					$('#server-port :input[name=value]').val(data.properties.port);
					$('#allow-nether :input[name=value][value='+data.properties.allownether+']').attr('checked',true);
					$('#max-connections :input[name=value][value='+data.properties.maxconnections+']').attr('checked',true);
					$('#spawn-monsters :input[name=value][value='+data.properties.spawnmonsters+']').attr('checked',true);
					$('#spawn-animals :input[name=value][value='+data.properties.spawnanimals+']').attr('checked',true);
					$('#online-mode :input[name=value][value='+data.properties.onlinemode+']').attr('checked',true);
					$('#pvp :input[name=value][value='+data.properties.pvp+']').attr('checked',true);
					$('#flight :input[name=value][value='+data.properties.flight+']').attr('checked',true);
					$('#whitelist :input[name=value][value='+data.properties.whitelist+']').attr('checked',true);
				}
				
				if(3 < data.properties.viewdistance < 15){
					$("#slider-view-distance").slider("value", data.properties.viewdistance);
					$("#viewdistance").html(data.properties.viewdistance);
					$("#view-distance :input[name=value]").val(data.properties.viewdistance);
				}
				if(0 <= data.properties.maxplayers <= 255){
					$("#slider-max-players").slider("value", data.properties.maxplayers);
					$("#maxplayers").html(data.properties.maxplayers);
					$("#max-players :input[name=value]").val(data.properties.maxplayers);
				}
				
				var porcmem = 100 * data.usedmem / data.totmem;
				$("#memoria").progressbar("value", porcmem);
				var porcspace = 100 * data.usedspace / data.totalspace;
				$("#espacio").progressbar("value", porcspace);
				
				if (data.amountusers == "0") {
					$('.usersonline').html(jsIndex["NoUsersOnline"]);
				} else {
					var htmlusers = "";
					var usersoption = "";
					for (var i = 0; i < data.amountusers; i++) {
						htmlusers += '<div class="player"><a href="javascript:get_player(\'' + data.users[i] + '\')">' + data.users[i] + '</a></div>';
						usersoption += '<option value="' + data.users[i] + '">' + data.users[i] + '</option>';
					}
					$('#usersoption').html(usersoption);
					$('.usersonline').html(htmlusers);
					$('.player').button();
				}
			}
        });

        $.ajax({
            url: 'server/console',
            success: function (data) {
                if (data.length > 10) {
					var scrollTop = $('#console').scrollTop();
					$('#console').val(data);
					$('#console').scrollTop(scrollTop);
				}
            },
            dataType: "text"
        });
    }

    $("#banlistdiv :submit,#banlistdiv :button").button();

});

function reloadBackupList() {
	$.ajax({
		url: 'info/list_backups.json',
		dataType: 'json',
		success: function(data) {
			if(data.length > 0){
				var options = '';
				$.each(data, function (i) {
					options += '<option value="' + data[i].optionValue + '">' + data[i].optionDisplay + '</option>';
				});
				$("select#backups").html(options);
			}else{
				$.jnotify(jsIndex["NoBackups"], "error", 2000);
			}
		}
    });
}

function loadLanguage(valor){
	if(valor != 0){
		$.ajax({
			url: '/page/change_lang',
			data: 'lang='+valor,
			success: function (data) {
				$('#loading').hide();
				var resp = data.split(":");
				if (resp[0] == "ok") {
					$.jnotify(jnString(resp), 5000);
					window.location.reload();
				} else if (resp[0] == "error") {
					$.jnotify(jsAjax[resp[1]], "error", 2000);
				} else {
					$.jnotify(jsIndex["UnknownError"], "error", 2000);
				}
			},
			error: function(data){
				$('#loading').hide();
			},
			dataType: "text"
		});
	}
}

function loadingShow(){
	var middle = $(window).width() / 2 - 50;
	var dheight = $(document).height();
	$("#loading .ui-widget-overlay").height(dheight);
	$("#loading .ui-widget,#loading .ui-widget-shadow").css('left',middle);
	$("#loading").show();
}

function onlyNumbers(evt) {
    var e = evt || event;
    var charCode = e.which || e.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)){
		return false;
	}
	
    return true;
}

function get_player(user) {
    loadingShow();
    $('#dialog-user :input[type=hidden][name=user]').val(user);
    $('#dialog-user :submit').button();
    $('#dialog-user .ip,#dialog-user .port').html('<img src="/images/load.gif" alt="...">');
	$.ajax({
		url: 'player/get_ip_port.json',
		dataType: 'json',
		data: {'user': user},
		success: function(data) {
			if (data.status == "ok") {
				$('#dialog-user .ip').html(data.ip);
				$('#dialog-user :input[type=hidden][name=ip]').val(data.ip);
				$('#dialog-user .port').html(data.port);
			} else if (data.status == "error") {
				$('#dialog-user .ip').html(jsAjax[data.error]);
				$('#dialog-user .port').html(jsAjax[data.error]);
			} else {
				$('#dialog-user .ip').html("Error");
				$('#dialog-user .port').html("Error");
			}
			$("#dialog-user").dialog("open");
		}
    });
}

function reloadPluginList() {
	loadingShow();
	$.ajax({
		url: 'server/get_plugins.json',
		dataType: 'json',
		success: function(data) {
			$("#loading").hide();
			pTable = $("#pluginstable").dataTable();
			pTable.fnClearTable();
			var pluginlisthtml = '';
			if (data) {
				$.each(data, function (i) {
					Status = '<span class="pluginstatus ' + (data[i].enabled ? 'on"></span><span style="display:none;">On</span>' : 'off"></span><span style="display:none;">Off</span>');
					var Action = '';
					if (data[i].enabled) {
						Action += '		<form name="user" action="/server/disable_plugin" method="get" style="display:inline;" onsubmit="adminUser(this);reloadPluginList();return false;">';
						Action += '			<input type="hidden" name="plugin" value="' + data[i].name + '">';
						Action += '			<input type="submit" value="'+jsIndex["deactivate"]+'">';
						Action += '		</form>';
					} else {
						Action += '		<form name="user" action="/server/enable_plugin" method="get" style="display:inline;" onsubmit="adminUser(this);reloadPluginList();return false;">';
						Action += '			<input type="hidden" name="plugin" value="' + data[i].name + '">';
						Action += '			<input type="submit" value="'+jsIndex["activate"]+'">';
						Action += '		</form>';
					}
					pTable.fnAddData([Status, data[i].name, data[i].version, Action]);
				});
				$("#pluginscontents :submit").button();
				$("#pluginstable_paginate span").click(function () {
					$("#pluginscontents :submit").button();
				});
			}
		},
		error: function(data) {
			$("#loading").hide();
			$.jnotify(jsIndex["NotResponse"], "error", 2000);
		}
    });
}

function reloadBanlist() {
	loadingShow();
	$.ajax({
		url: 'player/banlist.json',
		dataType: 'json',
		success: function(data) {
			$("#loading").hide();
			var banlistname = '';
			var players = data[0].players;
			var ips = data[1].ips;
			$.each(players, function (i) {
				banlistname += '<div>';
				banlistname += '	<span class="banlistuser">' + players[i].name + '</span>';
				banlistname += '	<span class="banlistcause">' + players[i].cause + '</span>';
				banlistname += '	<span class="banlistbuttons">';
				banlistname += '		<form name="user" action="/player/unban_player" method="get" style="display:inline;" onsubmit="aux=adminUser(this);reloadBanlist();return false;">';
				banlistname += '			<input type="hidden" name="user" value="' + players[i].name + '">';
				banlistname += '			<input type="submit" value="'+jsIndex["unban"]+'">';
				banlistname += '		</form>';
				banlistname += '	</span>';
				banlistname += '</div>';
			});
			$("#banlistsectionname").html(banlistname);
			$("#banlistsectionname :submit").button();
			var banlistip = '';
			$.each(ips, function (i) {
				banlistip += '<div>';
				banlistip += '	<span class="banlistuser">' + ips[i].ip + '</span>';
				banlistip += '	<span class="banlistcause">' + ips[i].cause + '</span>';
				banlistip += '	<span class="banlistbuttons">';
				banlistip += '		<form name="user" action="/player/unban_ip" method="get" style="display:inline;" onsubmit="aux=adminUser(this);reloadBanlist();return false;">';
				banlistip += '			<input type="hidden" name="user" value="' + ips[i].ip + '">';
				banlistip += '			<input type="submit" value="'+jsIndex["unban"]+'">';
				banlistip += '		</form>';
				banlistip += '	</span>';
				banlistip += '</div>';
			});
			$("#banlistsectionip").html(banlistip);
			$("#banlistsectionip :submit").button();
		},
		error: function(data){
			$("#loading").hide();
			$.jnotify(jsIndex["NotResponse"], "error", 2000);
		}
    });

}

function reloadWhiteList() {
	loadingShow();
	$.ajax({
		url: 'whitelist/get.json',
		dataType: 'json',
		success: function(data) {
			$("#loading").hide();
			$.jnotify(jsAjax["wlloaded"], 2000);
			if(data.length > 0){
				var options = '';
				$.each(data, function (i) {
					options += '<option value="' + data[i] + '">' + data[i] + '</option>';
				});
				$('#whitelistsel').html(options);
				$('#whitelistdiv .actions').removeAttr('disabled').button('refresh');
			}
		},
		error: function(data){
			$("#loading").hide();
			$.jnotify(jsIndex["NotResponse"], "error", 2000);
		}
    });
}

function addToWhiteList() {
	loadingShow();
	$.ajax({
		url: 'whitelist/add?user='+encodeURIComponent($('#WLAddPlayer').val()),
		dataType: 'text',
		success: function(data) {
			$("#loading").hide();
			if(data == 'ok'){
				$.jnotify(jsAjax["wladded"], 2000);
				var options = '<option value="' + $('#WLAddPlayer').val() + '">' + $('#WLAddPlayer').val() + '</option>';
				$("#whitelistsel").append(options);
			}else{
				$.jnotify(jsAjax["wladdfail"], "error", 2000);
			}
		},
		error: function(data){
			$("#loading").hide();
			$.jnotify(jsIndex["NotResponse"], "error", 2000);
		}
    });
}

function deleteWhiteList() {
	$("#whitelistsel :selected").remove();
	$('#wlsave').removeAttr('disabled').button('refresh');
}

function saveWhiteList() {
	loadingShow();
	$('#wlsave').attr('disabled','true').button('refresh');
	var options = $("#whitelistsel option");
	var users = "";
	options.each(function(i){
		users+=$(this).val();
		if(i != options.length-1)
			users+=","
	});
	$.ajax({
		url: 'whitelist/save?users='+encodeURIComponent(users),
		dataType: 'text',
		success: function(data) {
			$("#loading").hide();
			if(data == 'ok'){
				$.jnotify(jsAjax["wlsaved"], 2000);
			}else{
				$.jnotify(jsAjax["wlsavefail"], "error", 2000);
				$('#wlsave').removeAttr('disabled').button('refresh');
			}
		},
		error: function(data){
			$("#loading").hide();
			$('#wlsave').removeAttr('disabled').button('refresh');
			$.jnotify(jsIndex["NotResponse"], "error", 2000);
		}
    });
}

function banlistfilter(text) {
    $('#banlistsectionname div,#banlistsectionip div').hide();
    if (text === "") {
        $('#banlistsectionname div,#banlistsectionip div').show();
    } else {
        $("#banlistsectionname .banlistuser:contains(" + text + "),#banlistsectionip .banlistuser:contains(" + text + ")").parent().show();
    }
}

function jnString(params) {
	var text = jsAjax[params[1]];
	if(params[2] == undefined){
		return text;
	}
	
	var data = params[2].split(",");
	var cant = data.length / 2;
	for(var c=0; c<data.length; c=c+2){
		text = text.replace(data[c], data[c+1]);
	}
	return text;
}

function adminUser(form) {
	loadingShow();
    $.ajax({
        url: form.action,
        data: $(form).serialize(),
        success: function (data) {
			$('#loading').hide();
            var resp = data.split(":");
            if (resp[0] == "ok") {
                $.jnotify(jnString(resp), 2000);
            } else if (resp[0] == "error") {
                $.jnotify(jsAjax[resp[1]], "error", 2000);
            } else {
                $.jnotify(jsIndex["UnknownError"], "error", 2000);
            }
        },
		error: function(data){
			$('#loading').hide();
		},
        dataType: "text"
    });

    return false;
}

function logout(link) {
	loadingShow();
    $.ajax({
        url: link.href,
        success: function (data) {
            window.location.reload();
        },
        error: function (error) {
            $.jnotify(jsIndex["NotResponse"], "error", 2000);
        },
        dataType: "text"
    });

    return false;
}

function pasteIP(input) {
    setTimeout(function () {
        var txt = input.value;
        if (!validarIP(txt)) {
            alert(jsIndex["InvalidIP"]);
        }
    }, 100);
}

function validarIP(IPvalue) {
    var ipPattern = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
    var ipArray = IPvalue.match(ipPattern);

    if (ipArray === null){
		return false;
    }else{
        for (i = 0; i < 4; i++) {
            thisSegment = ipArray[i];
            if (thisSegment > 255) {
                return false;
            }
        }
    }
    return true;
}

function ban(form, type) {
    var val = $(form).children(":first").val();
    $("#dialog-ban").dialog("open");
    if (type == "kick") {
        $("#accordion-ban").accordion("activate", 0);
        $("#accordion-ban :input[name=user]").val(val);
    } else if (type == "name") {
        $("#accordion-ban").accordion("activate", 1);
        $("#accordion-ban :input[name=user]").val(val);
    } else if (type == "ip") {
        $("#accordion-ban").accordion("activate", 2);
        $('#accordion-ban :input[name=ip]').val(val);
    }
    return false;
}

function replaceText() {
    for (var prop in langIndex) {
        var patt = new RegExp(prop, "g");
        $('body').html($('body').html().replace(patt, langIndex[prop]));
    }
}
