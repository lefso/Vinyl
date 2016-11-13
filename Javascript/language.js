/* gjør det mulig å bytte mellom norsk og engelsk på siden Om-klubben */

const englishAboutUs = {
    title: "About us",
    paragraph: "<p>Larvik vinylklubb was founded in 2008 by a group of local music enthusiasts. Our club is a nonprofit organization, and we are registered in the Norwegian Central Coordinating Register for Legal Entities (organization number 914 459 184).</p><p>The club is meant to be a meeting place for everyone who cares about music, no matter what genre. We arrange meetings, concerts and tours in order to share (flotte) musical experiences and have a good time together.</p><h2>Meetings and parties</h2><p>Larvik vinylklubb arranges club meetings every month, apart from July and August. At these meetings we have presentations about music, hi-fi, instruments or important persons and artists in the field of music. We also have quizzes and lotteries. In December we arrange a julebord (Christmas dinner), and in June there is a summer party.</p><h2>Concerts</h2><p>Our concerts feature special artists that you normally will not find at any other music venue in Larvik.</p><h2>Welcome!</h2><p>You do not have to be a member in order to attend our meetings or concerts. You don't even have to own any vinyl records! The only thing you need, is an interest in music and a wish to share it with other music enthusiasts.</p>"
}


const norwegianAboutUs = {
    title: "Om klubben",
    parapraph: "<h2>Formål</h2><p>Larvik vinylklubb ble dannet i 2008 av en gruppe lokale musikkentusiaster. Klubben vår er en ideell forening, og vi er registrert i Brønnøysundregistrene (organisasjonsnummer 914 459 184). Vinylklubben skal være en sosial arena for alle som er glad i og opptatt av musikk, uansett sjanger. Vi arrangerer medlemsmøter, konserter og turer for å dele flotte musikkopplevelser og ha det hyggelig sammen.</p><h2>Møter</h2><p>Klubben har medlemsmøte én gang i måneden, med unntak av juli og august. På møtene har vi foredrag om musikk, hi-fi, instrumenter eller personer og utøvere innenfor musikkfeltet. Vi har også quiz og utlodning. I desember arrangerer vi dessuten julebord, og i juni har vi sommerfest for medlemmene.</p><h2>Konserter</h2><p>På konsertene vi arrangerer, kan du få høre spennende musikk som normalt ikke ville fått noen scene i Larvik.</p><h2>Velkommen!</h2><p>Du behøver ikke være medlem for å delta på klubbmøtene eller komme på konsertene våre. Du trenger heller ikke å være eier av vinyl, det viktigste er at du vil delta i et fellesskap der interessen for musikk og musikkopplevelser står i sentrum.</p>"
}

/* endrer teksten til engelsk ved trykk */
function changeToEnglish() {
    document.getElementById("omKlubben").innerHTML = englishAboutUs.paragraph;
    document.getElementById("about").innerHTML = englishAboutUs.title;
}

/* endrer teksten til norsk ved trykk */
function changeToNorwegian() {
    document.getElementById("omKlubben").innerHTML = norwegianAboutUs.parapraph;
    document.getElementById("about").innerHTML = norwegianAboutUs.title;
}