/*global $*/

$(function() {
    
    var socket = io();
    
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
                console.log(res[i]);
            }
        });
    });
    
    $("#updatePlayer").click(function() {
        var item = {
             name : "Avery Gennesy",
             posrank : 6
        };
        var ajax = $.ajax('/players/update', {
            type: 'PUT',
            data: JSON.stringify (item),
            datatype: 'JSON',
            contentType: 'application/json'
        });
        ajax.done(function(res) {
            console.log(res);
        });
    });
});