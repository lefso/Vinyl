
/* en objektliste med blogginnlegg */
const blogg = [
    {
        datoen: '12.11.2016',
        title: 'Freedoms Trio',
        text: 'Sjekk ut Freedoms Trio. De kommer og spiller for oss fredag 3. mars 2017 (i sammarbeid med Larvik Gitarfestival)',
        medie: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VGqP_cTiVzQ" frameborder="0" allowfullscreen></iframe>'
    },
    
    {
        datoen: '11.11.2016',
        title: 'Leonard Cohen er død',
        text: 'Enda en kjempe har falt. You will be missed.',
        medie: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ao0BdtZr2_M" frameborder="0" allowfullscreen></iframe>'
    },
    {
        datoen: '20.06.2016',
        title: 'A Purple Reign',
        text: 'Denne dokumentaren anbefales alle Prince fans.',
        medie: '<iframe width="560" height="315" src="https://www.youtube.com/embed/bgHhD50BaL4" frameborder="0" allowfullscreen></iframe>'
    },
    {
    datoen: '14.05.2016',
    title: 'Bowie tribute',
    text: 'Vi var så heldige og fikk besøk av Lars André Tokheim som kom for å snakke om innovatøren David Bowie, og hvor viktig Bowie har vært for musikken.',
    medie: ''
    }
]

/* legger blogginnleggene inn i html, en etter en */
const bloggInnlegg = document.getElementById("innhold")
for (let i = 0; i < blogg.length; i++) {
    let sectionElement = document.createElement("section");
    sectionElement.className = "bloggInnlegg";
    sectionElement.innerHTML += "<h3>" + blogg[i].datoen + "</h3>";
    sectionElement.innerHTML += "<h2>" + blogg[i].title + "</h2>";
    sectionElement.innerHTML += "<p>" + blogg[i].text + "</p>";
    sectionElement.innerHTML += blogg[i].medie;
    innhold.appendChild(sectionElement);
}
