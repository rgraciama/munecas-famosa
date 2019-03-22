var headUrl = "https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb/Grepolis/";
var listLibs = [headUrl + "islands/func_islands_v002.js",
                headUrl + "conquests/func_conquests_v002.js"];

//listLibs.reverse();
function importarScript(nombre, callback) {
    var s = document.createElement("script");
    s.onload = callback;
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}

function doImportLibs(listLibs) {
    for (var lib of listLibs) {
        importarScript(lib);
    }
}

doImportLibs(listLibs);
//purge jsdelivr
//https://purge.jsdelivr.net/gh/rgraciama@latest