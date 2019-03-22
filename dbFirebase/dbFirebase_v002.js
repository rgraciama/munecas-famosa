var configMunecas = {
    apiKey: "AIzaSyBIKKfh81DpinD7VrCrDBsc_DXqiMRK8AY",
    authDomain: "islas-munecas.firebaseapp.com",
    databaseURL: "https://islas-munecas.firebaseio.com",
    projectId: "islas-munecas",
    storageBucket: "islas-munecas.appspot.com",
    messagingSenderId: "785374214044"
};
firebase.initializeApp(configMunecas);
var dbMunecas = firebase.database();

//write session
function writeUserData(folderName, u, currU, d, dbMunecas) {
    dbMunecas.ref('/session/'+folderName).set({
      uses: u,
      curr: currU,
      time: d
    });
  }

//read Islands
var leadsRef = dbMunecas.ref("/islands");
var dbIslands;
leadsRef.on('value', function(snapshot) {
    dbIslands = snapshot.val();
});

//write island
function writeIslandData(keyIsland, name, dbMunecas) {
  dbMunecas.ref('/islands/'+keyIsland).set({name: name});
}

/*
function writeIslandData(keyIsland, name, dbMunecas) {
  dbMunecas.ref('/islands/').set({[keyIsland]: name});
}
*/