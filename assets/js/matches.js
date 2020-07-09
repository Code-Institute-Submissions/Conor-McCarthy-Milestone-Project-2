$(document).ready(function() {
     
         writeToDocument('match');

});





function getData(match, cb) {
    var xhr = new XMLHttpRequest();

    var url ="https://cors-anywhere.herokuapp.com/https://api.pandascore.co/matches?filter[id]="+match+"&token=oWifVYBc_fpdoTvkGprkPZF3o02OMFXcex1mS647lASrhZjhxeg";
    

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
    xhr.open("GET", url);
    xhr.send();
}

 
function writeToDocument(match) { 
    match=560862;
    
    
    
    getData(match, function(data) {
        var gameDetails = [];
        console.dir(data);
        var el = document.getElementById("game-1");

        data.forEach(function(item) {
           
            var matchRow = [];
           matchRow.push('<p>'+item['name']+'</p>');
            gameDetails.push(`<tr>${matchRow}</tr>`);
        });
        el.innerHTML = `<p>${gameDetails}</p>`;
    });

     getData(match, function(data) {
        var gameDetails = [];
        var el = document.getElementById("league-and-format");

        data.forEach(function(item) {
           
            var matchRow = [];
           matchRow.push('<p>'+item['league']['name']+'<br>Best of 1</p>');
            gameDetails.push(`<tr>${matchRow}</tr>`);
        });
        el.innerHTML = `<p>${gameDetails}</p>`;
    });

    
}
 
 
