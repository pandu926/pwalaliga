

class footbalApi {
    constructor(){
      this.base_url = "https://api.football-data.org/v2/competitions/PD/";
           
    }
  
    getData (){
      if ("caches" in window) {
         caches.match(this.base_url + "standings?standingType=TOTAL",{
            headers: {
              
               "X-Auth-Token" : "ec78a270b2cb4e419790f867b9d1415c"
            },
            })
            .then(response => {
               return response.json();
            })
            .then(function(responseJson){
               
               let dataKlub = "";
               const data = responseJson.standings[0].table;
               data.forEach((dat) => {
                   console.log(dat);
                   dataKlub +=
                   `
                   
                   <tr>
                   <td>${dat.position}</td>
                   <td>${dat.team.name}</td>
                   <td>${dat.playedGames}</td>
                   <td>${dat.won}</td>
                   <td>${dat.lost}</td>
                   <td>${dat.points}</td>
                   </tr>
                   `
               });
               document.getElementById("data").innerHTML = dataKlub;
               
            })
            fetch(this.base_url + "standings?standingType=TOTAL",{
               headers: {
                  
                  "X-Auth-Token" : "ec78a270b2cb4e419790f867b9d1415c"
               },
               })
               .then(response => {
                  return response.json();
               })
         }
   }
   topScore (){
      if ("caches" in window) {
         caches.match("https://api.football-data.org/v2/competitions/PD/scorers?limit=20",{
            headers: {
              
               "X-Auth-Token" : "ec78a270b2cb4e419790f867b9d1415c"
            },
            })
            .then(response => {
               return response.json();
            })
            .then(function(responseJson){
               
               let topScore = "";
               const score = responseJson.scorers;
               score.forEach(skor => {
                   console.log(skor);
                   topScore +=
                   `
                   
                   <tr>
                   <td>${skor.player.name}</td>
                   <td>${skor.team.name}</td>
                   <td>${skor.numberOfGoals}</td>
                   
                   </tr>
                   `
               })
               document.getElementById("gol").innerHTML = topScore;
               
            })
            fetch(this.base_url + "scorers?limit=20",{
               headers: {
                  
                  "X-Auth-Token" : "ec78a270b2cb4e419790f867b9d1415c"
               },
               })
               .then(response => {
                  return response.json();
               })
         }
      
   }
   jadwal(){
      caches.match(this.base_url + "matches?matchday=38",{
         headers: {
            
            "X-Auth-Token" : "ec78a270b2cb4e419790f867b9d1415c"
         },
         })
         .then(response => {
            return response.json();
         })
         .then(function(responseJson){
            console.log(responseJson);
            let jadwal = "";
            const matchday = responseJson.matches;
            matchday.forEach(md => {
                console.log(md);
                jadwal +=
                `
                
                <tr>
                <td>${md.homeTeam.name}</td>
                <td>${md.score.fullTime.homeTeam}</td>
                <td>${md.score.fullTime.awayTeam}</td>
                <td>${md.awayTeam.name}</td>
                
                
                </tr>
                `
            })
            document.getElementById("jadwal").innerHTML = jadwal;
            
         })
    
         fetch(this.base_url + "matches?matchday=38",{
         headers: {
            
            "X-Auth-Token" : "ec78a270b2cb4e419790f867b9d1415c"
         },
         })
         .then(response => {
            return response.json();
         })
      }
   }

const api = new footbalApi();

export default footbalApi;