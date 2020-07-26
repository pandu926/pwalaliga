import footbalApi from './footbalApi.js';

    


function klasmen () {
    
    const api = new footbalApi();
    api.getData()
    .then(data => {
        if (data !== undefined) {
            klasmenData(data.standings[0].table);
            console.log(data);
        }
        if (data == undefined){
            console.log("asu");
                }
    });
    

}

        


const klasmenData = (data) =>{
        let dataKlub = "";
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
}
  
    

// klasmen();

export default {
    klasmen
};