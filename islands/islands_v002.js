$("body").append("<input id='write-island' type='hidden' value=''/>");

var addOnClick = function() {
    if (!$("#input-island-label").is(":visible")) {
        $(".island_info").append("<input type='text' id='input-island-label' style='width:120px;'>");


        var islandKey = $('.islandinfo_coords').text().match(/([.0-9]*\d\/[.0-9]*\d)/g);
        islandKey = islandKey.toString().replace("/", "_");
        
        var islandName = $('#islandCity_'+islandKey).text();
        $('#input-island-label').val(islandName);

        $(".island_info").append("<a onClick='writeIsland()' "+
        "style='float: left; margin: 0px 0px 0px 4px; display: block; width: 22px; height: 23px; background: url(&quot;https://grmh.pl/gui/but.png&quot;) -132px 0px repeat scroll;'"+
        "></a>");
    }
}

function setMapViewNamesLabels(dbIslands) {
    //Islas Mapa
    for (island in dbIslands) {  
        if (!$("span#island_"+island).is(":visible")) {
            $('#mini_i'+island).append("<span id='island_"+island+"' class='labels-islands' style='position:absolute;left:20%;top:5px;z-index: 100;'>"+dbIslands[island].name+"</span>");
        }
    }
}

function setCityViewNamesLabels(dbIslands) {
    //Islas Mapa
    for (island in dbIslands) {
        //console.log(island+" "+dbIslands[island]);   
        if (!$("span#islandCity_"+island).is(":visible")) {
            $('#island_'+island).append("<span id='islandCity_"+island+"' class='labels-islandsCity' style='font-weight: bold;position:absolute;left:20%;top:-20px;z-index: 900;'>"+dbIslands[island].name+"</span>");
        }      
    }
    /*Object.keys(dbIslands).forEach(function(key) {
        if (!$("span#islandCity_"+key).is(":visible")) {
            $('#island_'+key).append("<span id='islandCity_"+key+"' class='labels-islandsCity' style='font-weight: bold;position:absolute;left:20%;top:-20px;z-index: 900;'>"+dbIslands[key]+"</span>");
        }
    });*/
}

function writeIslandName() {
    var islandTag = $('#write-island').val();
    var islandKeyName = islandTag.split(",");
    writeIslandData(islandKeyName[0], islandKeyName[1], dbMunecas);
    $('#write-island').val("");
}