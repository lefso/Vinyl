const english = {
    title: "About us",
    paragraph: "<p>Larvik Vinylklubb was founded in 2008 by a group of local music enthusiasts. </p><p>Our club is a nonprofit organisation, registrated in the Brønnøysund register (organisation number 914 459 184). </p><p>The purpose of our organisation is to create a social arena for people of all ages who are interested in music - of any genre. We organise club meetings, concerts and trips for members and non-members.</p><p>The club meets once every month, with the exception of July and August.</p><p>The meetings entail lectures on music, hi-fi, instruments or musicians or people that are in some way relative within the field of music. There is also a quiz, lottery and of course great company.</p><p>During the year we arrange concerts with music that would otherwise not have been presented on any stage in Larvik. </p><p>In addition, the club arranges a yearly christmas dinner and summer get-together.</p><p>You don’t have to be a member to come to our club meetings. You don’t have to own any vinyl either. What we do hope you have, however, is the wish to participate in a community whose essence is the enjoyment of all music, and what it does to us as people.</p>"
}


const norwegian = {
    title: "Om klubben",
    parapraph: "<p>Larvik Vinylklubb ble dannet i 2008 av en rekke lokale musikkentusiaster.</p> <p>Klubben vår er en ideell forening (registrert i Brønnøysund – organisasjonsnummer 914 459 184).</p> <p>Vårt formål er å fungere som en sosial arena for folk i alle aldre som er glad i og opptatt av musikk – uansett sjanger. </p> <p>Derfor arrangerer vi medlemsmøter, konserter og turer for å dele felles musikkinteresse. </p><p>Klubben har medlemsmøte en gang i måneden, med unntak av juli-august. </p><p>Møtene inneholder foredrag om musikk, hi-fi, instrumenter eller personer/utøvere innenfor musikkfeltet. Det er i tillegg quiz, utlodning og hyggelig samvær. </p><p>I løpet av året arrangeres det også konserter med spennende musikk som normalt ikke ville fått noe scene i Larvik.</p> <p>Klubben har i tillegg julebord og sommerfest for medlemmene. </p><p> Du behøver ikke være medlem for å delta på klubbens møter. Du trenger heller ikke å være eier av vinyl, men håper at du har et ønske om å ta del i et fellesskap som bygger på opplevelse av musikk og hva det gjør med oss.</p>"
}

function changeToEnglish() {
    document.getElementById("omKlubben").innerHTML = english.paragraph;
    document.getElementById("about").innerHTML = english.title;
}

function changeToNorwegian() {
    document.getElementById("omKlubben").innerHTML = norwegian.parapraph;
    document.getElementById("about").innerHTML = norwegian.title;
}