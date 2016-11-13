/* Teller ned til neste arrangement */

function resterendeTid(slutt) { 
    let totalTid = Date.parse(slutt) - Date.now(); /*beregner antall millisekunder fra nå til slutt*/
    let dager = Math.floor(totalTid/(1000*60*60*24));  /*gjør om millisekunder til dager*/
    return {
        'Total': totalTid,
        'Dager': dager
    }; /*generer en liste med objekter med verdier som tilsvarer tiden mellom nå og sluttid*/
}

/* tar inn en deadline */
function startKlokke(sluttTid) { 
    const klokke = document.getElementById("timer");
    klokke.style.display = "block";
    let dagerSpan = klokke.querySelector(".dager");
    function oppdater() {
        let restT = resterendeTid(sluttTid);
        dagerSpan.innerHTML = restT.Dager;
        if (restT.Total>=0) {
            clearInterval(); /*tidsintervall*/
        }
    }
    oppdater();
    let tidsintervall = setInterval(oppdater,1000);
}

const kommendeArrangement = [["Nov 6 2016", "Dec 10 2016"], ["Dec 11 2016", "Jan 7 2017"], ["Jan 8 2017", "Feb 4 2017"], ["Feb 5 2017", "Mar 3 2017"], ["Mar 4 2017", "Apr 29 2017"]]; /* liste over kommende arrangement som timer skal telle ned til */

for (let i = 0; i<kommendeArrangement.length; i++){
    let start = kommendeArrangement[i][0];
    let slutt = kommendeArrangement[i][1];
    let startMs = Date.parse(start);
    let sluttMs = Date.parse(slutt);
    let naa = Date.now();
    
    if(sluttMs > naa && naa >= startMs) {
        startKlokke(slutt);
    }
}