function loadRanking(){
    const req = new XMLHttpRequest();
    
    req.onload = (e) => {
      const apiRes = req.response;
      for(let i=0; i <= 18; i++){
        $("#rank-"+i).text(apiRes[i].team_name);
      }
    };
    req.responseType="json"
    req.open("GET", "https://apiv3.apifootball.com/?action=get_standings&league_id=302&APIkey=58fc3af279d9e2eb6ca98557a85242dd35757d3830a36ad5dac77c9330d89ce3");
    req.send();
}

function showBestPlayerEver(){
    $("#best-ever").css("visibility", "visible");
}