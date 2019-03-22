var d = new Date().toString();
if (localStorage.getItem("userGrep") === null) localStorage.setItem("userGrep", window.Game.player_name);
if (localStorage.getItem("timeGrep") === null) localStorage.setItem("timeGrep", 0);
var u = localStorage.getItem("userGrep").split(",");
if (u===null || !(u.includes(window.Game.player_name))) {
    u.push(window.Game.player_name);
}
localStorage.setItem("userGrep", u);
var numUsages = parseInt(localStorage.getItem("timeGrep"))+1;
localStorage.setItem("timeGrep", numUsages);
writeUserData(localStorage.getItem("userGrep"), numUsages.toString(), window.Game.player_name, d, dbMunecas);