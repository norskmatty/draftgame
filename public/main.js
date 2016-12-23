/*global $*/

$(function() {
    
    var socket = io();
    
//Create a new user
    
    $('#signup').click (function (event) {
        event.preventDefault();
        $('#temp-error').hide();
        let newUsername = $('#new-user').val();
        let newPassword = $('#new-pass').val();
        console.log(newUsername + ' ' + newPassword);
        var item = {'username' : newUsername, 'password' : newPassword};
        
        var ajax = $.ajax ('/new-user', {
            type: 'POST',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
        ajax.done (function (res) {
            if (res.response == 'error') {
                $('#newuser').append ('<div id="temp-error">' + res.message + '</div>');
                return;
            }
            else {
            
                $('#newuser').hide();
                $('#stocks').show();
                $('#nav-open').hide();
                $('#nav-logged-in').show();
                $('#total-money').show();
            }    
        });
        

    });
    
//Login an already existing user

    $('#accept').click (function (event) {
        event.preventDefault();
        $('#temp-error').hide();
        let existingUsername = $('#username').val();
        let existingPassword = $('#password').val();
        let item = {
            'username' : existingUsername, 
            'password' : existingPassword
        };
        
        var ajax = $.ajax ('/login', {
            type: 'POST',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
        ajax.done (function (res) {
            if (res.response == 'error') {
                $('#login').append ('<div id="temp-error">' + res.message + '</div>');
                return;
            }
            else {
                $('#login').hide();
                $('#stocks').show();
                $('#nav-open').hide();
                $('#nav-logged-in').show();
                $('#total-money').show();
            }
        });
    });
    
    $('#getPlayers').click(function() {
        var ajax = $.ajax('/players/list', {
            type: 'GET',
            datatype: JSON
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            for(var i=0; i<res.length; i++) {
                console.log(res[i].name);
            }
        });
    });
    
    $("#updatePlayer").click(function() {
        var item = {
             name : "Chuck Clark",
             posrank : 33
        };
        var ajax = $.ajax('/players/update', {
            type: 'PUT',
            data: JSON.stringify (item),
            datatype: 'JSON',
            contentType: 'application/json'
        });
        ajax.done(function(res) {
            console.log(res.name);
        });
    });
    
    $("#listDraft").click(function() {
        $('#playerlist').html(' ');
        var ajax = $.ajax('/players/draftlist', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            console.log(res);
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].round + '</li> <li class="player-name">' + res[i].roundPick + '</li> <li class="player-position">' + res[i].overallPick + '</li> <li class="player-college">' + res[i].team + '</li> <li class="player-posrank">' + res[i].pic + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listPlayers").click(function() {
        $('#playerlist').html(' ');
        var ajax = $.ajax('/players/frontlist', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].overall + '</li> <li class="player-name">' + res[i].name + '</li> <li class="player-position">' + res[i].position + '</li> <li class="player-college">' + res[i].school + '</li> <li class="player-posrank">' + res[i].posrank + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listQBs").click(function() {
        $('#playerlist').html(' ');
        var ajax = $.ajax('/players/qblist', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            console.log(res);
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].overall + '</li> <li class="player-name">' + res[i].name + '</li> <li class="player-position">' + res[i].position + '</li> <li class="player-college">' + res[i].school + '</li> <li class="player-posrank">' + res[i].posrank + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listRBs").click(function() {
        $('#playerlist').html('');
        var ajax = $.ajax('/players/rblist', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].overall + '</li> <li class="player-name">' + res[i].name + '</li> <li class="player-position">' + res[i].position + '</li> <li class="player-college">' + res[i].school + '</li> <li class="player-posrank">' + res[i].posrank + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listWRs").click(function() {
        $('#playerlist').html('');
        var ajax = $.ajax('/players/wrlist', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].overall + '</li> <li class="player-name">' + res[i].name + '</li> <li class="player-position">' + res[i].position + '</li> <li class="player-college">' + res[i].school + '</li> <li class="player-posrank">' + res[i].posrank + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listTEs").click(function() {
        $('#playerlist').html('');
        var ajax = $.ajax('/players/telist', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].overall + '</li> <li class="player-name">' + res[i].name + '</li> <li class="player-position">' + res[i].position + '</li> <li class="player-college">' + res[i].school + '</li> <li class="player-posrank">' + res[i].posrank + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listOTs").click(function() {
        $('#playerlist').html('');
        var ajax = $.ajax('/players/otlist', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].overall + '</li> <li class="player-name">' + res[i].name + '</li> <li class="player-position">' + res[i].position + '</li> <li class="player-college">' + res[i].school + '</li> <li class="player-posrank">' + res[i].posrank + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listOGs").click(function() {
        $('#playerlist').html('');
        var ajax = $.ajax('/players/oglist', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].overall + '</li> <li class="player-name">' + res[i].name + '</li> <li class="player-position">' + res[i].position + '</li> <li class="player-college">' + res[i].school + '</li> <li class="player-posrank">' + res[i].posrank + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listOCs").click(function() {
        $('#playerlist').html('');
        var ajax = $.ajax('/players/oclist', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].overall + '</li> <li class="player-name">' + res[i].name + '</li> <li class="player-position">' + res[i].position + '</li> <li class="player-college">' + res[i].school + '</li> <li class="player-posrank">' + res[i].posrank + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listDEs").click(function() {
        $('#playerlist').html('');
        var ajax = $.ajax('/players/delist', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].overall + '</li> <li class="player-name">' + res[i].name + '</li> <li class="player-position">' + res[i].position + '</li> <li class="player-college">' + res[i].school + '</li> <li class="player-posrank">' + res[i].posrank + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listDTs").click(function() {
        $('#playerlist').html('');
        var ajax = $.ajax('/players/dtlist', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].overall + '</li> <li class="player-name">' + res[i].name + '</li> <li class="player-position">' + res[i].position + '</li> <li class="player-college">' + res[i].school + '</li> <li class="player-posrank">' + res[i].posrank + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listOLBs").click(function() {
        $('#playerlist').html('');
        var ajax = $.ajax('/players/olblist', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].overall + '</li> <li class="player-name">' + res[i].name + '</li> <li class="player-position">' + res[i].position + '</li> <li class="player-college">' + res[i].school + '</li> <li class="player-posrank">' + res[i].posrank + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listILBs").click(function() {
        $('#playerlist').html('');
        var ajax = $.ajax('/players/ilblist', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].overall + '</li> <li class="player-name">' + res[i].name + '</li> <li class="player-position">' + res[i].position + '</li> <li class="player-college">' + res[i].school + '</li> <li class="player-posrank">' + res[i].posrank + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listCBs").click(function() {
        $('#playerlist').html('');
        var ajax = $.ajax('/players/cblist', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].overall + '</li> <li class="player-name">' + res[i].name + '</li> <li class="player-position">' + res[i].position + '</li> <li class="player-college">' + res[i].school + '</li> <li class="player-posrank">' + res[i].posrank + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listSAFs").click(function() {
        $('#playerlist').html('');
        var ajax = $.ajax('/players/slist', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].overall + '</li> <li class="player-name">' + res[i].name + '</li> <li class="player-position">' + res[i].position + '</li> <li class="player-college">' + res[i].school + '</li> <li class="player-posrank">' + res[i].posrank + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listKs").click(function() {
        $('#playerlist').html('');
        var ajax = $.ajax('/players/klist', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].overall + '</li> <li class="player-name">' + res[i].name + '</li> <li class="player-position">' + res[i].position + '</li> <li class="player-college">' + res[i].school + '</li> <li class="player-posrank">' + res[i].posrank + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listPs").click(function() {
        $('#playerlist').html('');
        var ajax = $.ajax('/players/plist', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].overall + '</li> <li class="player-name">' + res[i].name + '</li> <li class="player-position">' + res[i].position + '</li> <li class="player-college">' + res[i].school + '</li> <li class="player-posrank">' + res[i].posrank + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listDraftR1").click(function() {
        $('#playerlist').html(' ');
        var ajax = $.ajax('/players/draftlistr1', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            console.log(res);
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].round + '</li> <li class="player-name">' + res[i].roundPick + '</li> <li class="player-position">' + res[i].overallPick + '</li> <li class="player-college">' + res[i].team + '</li> <li class="player-posrank">' + res[i].pic + '</li> </ul> </div>');
            }
        });
    });    

    $("#listDraftR2").click(function() {
        $('#playerlist').html(' ');
        var ajax = $.ajax('/players/draftlistr2', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            console.log(res);
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].round + '</li> <li class="player-name">' + res[i].roundPick + '</li> <li class="player-position">' + res[i].overallPick + '</li> <li class="player-college">' + res[i].team + '</li> <li class="player-posrank">' + res[i].pic + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listDraftR3").click(function() {
        $('#playerlist').html(' ');
        var ajax = $.ajax('/players/draftlistr3', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            console.log(res);
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].round + '</li> <li class="player-name">' + res[i].roundPick + '</li> <li class="player-position">' + res[i].overallPick + '</li> <li class="player-college">' + res[i].team + '</li> <li class="player-posrank">' + res[i].pic + '</li> </ul> </div>');
            }
        });
    });    

    $("#listDraftR4").click(function() {
        $('#playerlist').html(' ');
        var ajax = $.ajax('/players/draftlistr4', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            console.log(res);
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].round + '</li> <li class="player-name">' + res[i].roundPick + '</li> <li class="player-position">' + res[i].overallPick + '</li> <li class="player-college">' + res[i].team + '</li> <li class="player-posrank">' + res[i].pic + '</li> </ul> </div>');
            }
        });
    });

    $("#listDraftR5").click(function() {
        $('#playerlist').html(' ');
        var ajax = $.ajax('/players/draftlistr5', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            console.log(res);
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].round + '</li> <li class="player-name">' + res[i].roundPick + '</li> <li class="player-position">' + res[i].overallPick + '</li> <li class="player-college">' + res[i].team + '</li> <li class="player-posrank">' + res[i].pic + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listDraftR6").click(function() {
        $('#playerlist').html(' ');
        var ajax = $.ajax('/players/draftlistr6', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            console.log(res);
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].round + '</li> <li class="player-name">' + res[i].roundPick + '</li> <li class="player-position">' + res[i].overallPick + '</li> <li class="player-college">' + res[i].team + '</li> <li class="player-posrank">' + res[i].pic + '</li> </ul> </div>');
            }
        });
    });
    
    $("#listDraftR7").click(function() {
        $('#playerlist').html(' ');
        var ajax = $.ajax('/players/draftlistr7', {
            type: 'GET',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            for(let i in res) {
                $('#playerlist').append('<div> <ul class="players-list"> <li class="player-rank">' + res[i].round + '</li> <li class="player-name">' + res[i].roundPick + '</li> <li class="player-position">' + res[i].overallPick + '</li> <li class="player-college">' + res[i].team + '</li> <li class="player-posrank">' + res[i].pic + '</li> </ul> </div>');
            }
        });
    });
    
    $("#deletePlayers").click(function() {
        var ajax = $.ajax('/players/delete', {
            type: 'DELETE',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            console.log(res);
        });
    });
    
    $("#deleteDraft").click(function() {
        var ajax = $.ajax('/draft/delete', {
            type: 'DELETE',
            datatype: 'JSON'
        });
        ajax.done(function(res) {
            if(res.length == 0) {
                console.log('Nothing!');
            }
            console.log(res);
        });
    });
    
    $('#getUsers').click (function() {
        var ajax = $.ajax ('/users', {
            type: 'GET',
            datatype: JSON
        });
        ajax.done (function (res) {
            for (let i in res) {
                console.log(res[i].username);
            }
        });
    });
    
    $('#click-to-logout').click (function () {
        var ajax = $.ajax ('/logout', {
            type: 'GET'
        });
        ajax.done (function (res) {
            window.location.reload(true);
        });
    });
    
});

    