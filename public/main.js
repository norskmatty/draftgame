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
                console.log(res);
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
                console.log(res);
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
             draftpos : 23,
             pic : "buccaneers.png"
        };
        var ajax = $.ajax('/players/update', {
            type: 'PUT',
            data: JSON.stringify (item),
            datatype: 'JSON',
            contentType: 'application/json'
        });
        ajax.done(function(res) {
            console.log(res.pic);
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
                $('#playerlist').append('<div> <ul class="players-list"> <li class="helmet-image"> <img src="../images/' + res[i].pic + '"> </li> <li class="player-rank">' + res[i].round + '</li> <li class="player-name">' + res[i].roundPick + '</li> <li class="player-position">' + res[i].overallPick + '</li> <li class="player-college">' + res[i].team + '</li> </ul> </div>');
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
    
    $('#choose-team').click (function () {
        $('#team-select-box').show();
    });
    
    $('.bills').hover(function() {
        $('#pointer').css('margin-left', '93px');
        $('#pointer').css('margin-top', '30px');
       $('#pointer').show();    
    });
    
    $('.bills').mouseleave(function() {
        $('#pointer').hide();
    });
    
    $('.bills').click(function() {
        var item = {'team' : "Buffalo Bills"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.dolphins').hover(function() {
        $('#pointer').css('margin-left', '93px');
        $('#pointer').css('margin-top', '80px');
        $('#pointer').show();    
    });

        $('.dolphins').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.dolphins').click(function() {
        var item = {'team' : "Miami Dolphins"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });
    
    $('.patriots').hover(function() {
        $('#pointer').css('margin-left', '93px');
        $('#pointer').css('margin-top', '130px');
        $('#pointer').show();    
    });

    $('.patriots').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.patriots').click(function() {
        var item = {'team' : "New England Patriots"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.jets').hover(function() {
        $('#pointer').css('margin-left', '93px');
        $('#pointer').css('margin-top', '180px');
        $('#pointer').show();    
    });

    $('.jets').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.jets').click(function() {
        var item = {'team' : "New York Jets"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.cowboys').hover(function() {
        $('#pointer').css('margin-left', '93px');
        $('#pointer').css('margin-top', '255px');
        $('#pointer').show();    
    });

    $('.cowboys').mouseleave(function() {
        $('#pointer').hide();
    });    

    $('.cowboys').click(function() {
        var item = {'team' : "Dallas Cowboys"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });
    
    $('.giants').hover(function() {
        $('#pointer').css('margin-left', '93px');
        $('#pointer').css('margin-top', '305px');
        $('#pointer').show();    
    });

    $('.giants').mouseleave(function() {
        $('#pointer').hide();
    });   

    $('.giants').click(function() {
        var item = {'team' : "New York Giants"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.eagles').hover(function() {
        $('#pointer').css('margin-left', '93px');
        $('#pointer').css('margin-top', '355px');
        $('#pointer').show();    
    });

    $('.eagles').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.eagles').click(function() {
        var item = {'team' : "Philadelphia Eagles"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.washington').hover(function() {
        $('#pointer').css('margin-left', '93px');
        $('#pointer').css('margin-top', '405px');
        $('#pointer').show();    
    });

    $('.washington').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.washington').click(function() {
        var item = {'team' : "Washington Redskins"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });
    
    $('.ravens').hover(function() {
        $('#pointer').css('margin-left', '358px');
        $('#pointer').css('margin-top', '30px');
       $('#pointer').show();    
    });
    
    $('.ravens').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.ravens').click(function() {
        var item = {'team' : "Baltimore Ravens"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.bengals').hover(function() {
        $('#pointer').css('margin-left', '358px');
        $('#pointer').css('margin-top', '80px');
        $('#pointer').show();    
    });

        $('.bengals').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.bengals').click(function() {
        var item = {'team' : "Cincinnati Bengals"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });
    
    $('.browns').hover(function() {
        $('#pointer').css('margin-left', '358px');
        $('#pointer').css('margin-top', '130px');
        $('#pointer').show();    
    });

    $('.browns').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.browns').click(function() {
        var item = {'team' : "Cleveland Browns"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.steelers').hover(function() {
        $('#pointer').css('margin-left', '358px');
        $('#pointer').css('margin-top', '180px');
        $('#pointer').show();    
    });

    $('.steelers').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.steelers').click(function() {
        var item = {'team' : "Pittsburgh Steelers"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.bears').hover(function() {
        $('#pointer').css('margin-left', '358px');
        $('#pointer').css('margin-top', '255px');
        $('#pointer').show();    
    });

    $('.bears').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.bears').click(function() {
        var item = {'team' : "Chicago Bears"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });
    
    $('.lions').hover(function() {
        $('#pointer').css('margin-left', '358px');
        $('#pointer').css('margin-top', '305px');
        $('#pointer').show();    
    });

    $('.lions').mouseleave(function() {
        $('#pointer').hide();
    });   
    
    $('.lions').click(function() {
        var item = {'team' : "Detroit Lions"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.packers').hover(function() {
        $('#pointer').css('margin-left', '358px');
        $('#pointer').css('margin-top', '355px');
        $('#pointer').show();    
    });

    $('.packers').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.packers').click(function() {
        var item = {'team' : "Green Bay Packers"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.vikings').hover(function() {
        $('#pointer').css('margin-left', '358px');
        $('#pointer').css('margin-top', '405px');
        $('#pointer').show();    
    });

    $('.vikings').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.vikings').click(function() {
        var item = {'team' : "Minnesota Vikings"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });
    
    $('.texans').hover(function() {
        $('#pointer').css('margin-left', '623px');
        $('#pointer').css('margin-top', '30px');
       $('#pointer').show();    
    });
    
    $('.texans').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.texans').click(function() {
        var item = {'team' : "Houston Texans"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.colts').hover(function() {
        $('#pointer').css('margin-left', '623px');
        $('#pointer').css('margin-top', '80px');
        $('#pointer').show();    
    });

    $('.colts').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.colts').click(function() {
        var item = {'team' : "Indianapolis Colts"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });
    
    $('.jaguars').hover(function() {
        $('#pointer').css('margin-left', '623px');
        $('#pointer').css('margin-top', '130px');
        $('#pointer').show();    
    });

    $('.jaguars').mouseleave(function() {
        $('#pointer').hide();
    });
    
    $('.jaguars').click(function() {
        var item = {'team' : "Jacksonville Jaguars"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.titans').hover(function() {
        $('#pointer').css('margin-left', '623px');
        $('#pointer').css('margin-top', '180px');
        $('#pointer').show();    
    });

    $('.titans').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.titans').click(function() {
        var item = {'team' : "Tenneessee Titans"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.falcons').hover(function() {
        $('#pointer').css('margin-left', '623px');
        $('#pointer').css('margin-top', '255px');
        $('#pointer').show();    
    });

    $('.falcons').mouseleave(function() {
        $('#pointer').hide();
    }); 

    $('.falcons').click(function() {
        var item = {'team' : "Atlanta Falcons"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });
    
    $('.panthers').hover(function() {
        $('#pointer').css('margin-left', '623px');
        $('#pointer').css('margin-top', '305px');
        $('#pointer').show();    
    });

    $('.panthers').mouseleave(function() {
        $('#pointer').hide();
    });    

    $('.panthers').click(function() {
        var item = {'team' : "Carolina Panthers"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.saints').hover(function() {
        $('#pointer').css('margin-left', '623px');
        $('#pointer').css('margin-top', '355px');
        $('#pointer').show();    
    });

    $('.saints').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.saints').click(function() {
        var item = {'team' : "New Orleans Saints"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.buccaneers').hover(function() {
        $('#pointer').css('margin-left', '623px');
        $('#pointer').css('margin-top', '405px');
        $('#pointer').show();    
    });

    $('.buccaneers').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.buccaneers').click(function() {
        var item = {'team' : "Tampa Bay Buccaneers"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });
    
    $('.broncos').hover(function() {
        $('#pointer').css('margin-left', '888px');
        $('#pointer').css('margin-top', '30px');
       $('#pointer').show();    
    });
    
    $('.broncos').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.broncos').click(function() {
        var item = {'team' : "Denver Broncos"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.chiefs').hover(function() {
        $('#pointer').css('margin-left', '888px');
        $('#pointer').css('margin-top', '80px');
        $('#pointer').show();    
    });

    $('.chiefs').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.chiefs').click(function() {
        var item = {'team' : "Kansas City Chiefs"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });
    
    $('.raiders').hover(function() {
        $('#pointer').css('margin-left', '888px');
        $('#pointer').css('margin-top', '130px');
        $('#pointer').show();    
    });

    $('.raiders').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.chargers').hover(function() {
        $('#pointer').css('margin-left', '888px');
        $('#pointer').css('margin-top', '180px');
        $('#pointer').show();    
    });

    $('.chargers').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.chargers').click(function() {
        var item = {'team' : "San Diego Chargers"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.cardinals').hover(function() {
        $('#pointer').css('margin-left', '888px');
        $('#pointer').css('margin-top', '255px');
        $('#pointer').show();    
    });

    $('.cardinals').mouseleave(function() {
        $('#pointer').hide();
    });    

    $('.cardinals').click(function() {
        var item = {'team' : "Arizona Cardinals"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.rams').hover(function() {
        $('#pointer').css('margin-left', '888px');
        $('#pointer').css('margin-top', '305px');
        $('#pointer').show();    
    });

    $('.rams').mouseleave(function() {
        $('#pointer').hide();
    }); 

    $('.rams').click(function() {
        var item = {'team' : "Los Angeles Rams"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.niners').hover(function() {
        $('#pointer').css('margin-left', '888px');
        $('#pointer').css('margin-top', '355px');
        $('#pointer').show();    
    });

    $('.niners').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.niners').click(function() {
        var item = {'team' : "San Francisco 49ers"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });

    $('.seahawks').hover(function() {
        $('#pointer').css('margin-left', '888px');
        $('#pointer').css('margin-top', '405px');
        $('#pointer').show();    
    });

    $('.seahawks').mouseleave(function() {
        $('#pointer').hide();
    });

    $('.seahawks').click(function() {
        var item = {'team' : "Seattle Seahawks"};
        var ajax = $.ajax ('/team/choose', {
            type: 'PUT',
            data: JSON.stringify (item),
            dataType: 'json',
            contentType: 'application/json'
        });
       ajax.done (function(res) {
          console.log (res); 
       });
    });
    
});

    