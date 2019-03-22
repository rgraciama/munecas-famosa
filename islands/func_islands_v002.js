
function writeIsland() {
    var islandKey = $('.islandinfo_coords').text().match(/([.0-9]*\d\/[.0-9]*\d)/g);
    islandKey = islandKey.toString().replace("/", "_");
    var islandName = $('#input-island-label').val();
    $('#write-island').val(islandKey + ","+islandName);
}